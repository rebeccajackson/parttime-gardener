import request from 'supertest'

const db = require('../../../server/db/db')
const server = require('../../../server/server')

jest.mock('../../../server/db/db', () => ({
  getMonths: jest.fn()
}))


test('GET /months loads array of object months', () => {
  let expected = [{
    0: {
      id: 1,
      name: 'January',
      season: 'summer'
    },
  }]

  db.getMonths.mockImplementation(() => Promise.resolve(expected))

  return request(server).get('/api/months')
  .expect(200)
  .then(res => {
    let actual = res.body

    expect(actual).toEqual(expected)
  })
})

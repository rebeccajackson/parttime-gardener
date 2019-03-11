import request from 'supertest'

const db = require('../../../server/db/db')
const server = require('../../../server/server')

jest.mock('../../../server/db/db', () => ({
  getMonths: jest.fn(),
  getMonthVeges: jest.fn()
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

test('POST /months loads array of vege objects', () => {
  let expected = [{
    0: {id: 1, name: 'Tomato', harvest: '8-17 weeks'},
    1: {id: 2, name: 'Snow Pea', harvest: '12-14 weeks'},
  }]

  db.getMonthVeges.mockImplementation(() => Promise.resolve(expected))

  return request(server).post('/api/months', 1)
  .expect(200)
  .then(res => {
    let actual = res.body

    expect(actual).toEqual(expected)
  })
})



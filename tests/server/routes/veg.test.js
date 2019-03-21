import request from 'supertest'

const db = require('../../../server/db/db')
const server = require('../../../server/server')

jest.mock('../../../server/db/db', () => ({
  getVeges: jest.fn(),
  getUserVeges: jest.fn(),
  getPlantingMonthsArr: jest.fn()
}))

const expectedVeg = [{
  0: {id: 1, name: 'Tomato', type: 'fruit', harvest: '8-17 weeks',  tips:'Multiple harvests', img_url: '/veg.png'},
  1: {id: 2, name: 'Snow Pea', type: 'veg', harvest: '12-14 weeks', tips:'Space plants: 8 - 10 cm apart', img_url: '/veg.png'},
}]

test('GET / loads array of vege objects', () => {
  db.getVeges.mockImplementation(() => Promise.resolve(expectedVeg))

  return request(server).get('/api')
  .expect(200)
  .then(res => {
    let actual = res.body
    expect(actual).toEqual(expectedVeg)
  })
})

test('POST /veg loads array of vege objects by username', () => {
  const user = {username: 'monkey'}
  db.getUserVeges.mockImplementation(() => Promise.resolve(expectedVeg))

  return request(server).post('/api/veg', user)
  .expect(200)
  .then(res => {
    let actual = res.body
    expect(actual).toEqual(expectedVeg)
  })
})

test('POST /veg loads array of vege objects by username', () => {
  const veg = {name: 'tomato'}

  const expectedMonths = [
    {id: 1, name: 'January', season: 'summer'},
    {id: 2, name: 'Febuary', season: 'summer'},
    {id: 3, name: 'March', season: 'autumn'}
  ]


  db.getPlantingMonthsArr.mockImplementation(() => Promise.resolve(expectedMonths))

  return request(server).post('/api/veg/:vegName', veg)
  .expect(200)
  .then(res => {
    let actual = res.body
    expect(actual).toEqual(expectedMonths)
  })
})
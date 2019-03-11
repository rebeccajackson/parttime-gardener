import request from 'supertest'

const db = require('../../../server/db/db')
const server = require('../../../server/server')

jest.mock('../../../server/db/db', () => ({
  getMonths: jest.fn()
}))


test('GET /months loads array of object months', () => {
  expect(1).toBe(false)
})
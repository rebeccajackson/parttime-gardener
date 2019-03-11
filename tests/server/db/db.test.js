const testEnv = require('../setup-db')
const db = require('../../../server/db/db')

let testDb = null

// test db setup 
beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

const veg = {
  id: 1,
  name: 'Tomato'
}

// db function tests
test('getVeges returns all the veges', () => {
  let expected = 14

  return db.getVeges(testDb)
  .then(veges => {
    let actual = veges.length
    expect(actual).toEqual(expected)
  })
})

test('getMonths returns all the months', () => {
  let expected = 12

  return db.getMonths(testDb)
  .then(veges => {
    let actual = veges.length
    expect(actual).toEqual(expected)
  })
})

test('getMonthVeges by monthId returns vegs for that month', () => {
  let expected = 7

  return db.getMonthVeges(1, testDb)
  .then(veges => {
    let actual = veges.length
    expect(actual).toEqual(expected)
  })
})

test('getMonthVeges by monthId returns vegs for that month', () => {
  let expected = 7

  return db.getMonthVeges(1, testDb)
  .then(veges => {
    let actual = veges.length
    expect(actual).toEqual(expected)
  })
})

test('getUserVeges by username returns array of veg objects', () => {
  let expected = 3

  return db.getUserVeges('rebecca', testDb)
  .then(veges => {
    let actual = veges.length
    expect(actual).toEqual(expected)
  })
})

test('getPlantingMonthsArr by veg returns array of month objects', () => {
  let expected = 5

  return db.getPlantingMonthsArr(veg, testDb)
  .then(months => {
    let actual = months.length
    expect(actual).toEqual(expected)
  })
})
import { Context } from 'aws-lambda'
import { helloWorld } from '../../handlers/hello-world'

const context = {} as Context
const callback = jest.fn()

it('returns 400 Bad Request when no name provided', async done => {
  // Given
  const event = {
    body: JSON.stringify({
      name: '',
    }),
  }

  // When
  const result = await helloWorld(event, context, callback)

  // Then
  expect(result.statusCode).toBe(400)
  done()
})

it('returns cause message when no name provided', async done => {
  // Given
  const event = {
    body: JSON.stringify({
      name: '',
    }),
  }
  const cause = 'Property name is missing'

  // When
  const result = await helloWorld(event, context, callback)

  // Then
  expect(result.body).toEqual(JSON.stringify({ cause }))
  done()
})

it('returns 200 Ok', async done => {
  // Given
  const event = {
    body: JSON.stringify({
      name: 'John',
    }),
  }

  // When
  const result = await helloWorld(event, context, callback)

  // Then
  expect(result.statusCode).toBe(200)
  done()
})

it('returns greeting message', async done => {
  // Given
  const event = {
    body: JSON.stringify({
      name: 'Mary',
    }),
  }
  const greeting = 'Hello Mary!'

  // When
  const result = await helloWorld(event, context, callback)

  // Then
  expect(result.body).toEqual(JSON.stringify({ greeting }))
  done()
})

it('returns 500 Internal Server Error when no body provided', async done => {
  // Given
  const event = {}

  // When
  const result = await helloWorld(event, context, callback)

  // Then
  expect(result.statusCode).toBe(500)
  done()
})

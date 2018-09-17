import { response } from '../../http'

describe('200 Ok', () => {
  it('returns status 200 Ok', () => {
    expect(response.ok().statusCode).toBe(200)
  })

  it('returns stringified body', () => {
    // Given
    const body = { hello: 'world' }
    const stringifiedBody = JSON.stringify(body)

    // When
    const result = response.ok(body)

    expect(result.body).toEqual(stringifiedBody)
  })
})

describe('201 Created', () => {
  it('returns status 201 Created', () => {
    expect(response.created().statusCode).toBe(201)
  })

  it('returns stringified body', () => {
    // Given
    const body = { hello: 'world' }
    const stringifiedBody = JSON.stringify(body)

    // When
    const result = response.created(body)

    expect(result.body).toEqual(stringifiedBody)
  })
})

describe('204 No Content', () => {
  it('returns status 204 No Content', () => {
    expect(response.noContent.statusCode).toBe(204)
  })
})

describe('400 Bad Request', () => {
  it('returns status 400 Bad Request', () => {
    expect(response.badRequest().statusCode).toBe(400)
  })

  it('returns stringified body', () => {
    // Given
    const body = { hello: 'world' }
    const stringifiedBody = JSON.stringify(body)

    // When
    const result = response.badRequest(body)

    expect(result.body).toEqual(stringifiedBody)
  })
})

describe('409 Conflict', () => {
  it('returns status 409 Conflict', () => {
    expect(response.conflict.statusCode).toBe(409)
  })
})


describe('500 Internal Server Error', () => {
  it('returns status 500 Internal Server Error', () => {
    expect(response.internalServerError.statusCode).toBe(500)
  })
})


import { Context, Handler } from 'aws-lambda'
import { response, withCors } from '../../http'

it('returns response with Access-Control-Allow-Origin header', async done => {
  const handler: Handler = async () => response.ok()

  // When
  const result = await withCors(handler)({}, {} as Context, () => {})

  // Then
  expect(result.headers).toEqual({
    'Access-Control-Allow-Origin': '*',
  })
  done()
})

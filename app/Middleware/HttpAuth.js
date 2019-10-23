'use strict'

const Env = use('Env')
const Encryption = use('Encryption')

class HttpAuth {
  async handle ({ request, response }, next) {
    const { authorization } = request.headers()

    const decrypt = Encryption.decrypt(authorization.split(' ')[1])

    if (decrypt != Env.get('APP_KEY')) {
      return response.status(503).json({
        message: 'Invalid HTTP Token'
      })
    }

    await next()
  }
}

module.exports = HttpAuth

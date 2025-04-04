import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'

export default class SessionController {
  async store({ request, auth, response }: HttpContext) {
    const { identifier, password } = request.only(['identifier', 'password'])
    const user = await User.verifyCredentials(identifier, password)

    return await auth.use('api').createToken(user)
  }

  async delete({ request, auth, response }: HttpContext) {
    await auth.use('api').invalidateToken()
  }
}

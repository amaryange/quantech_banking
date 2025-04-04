// app/Services/AuthService.ts
import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'
import { JwtGuard } from '../auth/jwt/guard'

export default class AuthService {
  async login({ request, auth }: HttpContext) {
    const { identifier, password } = request.only(['identifier', 'password'])
    const user = await User.verifyCredentials(identifier, password)

    const jwt = auth.use('jwt') as JwtGuard<User>
    const token = await jwt.generate(user)

    return token
  }

  async logout({ auth }: HttpContext) {
    await auth.use('jwt').revoke()
    return { message: 'Déconnexion réussie' }
  }

  async currentUser({ auth }: HttpContext) {
    await auth.use('jwt').authenticate()
    return auth.user!.serialize()
  }

  async refreshToken({ auth }: HttpContext) {
    const jwt = auth.use('jwt') as JwtGuard<User>
    await jwt.authenticate()

    const user = auth.user!
    await jwt.revoke()

    return await jwt.generate(user)
  }
}

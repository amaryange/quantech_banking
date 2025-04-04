// app/Controllers/AuthController.ts
import { inject } from '@adonisjs/core'
import AuthService from '#services/auth_service'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AuthController {
  constructor(protected authService: AuthService) {}

  async login(ctx: HttpContext) {
    return this.authService.login(ctx)
  }

  async logout(ctx: HttpContext) {
    return this.authService.logout(ctx)
  }

  async currentUser(ctx: HttpContext) {
    return this.authService.currentUser(ctx)
  }

  async refreshToken(ctx: HttpContext) {
    return this.authService.refreshToken(ctx)
  }
}

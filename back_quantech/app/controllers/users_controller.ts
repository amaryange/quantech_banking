// app/controllers/users_controller.ts
import { inject } from '@adonisjs/core'
import UserService from '#services/user_service'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class UsersController {
  constructor(private userService: UserService) {}

  async store({ request, response }: HttpContext) {
    const payload = request.only(['fullName', 'email', 'phone', 'password'])

    try {
      const user = await this.userService.createUser(payload)
      return response.created(user)
    } catch (error) {
      return response.status(error.status || 500).json({ message: error.message })
    }
  }
}

// app/services/user_service.ts
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'
import { Exception } from '@adonisjs/core/exceptions'

type CreateUserData = {
  fullName: string
  email: string
  phone: string
  password: string
}

export default class UserService {
  async createUser(userData: CreateUserData): Promise<User> {
    const hashedPassword = await hash.make(userData.password)

    const existingUser = await User.query()
      .where('email', userData.email)
      .orWhere('phone', userData.phone)
      .first()

    if (existingUser) {
      throw new Exception('Email ou téléphone déjà utilisé', { status: 409 })
    }

    return await User.create({
      fullName: userData.fullName,
      email: userData.email,
      phone: userData.phone,
      password: hashedPassword,
    })
  }
}

import factory from '@adonisjs/lucid/factories'
import User from '#models/user'
import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'

export const UserFactory = factory
  .define(User, async ({ faker }) => {
    return {
      fullName: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      phone: faker.phone.number(),
      password: await hash.make('0987654321'),
      createdAt: DateTime.now(),
      updatedAt: DateTime.now(),
    }
  })
  .build()

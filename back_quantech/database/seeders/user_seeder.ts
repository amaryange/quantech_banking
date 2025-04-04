import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { UserFactory } from '#database/factories/user_factory'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    await UserFactory.merge([
      {
        fullName: 'Kouadio Benoît',
        email: 'kouadio@email.com',
        phone: '0987453245',
      },
      {
        fullName: 'Meledje Lasme',
        email: 'meledje@email.com',
        phone: '+0987453244',
      },
    ]).createMany(2)
  }
}

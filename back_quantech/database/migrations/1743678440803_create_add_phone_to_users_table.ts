import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'add_phone_to_users'

  async up() {
    this.schema.alterTable('users', (table) => {
      table.string('phone').unique().nullable()
    })
  }

  async down() {
    this.schema.alterTable('users', (table) => {
      table.dropColumn('phone')
    })
  }
}

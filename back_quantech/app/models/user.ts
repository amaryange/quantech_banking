import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import { Exception } from '@adonisjs/core/exceptions'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email', 'phone'],
  passwordColumnName: 'password',
})

export default class User extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fullName: string | null

  @column()
  declare email: string

  @column()
  declare phone: string

  @column({ serializeAs: null })
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  static accessTokens = DbAccessTokensProvider.forModel(User)

  static async verifyCredentials(identifier: string, password: string) {
    try {
      const user = await this.query()
        .where('email', identifier)
        .orWhere('phone', identifier)
        .first()

      if (!user) {
        throw new Exception('Identifiants incorrects', { status: 400 })
      }

      const isPasswordValid = await hash.verify(user.password, password)
      if (!isPasswordValid) {
        throw new Exception('Identifiants incorrects', { status: 400 })
      }

      return user
    } catch (error) {
      // Gérez les erreurs ici
      throw error
    }
  }
}

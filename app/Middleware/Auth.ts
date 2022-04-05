import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class Auth {
  public async handle(
    { response }: HttpContextContract,
    next: () => Promise<void>
  ) {
    if (User) {
      response.unauthorized({ error: 'Must be logged in' })
      return
    }

    await next()
  }
}


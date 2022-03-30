import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'

export default class UsersController {
  public async create({ request, response }: HttpContextContract) {
    const { username , password} =  request.all()
    const user = new User()

    user.username = username
    user.password = password

    await user.save()

    return response.status(200).json(user)
  }

}

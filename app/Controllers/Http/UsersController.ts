import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'

export default class UsersController {
  public async store({ request, response }: HttpContextContract) {
    const { email, username , password} =  request.all()
    const user = new User()

    user.email = email
    user.username = username
    user.password = password

    const userExists = User.find({ where: { email } })

    if(await userExists){
      return response.status(409).json({message: "Username contains this registered email."})
    }

    await user.save()

    return response.status(200).json(user)
  }

  public async login({ request, response }:HttpContextContract) {
    try {

    } catch (error) {
      return response.status(500).send({ error: error })
    }
  }

}

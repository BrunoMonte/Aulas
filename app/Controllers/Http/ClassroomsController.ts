import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Classroom from '../../Models/Classroom'

export default class ClassroomsController {

  public async create({ request, response }: HttpContextContract) {
    const { name } = request.all()
    const classroom = new Classroom()

    classroom.name = name

    await classroom.save()

    return response.status(200).json(classroom)
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}

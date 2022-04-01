import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Classroom from '../../Models/Classroom'

export default class ClassroomsController {

  public async index({ response }: HttpContextContract) {
      const classroom = await Classroom.all()
      return response.ok(classroom)
  }

  public async create({ request, response }: HttpContextContract) {
    const { name } = request.all()
    const classroom = new Classroom()

    classroom.name = name

    await classroom.save()

    return response.status(200).json(classroom)
  }

  public async store({  }: HttpContextContract) {
    
  }

  public async show({ params, response }: HttpContextContract) {
    const { id } = params
    const classroom = await Classroom.find(id)

    return response.json(classroom)
  }

  public async edit({ params, request, response }: HttpContextContract) {
    const { id } = params
    const { name } = request.all()
    const classroom:any = await Classroom.find(id)

    classroom.name = name || classroom.name

    await classroom.save()

    return response.json(classroom)
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}

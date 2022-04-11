import Route from '@ioc:Adonis/Core/Route'

Route.post('/users', 'UsersController.store')
Route.post('/login', 'UsersController.login')
Route.post('/classes', 'ClassroomsController.create')
Route.get('/classes', 'ClassroomsController.index')
Route.get('/classes/:id', 'ClassroomsController.show')
Route.put('/classes', '')
Route.delete('/classes/:id', '')
Route.post('/classes/comments', '')

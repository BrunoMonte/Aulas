import Route from '@ioc:Adonis/Core/Route'

Route.post('/users', 'UsersController.create')
Route.post('/classes', '')
Route.get('/classes', '')
Route.get('/classes/:id', '')
Route.put('/classes', '')
Route.delete('/classes/:id', '')
Route.post('/classes/comments', '')

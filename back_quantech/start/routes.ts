/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const SessionController = () => import('#controllers/session_controller')
import { middleware } from '#start/kernel'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.group(() => {
  router.post('/session', '#controllers/session_controller.store')
  router
    .delete('/session', '#controllers/session_controller.destroy')
    .use(middleware.auth({ guards: ['api'] }))
})

router
  .group(() => {
    router.post('/add', '#controllers/users_controller.store')
  })
  .prefix('/user')

router.post('/login', '#controllers/auth_controller.login')
router.post('/logout', '#controllers/auth_controller.logout').use(middleware.auth())
router.get('/me', '#controllers/auth_controller.currentUser').use(middleware.auth())

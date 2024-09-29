import { Elysia, t } from 'elysia'
import { swagger } from '@elysiajs/swagger'

import { note } from './note'
import { user } from './user'


const app = new Elysia()
    .use(swagger())
    
    .use(note) 
    .use(user)
    .onError(({ error, code }) => { 
      if (code === 'NOT_FOUND') return 'Not Found :('

        console.error(error) 
    }) 
    .get(
        '/note/:index',{}
    )
    .listen(3000)
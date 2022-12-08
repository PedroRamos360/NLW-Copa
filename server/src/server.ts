import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'  

import { poolRoutes } from './routes/pool';
import { gameRoutes } from './routes/game';
import { guessRoutes } from './routes/guess';
import { userRoutes } from './routes/user';
import { authRoutes } from './routes/auth';


async function bootstrap() {
    const fastify = Fastify({
        logger: true
    })

    await fastify.register(cors, {
        origin: true
    })

    // Em produção, o JWT_SECRET deve ser uma variável de ambiente, jamais deve ser deixado no código fonte 
    await fastify.register(jwt, {
        secret: 'nlwcopa'
    })

    fastify.register(poolRoutes) 
    fastify.register(userRoutes)
    fastify.register(guessRoutes)
    fastify.register(gameRoutes)
    fastify.register(authRoutes)



    await fastify.listen({ port: 3333, /* host: '0.0.0.0'*/ })
}

bootstrap()
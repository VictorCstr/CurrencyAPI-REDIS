import { createClient } from 'redis'
import IORedis from 'ioredis'

export const redis = createClient({
    socket: {
        host:"redis",
        port: 6379,
    },
    password:"victorcastr",
   
})

redis.connect()
  
redis.on('error', (e) => console.log('Redis Client Error', e))


// export const redis = new IORedis({
//     host: process.env.REDIS_HOST,
//     port: 6379,
//     password: process.env.REDIS_PASSWORD
// })
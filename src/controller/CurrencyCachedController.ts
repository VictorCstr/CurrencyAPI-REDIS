import {PrismaClient} from "@prisma/client"
import { Request, Response } from "express"
import { redis } from "../lib/cache"

const prisma = new PrismaClient()

export default class CurrencyCachedControler{
    static async findCurrency(req: Request, res: Response){
        try{
            const cacheKey = "currency:all"

            const cachedCurrency = await redis.get(cacheKey)

            console.time("Find Currency")

            if(cachedCurrency){
                console.timeEnd("Find Currency")
                return res.json(JSON.parse(cachedCurrency))
            }
          
            const currency = await prisma.currency.findMany()
            console.timeEnd("Find Currency")

            await redis.set(cacheKey, JSON.stringify(currency))

            return res.json(currency)
        }catch(error){
            console.error(error)
            return res.json({error})
        }
    }
}
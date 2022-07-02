import {PrismaClient} from "@prisma/client"
import { Request, Response } from "express"

const prisma = new PrismaClient()

export default class CurrencyControler{
    static async findCurrency(req: Request, res: Response){
        try{
            console.time("Find Currency")
            const currency = await prisma.currency.findMany()
            console.timeEnd("Find Currency")
            return res.json(currency)
        }catch(error){
            console.error(error)
            return res.json({error})
        }
    }
}
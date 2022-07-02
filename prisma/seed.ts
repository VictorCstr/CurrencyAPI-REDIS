import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

async function main(){
    let currency = [];
    for (let i = 0; i < 1000; i++) {
      currency.push({
        id : randomUUID() ,
        name: faker.finance.currencyName(),
        symbol: faker.finance.currencySymbol(),
        code: faker.finance.currencyCode(),
        address: faker.finance.ethereumAddress()
      })
    }
    await prisma.currency.createMany({
        data: currency
    })
}

main()
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
    .finally(async () =>{
        await prisma.$disconnect();
    })
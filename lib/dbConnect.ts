import { Console } from "console";
import mongoose from "mongoose";
import { ACTION } from "next/dist/client/components/app-router-headers";
import { Erica_One } from "next/font/google";


async function dbConnect() {
    try {
        let database = await mongoose.connect(process.env.DATABASEURL!)


    } catch (error) {
        throw new Error('Connection failed')
    }
}

export default dbConnect
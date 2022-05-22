import mongoose from 'mongoose'
import { endpoints } from '../endpoints'

export async function connect() {

    console.log(endpoints.dbStringConnection)
    try {
        await mongoose.connect(endpoints.dbStringConnection);
        console.log('connected');
    } catch (error) { 
        console.log('failed');
    }
}
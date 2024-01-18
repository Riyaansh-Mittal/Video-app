// require('dotnev').config({path: './env'})
import dotenv from 'dotenv'
// import {DB_NAME} from './constants.js'
// import mongoose from 'mongoose'
import connectDB from './db/index.js'

dotenv.config()

connectDB()





// import express from 'express'

// const app = express()

// (async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGO}/${DB_NAME}`)
//         app.on("error", (error)=>{
//             console.log("ERROR: ", error);
//             throw error
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening to port ${process.env.PORT}`);
//         })
//     }catch (error) {
//         console.log("ERROR: ", error);
//         throw err
//     }

// })()
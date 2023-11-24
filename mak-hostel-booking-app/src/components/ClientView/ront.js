 import express from 'express'
 import { connectToDb, getDb } from './db'

 //init application & middleware
 const app = express()

// db connection
// eslint-disable-next-line no-unused-vars
let db

connectToDb((err) => {
if(!err) {
    app.listen(3000, () => {
        console.log('app listening on port 3000')
    })
    db =getDb()
}
})
 app.listen(3000, () => {
    console.log('app listening on port 3000')
 })
 // routes
 app.get('/books',(req, res) =>{
    res.json({mssg: "Welcome to mongodb api"})
 })
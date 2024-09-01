import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js';
import viewRouter from './routes/views.router.js'
import { Server } from 'socket.io';



const app= express();
const PORT=8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// configuración de HBs
app.engine('handlebars', handlebars.engine());
app.set('views',__dirname+"/views");
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"))


// declaracion de router

app.use('/', viewRouter)

const httpServer=app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`)
})

const socketServer = new Server(httpServer)



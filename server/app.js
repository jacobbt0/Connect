const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const { createServer } = require('http')
const { Server } = require('socket.io');

const app = express();
const server = createServer(app)

//Setting socket.io orgin using cors
const io = new Server(server,{
    cors:{
        origin:'http://localhost:3000'
    }
});
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.get('/',(req,res)=>{
    res.json({ message: 'message' })
})

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
    
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });

    // Custom event example
    socket.on('message', (data) => {
        console.log('Message received:', data);
        io.emit('message', data); // Broadcast to all clients
    });
});
  
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

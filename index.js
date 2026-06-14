import express from "express";

const app = express();
const PORT = process.env.PORT ?? 8080

app.get('/', (req, res) => {
    return res.send('Hello Mahir Kumar This is hecker ')
    
})

app.listen(PORT, () => {
    console.log('Server is running on PORT: ', PORT);
    
})
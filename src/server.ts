import express from 'express';

const app = express();

app.get("/test", (req,resp) => {
    return resp.send('Hello World Get')
})

app.post("/test-post",(req,resp) => {
    return resp.send("Hello World Post")
})
app.listen(3000, () => console.log('Server is running NLW'))

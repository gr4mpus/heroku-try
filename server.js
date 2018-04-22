const app = require('express')();
let port= process.env.port || 5565;

app.get('/',(r,s)=>{
    console.log("get request");
    s.send("HELLO HEROKU")
});
app.listen(port, ()=>console.log('Server Started'));

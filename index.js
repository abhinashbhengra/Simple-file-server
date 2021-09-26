const http = require('http'); //import http module
const port = 8080; //created port variable to store port number
const fs = require('fs');

//created function to handle request
const requestHandle = (req,res) =>{ //this function takes two argument req and res.
    fs.readFile('index.html', (err,data)=>{  //readFile function is used from fs module.
        if(err){                             //this function two parameter first is err and second is data
            console.log(err);            //if error occurs it will throw a error message.
            return res.end('<h1>Error !<h1>');
        }
        return res.end(data);           //else data will be served.
    })
}


const server = http.createServer(requestHandle); //created Server

server.listen(port, (err)=>{
    if(err){
        console.log(err);     //if error occurs it will show error on console.
        return;
    };
});// listening to port
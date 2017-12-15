const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json()); // for parsing application/json
const HTTP_PORT = 8099;
const mockups = require('./mockups.js');

app.post( '/api/alwaysok', ( req, res ) => {
    res.json( {message: 'everything is all right'}
  )
} )
app.get( '/api/alwaysok', ( req, res ) => {

    res.json( {message: 'everything is all right'}
  )
} )
app.get( '/api/alwayswrong', ( req, res ) => {

    res.status(500).json({ error: 'message' });
} )
app.post( '/api/alwayswrong', ( req, res ) => {

    res.status(500).json({ error: 'message' });
} )

app.get( '/api/sometimeswrong', ( req, res ) => {
    let val=Math.random()*100;
    if(val>75){
    res.status(500).json({ error: 'message' });
    }else{
        res.status(200).json({ info: 'message' });
    }
} )
app.post( '/api/sometimeswrong', ( req, res ) => {
    let val=Math.random()*100;
    if(val>75){
    res.status(500).json({ error: 'message' });
    }else{
        res.status(200).json({ info: 'message' });
    }
} )
app.get( '/api/wysiwyg', ( req, res ) => {
    console.log(req);
  res.json(req.body);
} )
app.post( '/api/wysiwyg', ( req, res ) => {
    console.log(req.body);
  res.json(req.body);
} )


//Mockups
app.post( '/api/mockups/:mock', ( req, res ) => {
    console.log(mockups)
    if(mockups&&req.params.mock&&(typeof mockups[req.params.mock]!='undefined')){
        res.json(mockups[req.params.mock])
    }else{
        res.status(404).json({ info: 'no such mockup availlable' });
    }
} )
app.get( '/api/mockups/:mock', ( req, res ) => {
    console.log(mockups)
    if(mockups&&req.params.mock&&(typeof mockups[req.params.mock]!='undefined')){
        res.json(mockups[req.params.mock])
    }else{
        res.status(404).json({ info: 'no such mockup availlable' });
    }
} )

app.post( '/api/choosestatus/:status', ( req, res ) => {

    res.status(req.params.status).json({ info: 'message' });
} )
app.get( '/api/choosestatus/:status', ( req, res ) => {

    res.status(req.params.status).json({ info: 'message' });
} )

app.post( '/api/slow/:time*?', ( req, res ) => {
    req.params.time ? temp = req.params.time : temp = 10;
    setTimeout(function(){
        res.json( {message: 'everything is all right'}
            )

    },temp*1000)
    
} )
app.get( '/api/slow/:time*?', ( req, res ) => {
    req.params.time ? temp = req.params.time : temp = 10;
    setTimeout(function(){
        res.json( {message: 'everything is all right'}
            )

    },temp*1000)
    
} )


app.listen(HTTP_PORT, () => {
    console.log( `Server listening on port ${  HTTP_PORT }` )
    console.log('availlable methods in readme')
} )
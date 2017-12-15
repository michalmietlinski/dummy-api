const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json()); // for parsing application/json
const HTTP_PORT = 8099

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


app.post( '/api/choosestatus/:status', ( req, res ) => {

    res.status(req.params.status).json({ info: 'message' });
} )
app.get( '/api/choosestatus/:status', ( req, res ) => {

    res.status(req.params.status).json({ info: 'message' });
} )



app.listen(HTTP_PORT, () => {
    console.log( `Server listening on port ${  HTTP_PORT }` )
    console.log('availlable methods in readme')
} )
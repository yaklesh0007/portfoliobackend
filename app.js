const express=require('express')
const port=3000
const app=express()


app.listen(function(){
    console.log(`app is listening at: ${port} port`)
})
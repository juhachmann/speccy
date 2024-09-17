import express from "express"
import { roms } from "./roms.js"

const app = express()

app.use(express.static('public'))

app.set('view engine', 'ejs')


app.get("/bruxolico/pt/01", function(request,response){
    response.render('speccy', roms.bruxolico.portuguese)
})

app.get("/bruxolico/en/01", function(request,response){
    response.render('speccy', roms.bruxolico.english)
})

app.listen(3000, function () {
    console.log("Started application on port %d", 3000)
});


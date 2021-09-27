let express = require('express'); //requiriendo el modulo express
let path = require('path') //requiriendo mudulo path
let app = express(); 

const PORT = 3033;

app.listen(PORT, () => console.log( 
    `Servidor levantado en el puerto${PORT}
     http://localhost:${PORT}`)) //levantando servidor con express 

let enviarHTML = (url, archivo) => { //creando funcion para ahorrar codigo 
    app.get(url, (req, res) => { 
        res.sendFile(path.join(__dirname, `./views/${archivo}`))   
    })
}

//llamando a las funciones
enviarHTML('/','index.html')
enviarHTML('/babbage','babbage.html')
enviarHTML('/berners-lee','berners-lee.html')
enviarHTML('/clarke','clarke.html')
enviarHTML('/hamilton','hamilton.html')
enviarHTML('/hopper','hopper.html')
enviarHTML('/lovelace','lovelace.html')
enviarHTML('/turing','turing.html')

app.use(express.static('public'));



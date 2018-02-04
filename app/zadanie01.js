//Twój kod
const express = require('express');
	



const app = express();

// const express = require('express');
// const app = express();

// app.use(express.static('./public/przykladStatyczne/'));

// app.listen(3000, () => {
//     console.log('Serwer uruchomiony na porcie 3000');
// });

// app.get('/', (req, res) => {
//     res.send("hello word");
// });
// app.get('/contact', (req, res) => {
//     res.send("zapraszam do kontaktu: maleszewski.geo@gmail.com");
// });
// app.get('/hello/:myname', (req, res) => { //np. localhost:3000/hello/Programist(k)o
//     const name = req.params.myname;
//     res.send('Witaj, ' + name);
// });

// app.listen(3000, () => {
//     console.log('Serwer uruchomiony na porcie 3000');
// });


app.get('/', (req, res) => {
    res.send("hello word");
});
app.get('/contact', (req, res) => {
    res.send("zapraszam do kontaktu: maleszewski.geo@gmail.com");
});
app.get('/hello/:myname', (req, res) => { //np. localhost:3000/hello/Programist(k)o
    const name = req.params.myname;
    res.send('Witaj, ' + name);
});
app.get('/num/:num1/:num2', (req, res) => { //np. localhost:3000/hello/Programist(k)o
    const num1 = parseInt(req.params.num1),
    	num2 = parseInt(req.params.num2),
    	sum = num1+num2;

    res.send(`Suma liczby ${num1} i liczby ${num2} wynosi ${sum}`);
});


app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
//Twój kod
//
const express = require('express');
const app = express();

let vYes = 0;
let vNo = 0;

app.use(express.static('./public/zadanieDnia/'));

app.get('/vote/yes', (req, res) => {
	vYes+1;
    res.send("Dziekujemy za głos");
});
app.get('/vote/no', (req, res) => {
	vNo+=1;
    res.send("Dziekujemy za głos");
});

app.get('/votes/check', (req, res) => {
	vYes+=1;
    res.send(`
	<h1>wyniki ankiety</h1>
	    <table>
        <caption>wyniki glosowania</caption>
        <thead>
            <tr>
                <th>glosow na tak</th>
                <th>glosow na nie</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${vYes}</td>
                <td>${vNo}</td>
            </tr>
        </tbody>
    </table>
    `);
    // res.sendFile(__dirname + '/public/zadanieDnia/' + 'check.html');
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});





// app.get('/', (req, res) => {
//     res.send("hello word");
// });
// app.get('/vote/yes', (req, res) => {
//     res.send("zapraszam do kontaktu: maleszewski.geo@gmail.com");
// });
// app.get('/hello/:myname', (req, res) => { //np. localhost:3000/hello/Programist(k)o
//     // const name = req.params.myname;
//     // res.send('Witaj, ' + name);
// });

// app.listen(4000, () => {
//     console.log('Serwer uruchomiony na porcie 3000');
// });
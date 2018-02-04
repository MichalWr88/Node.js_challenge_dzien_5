//Twój kod
const express = require('express');
	

const app = express();
	let imie = "";

app.get('/', (req, res) => {
    res.send("hello word");
});

app.get('/set/:imie', (req, res) => { 
	imie = req.params.imie;
});
app.get('/name/show', (req, res) => { 
    res.send(`podane imie to ${imie}`);
});
app.get('/name/check', (req, res) => { 
	if(imie.length > 0){
    res.send(`podano imie`);
		return
	}
	    res.send(`NIE podano imienia`);

});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
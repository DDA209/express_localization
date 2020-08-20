const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();

const port = 3000;

// const url = './translation.json'

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

// fetch(url)
// .then( resp => resp.json() )
// .then( json => {
//     console.log("fetch json", json);
// })

app.get('/', (req, res) => {
    res.render('home');
    // , {
    //     pageTitle: 'Titre de la page',
    //     title: 'titre'
    // }
    // );
});

/*
app.get('/:lang?', (req, res) => {
    res.render('home', {
        pageTitle: 'Titre de la page',
        title: 'titre'
    });
})
*/
app.listen( port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
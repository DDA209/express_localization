const express = require('express');
const exphbs  = require('express-handlebars');
const translate = require('./translations.json');

const app = express();

const port = 3005;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// const url = './translations.json'
// fetch(url)
// .then( resp => resp.json() )
// .then( json => {
//     console.log("fetch json", json);
// })

app.get('/', (req, res) => {
    console.log('GET /');
    console.log('GET / req.params', req.params);


    res.render('home'
    , {
        pageTitle: translate.fr.pageTitle,
        title: translate.fr.title,
        image: "fr"
    }
    );
});


app.get('/:lang?', (req, res) => {
    // console.log('GET /:lang/', lang);
    console.log('GET /:lang/ req.params', req.params);

    const language = req.params.lang
    const pageTitle = translate[language].pageTitle;
    const title = translate[language].title;
    const image = `img/${language}.png`;

    console.log('GET /:lang/ translate[language]', translate[language]);
    console.log('GET /:lang/ language', language);
    // console.log('GET /:lang/ pageTitle', pageTitle);
    // console.log('GET /:lang/ title', title);

    res.render('home'
    , {
        pageTitle,
        title,
        image
    }
    );
})


// app.get('*', (req, res) => {
//     console.log('GET *');
//     console.log('GET * req.params', req.params);

// });


app.listen( port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
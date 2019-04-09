const express = require('express');

const app = express();

app.get('/products', (req,res) => {
    res.json([
        {
            name: 'tomate',
            seller: 'la grande tomate',
            quantity: '5',
            metric: 'kg',
            picture: 'https://www.lesfruitsetlegumesfrais.com/_upload/cache/ressources/produits/tomate/tomate_-_copie_346_346_filled.jpg',   
        },
        {
            name: 'tomate',
            seller: 'la grande tomate',
            quantity: '5',
            metric: 'kg',
            picture: 'https://www.lesfruitsetlegumesfrais.com/_upload/cache/ressources/produits/tomate/tomate_-_copie_346_346_filled.jpg',   
        },
        {
            name: 'tomate',
            seller: 'la grande tomate',
            quantity: '5',
            metric: 'kg',
            picture: 'https://www.lesfruitsetlegumesfrais.com/_upload/cache/ressources/produits/tomate/tomate_-_copie_346_346_filled.jpg',   
        },
        {
            name: 'tomate',
            seller: 'la grande tomate',
            quantity: '5',
            metric: 'kg',
            picture: 'https://www.lesfruitsetlegumesfrais.com/_upload/cache/ressources/produits/tomate/tomate_-_copie_346_346_filled.jpg',   
        },
        {
            name: 'tomate',
            seller: 'la grande tomate',
            quantity: '5',
            metric: 'kg',
            picture: 'https://www.lesfruitsetlegumesfrais.com/_upload/cache/ressources/produits/tomate/tomate_-_copie_346_346_filled.jpg',   
        },
        {
            name: 'tomate',
            seller: 'la grande tomate',
            quantity: '5',
            metric: 'kg',
            picture: 'https://www.lesfruitsetlegumesfrais.com/_upload/cache/ressources/produits/tomate/tomate_-_copie_346_346_filled.jpg',   
        },
        {
            name: 'tomate',
            seller: 'la grande tomate',
            quantity: '5',
            metric: 'kg',
            picture: 'https://www.lesfruitsetlegumesfrais.com/_upload/cache/ressources/produits/tomate/tomate_-_copie_346_346_filled.jpg',   
        },
        {
            name: 'tomate',
            seller: 'la grande tomate',
            quantity: '5',
            metric: 'kg',
            picture: 'https://www.lesfruitsetlegumesfrais.com/_upload/cache/ressources/produits/tomate/tomate_-_copie_346_346_filled.jpg',   
        },
        {
            name: 'tomate',
            seller: 'la grande tomate',
            quantity: '5',
            metric: 'kg',
            picture: 'https://www.lesfruitsetlegumesfrais.com/_upload/cache/ressources/produits/tomate/tomate_-_copie_346_346_filled.jpg',   
        },
        {
            name: 'tomate',
            seller: 'la grande tomate',
            quantity: '5',
            metric: 'kg',
            picture: 'https://www.lesfruitsetlegumesfrais.com/_upload/cache/ressources/produits/tomate/tomate_-_copie_346_346_filled.jpg',   
        },
        {
            name: 'tomate',
            seller: 'la grande tomate',
            quantity: '5',
            metric: 'kg',
            picture: 'https://www.lesfruitsetlegumesfrais.com/_upload/cache/ressources/produits/tomate/tomate_-_copie_346_346_filled.jpg',   
        },
        {
            name: 'tomate',
            seller: 'la grande tomate',
            quantity: '5',
            metric: 'kg',
            picture: 'https://www.lesfruitsetlegumesfrais.com/_upload/cache/ressources/produits/tomate/tomate_-_copie_346_346_filled.jpg',   
        },
    ])
})

app.listen(8080)
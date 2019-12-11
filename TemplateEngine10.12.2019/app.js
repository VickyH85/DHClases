const express = require('express');
const app = express();
app.listen(3000, () => console.log('el servidor está andando'));

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index', {
        docente: 'Lando',
        trajoFacturas: true,
        estudiantes: ['Anita', 'Kevin', 'Patricio'],
    });
});

app.get('/products', (req, res) => {
    let products = [
        {
            id: 1,
            name: 'zapatillas',
            precio: 123,
            inSale: true,
        },
        {
            id: 2,
            name: 'remera',
            precio: 432,
            inSale: false,
        }
    ]
    res.render('products', { products });
});

app.get('/products/:id', (req, res) =>{
    let products = [
        {
            id: 1,
            name: 'zapatillas',
            precio: 123,
            inSale: true,
        },
        {
            id: 2,
            name: 'remera',
            precio: 432,
            inSale: false,
        }
    ]
    let productId = req.params.id;
    let theProduct = products.filter(function(oneProduct) {
        return oneProduct.id == productId;
    })
    res.render('detail', {
        productId: productId,
        theProduct: theProduct,
    });
})

const { prisma } = require('../providers/generated/prisma-client');

function ingredientFixture() {
    prisma.createIngredient({
        price: 3,
        quantity: 300,
        name: 'viande haché'
    })
        .then(() => console.log('added'))
        .catch((err) => console.log(err.message))
    
    prisma.createIngredient({
        price: 2,
        quantity: 100,
        name: 'thon'
    })

        .then(() => console.log('added'))
        .catch((err) => console.log(err.message))
}

ingredientFixture();
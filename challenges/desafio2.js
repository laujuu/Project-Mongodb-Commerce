db.produtos.find(
    {},
    {
        _id: false,
        nome: 1,
        vendidos: 1,
    },
).sort({ vendidos: 1 });
db.produtos.find(
    { ingredientes: { $elemMatch: { $all: ["picles"] } } },
    {
        _id: false,
        nome: true,
        ingredientes: true,
        valoresNutricionais: { $slice: 3 },
    },
);
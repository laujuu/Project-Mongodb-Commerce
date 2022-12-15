db.produtos.updateMany(
  { nome: { $eq: "Big Mac" } },
  { $set: { ultimaModificacao: new Date() } },
);
db.produtos.find(
  { ultimaModificacao: { $exists: true } },
  {
    _id: false,
    nome: true,
  },
);

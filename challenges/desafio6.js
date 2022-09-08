db.produtos.find(
  { curtidas: { $gte: 10, $lte: 100 } },
  { _id: 0, nome: 1, curtidas: 1 },
).sort({ curtidas: 1 });
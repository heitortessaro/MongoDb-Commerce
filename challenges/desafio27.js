db.produtos.countDocuments(
  { nome: { $in: [/mc+/i] } },
);
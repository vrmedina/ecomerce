export default {
  users: [
    { username: "regular", accessLevel: 1, password: "password" },
    { username: "admin", accessLevel: 0, password: "password" }
  ],
  initProducts: [
    {
      name: "Cuchillo",
      stock: 10,
      price: 20900,
      shortDesc: "Arma cortopunzante.",
      description:
        "El cuchillo es un instrumento que se emplea para cortar; consta de una fina hoja metálica con uno o dos bordes afilados y de un mango por el cual se sostiene."
    },
    {
      name: "Machete",
      stock: 10,
      price: 45200,
      shortDesc: "Arma blanca pesada.",
      description:
        "Arma blanca , más corta que la espada , ancha , pesada y de un solo filo . 2. m. Cuchillo grande que sirve para desmontar, cortar la caña de azúcar y otros usos."
    },
    {
      name: "bags",
      stock: 20,
      price: 299.99,
      shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
      description:
        "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam."
    }
  ]
};

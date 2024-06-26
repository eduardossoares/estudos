type Info = {
    id: (string | number);
    name: string;
    description?: string;
}

type Category = {
    slug: string;
    quantity: number;
}

type productInfo = Info & Category;

const newProduct: productInfo = {
    id: 1,
    name: "Banana",
    slug: "Comida",
    quantity: 18
}

console.log(newProduct);


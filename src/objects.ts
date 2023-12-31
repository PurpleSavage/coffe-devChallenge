import { cardCoffeObject } from "./types"
export const listCards:cardCoffeObject[] =[
    {
      url:'./src/img/cappuccino.jpg',
      name:"Capuccino",
      votos:65,
      stars:4.7,
      star:true,
      id:crypto.randomUUID(),
      soldOut:true,
      price:5.20
    },
    {
      url:'./src/img/house-coffe.jpg',
      name:"House Coffe",
      votos:14,
      stars:4.85,
      star:true,
      id:crypto.randomUUID(),
      soldOut:true,
      price:3.50
    },
    {
      url:'./src/img/espresso.png',
      name:"Espresso",
      votos:55,
      stars:4.9,
      star:true,
      id:crypto.randomUUID(),
      soldOut:true,
      price:2.50
    },
    {
      url:'./src/img/latte.jpg',
      name:"Coffe Latte",
      votos:23,
      stars:5.0,
      star:true,
      id:crypto.randomUUID(),
      soldOut:true,
      price:4.50
    },
    {
      url:'./src/img/coffe-chocolate.jpg',
      name:"Chocolate Coffe",
      votos:122,
      stars:4.65,
      star:true,
      id:crypto.randomUUID(),
      soldOut:true,
      price:4.00
    },
    {
      url:'./src/img/valentine-coffe.jpg',
      name:"Valentine Special",
      
      star:false,
      id:crypto.randomUUID(),
      soldOut:false,
      price:5.50
    }
  ]
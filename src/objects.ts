import { cardCoffeObject } from "./types"
export const listCards:cardCoffeObject[] =[
    {
      url:'https://firebasestorage.googleapis.com/v0/b/coffe-devchallenge.appspot.com/o/cappuccino.jpg?alt=media&token=af93de62-97e0-4288-9ccd-25cd781c3aed',
      name:"Capuccino",
      votos:65,
      stars:4.7,
      star:true,
      id:crypto.randomUUID(),
      soldOut:true,
      price:5.20
    },
    {
      url:'https://firebasestorage.googleapis.com/v0/b/coffe-devchallenge.appspot.com/o/house-coffe.jpg?alt=media&token=21fa3030-5a63-4a77-8027-2330b737592e',
      name:"House Coffe",
      votos:14,
      stars:4.85,
      star:true,
      id:crypto.randomUUID(),
      soldOut:true,
      price:3.50
    },
    {
      url:'https://firebasestorage.googleapis.com/v0/b/coffe-devchallenge.appspot.com/o/espresso.png?alt=media&token=ba191fbf-29c2-476b-813f-16699953d0d9',
      name:"Espresso",
      votos:55,
      stars:4.9,
      star:true,
      id:crypto.randomUUID(),
      soldOut:true,
      price:2.50
    },
    {
      url:'https://firebasestorage.googleapis.com/v0/b/coffe-devchallenge.appspot.com/o/latte.jpg?alt=media&token=3a893e99-874c-42f6-8fc7-3c9637ee4ae7',
      name:"Coffe Latte",
      votos:23,
      stars:5.0,
      star:true,
      id:crypto.randomUUID(),
      soldOut:true,
      price:4.50
    },
    {
      url:'https://firebasestorage.googleapis.com/v0/b/coffe-devchallenge.appspot.com/o/coffe-chocolate.jpg?alt=media&token=e46b7c0e-afba-4a8f-a1bf-a1c535374ad0',
      name:"Chocolate Coffe",
      votos:122,
      stars:4.65,
      star:true,
      id:crypto.randomUUID(),
      soldOut:true,
      price:4.00
    },
    {
      url:'https://firebasestorage.googleapis.com/v0/b/coffe-devchallenge.appspot.com/o/valentine-coffe.jpg?alt=media&token=c1ad4ae6-579b-41dc-bf36-6d2a5a50b8fe',
      name:"Valentine Special",
      
      star:false,
      id:crypto.randomUUID(),
      soldOut:false,
      price:5.50
    }
  ]
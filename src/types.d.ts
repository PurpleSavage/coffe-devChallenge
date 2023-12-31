
type idCoffe = `${string}-${string}-${string}-${string}-${string}`
export type cardCoffeObject={
    url:string
    name:string
    votos?:number
    stars?:number
    star:boolean
    id:idCoffe,
    soldOut:boolean
    price:number
}
export type Props = {
    children?: React.ReactNode
  };
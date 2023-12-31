import CardCoffe from './components/CardCoffe'
import { useState } from 'react'
import { listCards } from './objects'
import img from './img/bg-cafe.jpg'
import './App.css'
function App() {
  const [list,setList]=useState(listCards)
  const [stateButton,setStateButton]=useState(1)
  function handleClick(id:number){
    if(id===1){
      setList(listCards)
      setStateButton(id)
    }else if(id===2){
      const cardsFilter = listCards.filter(coffe =>coffe.soldOut===true)
      setList(cardsFilter)
      setStateButton(id)
    }
  }
  return (
    <div className='min-h-screen flex flex-col bg-zinc-950'>
      <div className='h-64'>
        <img src={img} className='w-full h-full object-cover' />
      </div>
      <div className='flex-grow  relative flex justify-center '>
        <div 
          className='absolute -top-48 shadow-xl z-50 rounded-lg 
          bg-neutral-900 w-4/5 lg:w-3/4 flex flex-col items-center gap-4 pb-10 max-h-[500px] ' 
        >
          <header className='mt-16'>
            <h1 className='text-center text-2xl font-bold text-white'>Our Collection</h1>
            <p className='text-center text-gray-400 text-sm  mt-2'>
              Introducing our Coffe Collection, a selection of unique coffes<br/>
              from different roast types and origins, expertly roasted in small<br/>
              batches and shipped fresh weekly
            </p>
          </header>
          <section className='flex gap-2 justify-center items-center'>
            <button 
              className={`py-1 px-4 hover:bg-gray-500 
              rounded-md text-sm text-white font-bold ${stateButton===1?"bg-gray-500":""} `}
              onClick={()=>handleClick(1)}
              id='all'
            >All Products</button>
            <button 
              className={`py-1 hover:bg-gray-500 px-4 
              rounded-md text-sm text-white font-bold ${stateButton===2?"bg-gray-500":""}`}
              onClick={()=>handleClick(2)}
              id='available'
            >Available Now</button>
          </section>
          <section className='w-5/6 mt-2 flex gap-14 flex-wrap overflow-y-auto max-h-64 justify-center'>
            {
              list.map((card)=>(
                <CardCoffe
                  key={card.id}
                  datos={card}
                />
              ))
            }
          </section>
        </div>
      </div> 
    </div>
  )
}

export default App

import React, {useContext} from 'react'
import { CardTrending } from '../components/CardTrending/CardTrending'
import { DarkModeContext } from '../context/Context'

export const CardsTrending = () => {
  const { dark } = useContext(DarkModeContext)
  return (
    <div className="p-4 lg:p-8 lg:mt-10">
      <p className={`text-3xl font-semibold text-primary pb-6 ${dark && 'text-white'}`}>
        Trending Stays
      </p>
      <div className='w-full h-full flex flex-col space-y-4 items-center justify-center mt-6"'>


        <CardTrending bg={'bg-chicago'} title='Chicago' desc={'2 rooms, bathroom and kitchen'} />


        <div className=' grid grid-cols-1 place-content-center gap-4 lg:grid-cols-5 lg:grid-rows-2 lg:place-items-center lg:place-content-center lg:w-full lg:h-full '>
          <CardTrending bg={'bg-LA'} title='Los Angeles' desc={'4 rooms, 3 bathrooms, kitchen and private pool'} h='lg:h-full' g={'lg:row-span-2 lg:col-span-2'} />
          <CardTrending bg={'bg-miami'} title='Miami' desc={'3 rooms, 2 bathrooms, kitchen and amazing sea view'} g='lg:row-span-1 lg:col-span-3' />
          <CardTrending bg={'bg-bali'} title='Bali' desc={'2 rooms, 2 bathrooms, kitchen and private pool'} g={'lg:row-span-1 lg:col-span-3'} />
        </div>

      </div>
    </div>


  )
}



import React, {useContext} from 'react'
import { DarkModeContext } from '../../context/Context'


export const Faq = ({ title }) => {
  const { dark } = useContext(DarkModeContext)

  return (
    <div className='flex flex-col gap-3'>
        <h3 className={`text-primary font-bold lg:text-left ${dark && 'text-white'}`}>{title}</h3>
        <p className={`text-sm ${dark && 'text-gray-300'}`}>We accept VISA, MasterCard, American Express, paypal and Binance.</p>
    </div>
  )
}

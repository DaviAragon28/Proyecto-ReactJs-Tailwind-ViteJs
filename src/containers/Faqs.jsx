import React, {useContext} from 'react'
import { Faq } from '../components/Faq/Faq'
import { DarkModeContext } from '../context/Context'

export const Faqs = () => {
    const { dark } = useContext(DarkModeContext)

    return (
        <div className="pt-4 pb-8 px-6  lg:p-24 ">
            <h2 className={`text-3xl font-semibold text-primary pb-6 ${dark && 'text-white'}`}>FAQS</h2>
            <div className='grid grid-cols-1 justify-center gap-4 lg:grid-cols-2 lg:gap-5 lg:place-content-center'>
                <Faq title={'Payment Methods'} />
                <Faq title={'Cancellation Policy'} />
                <Faq title={'Long Stays'} />
                <Faq title={'Cancellation Policy'} />
                <Faq title={'Cancellation Policy'} />
            </div>
        </div>
    )
}

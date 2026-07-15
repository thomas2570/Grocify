import React from 'react'
import Grocery from '../../assets/grocery.png'

const Hero = () => {
    return (
        <section>
            <div className='max-w-[1400px] max-auto px-10'>

           {/* Hero Content */}

           <div>
            <span className='bg-orange-100 text-orange-500'>Export Best Quality....</span>
           </div>

           {/* Hero Image */}

           <div>
            <img src={Grocery} alt="Grocery items" />
           </div>

            </div>
        </section>
    )
}

export default Hero
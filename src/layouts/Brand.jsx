import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Brand1 from '../assets/01.png'
import Brand2 from '../assets/02.png'
import Brand3 from '../assets/03.png'
import Brand4 from '../assets/04.png'
import Brand5 from '../assets/05.png'

const Brand = () => {
    return (
        <>
            <section className='py-8 lg:py-15 px-4 '>
                <Container>
                    <div className="relative w-full overflow-hidden">
                        <div className="flex justify-between animate-marquee-bounce ">
                            <Image src={Brand1} alt="brand" className= "h-[50px] lg:h-16 w-auto" />
                            <Image src={Brand2} alt="brand" className= "h-[50px] lg:h-16 w-auto" />
                            <Image src={Brand3} alt="brand" className= "h-[50px] lg:h-16 w-auto" />
                            <Image src={Brand4} alt="brand" className= "h-[50px] lg:h-16 w-auto" />
                            <Image src={Brand5} alt="brand" className= "h-[50px] lg:h-16 w-auto" />
                        </div>
                    </div>
                </Container>
            </section>

            <style jsx>
                {`
                  @keyframes marquee-bounce {
                    0% {
                      transform: translateX(-50%);
                    }
                    100% {
                      transform: translateX(50%);
                    }
                  }

                  .animate-marquee-bounce {
                    animation: marquee-bounce 10s linear infinite alternate;
                  }
                `}

            </style>

        </>
    )
}

export default Brand
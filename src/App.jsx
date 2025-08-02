import React from 'react'
import Container from './components/Container'
import Flex from './components/Flex'
import Image from './components/Image'

import card from './assets/card.png'

const App = () => {
  return (
    <div >
      <Container>
        <Flex className='justify-between'>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
        </Flex>
        <Image src={card}/>
      </Container>
    </div>
  )
}

export default App
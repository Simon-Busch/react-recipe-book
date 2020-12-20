import React from 'react'
import { ColorContext } from './Color'

const Header = ({ pseudo }) => {
  //format pseudo
  // const formatPseudo = pseudo => /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`
  
  return (
    <ColorContext.Consumer>
      {context => (
        <header style={{backgroundColor: context.state.color}}>
          <h1>{pseudo}'s recipe book</h1>
        </header>
      )}
    </ColorContext.Consumer>
  )
}

export default Header
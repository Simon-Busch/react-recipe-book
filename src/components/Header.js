import React from 'react'

const Header = ({ pseudo }) => {
  //format pseudo
  // const formatPseudo = pseudo => /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`
  
  return (
    <header>
      <h1>{pseudo}'s recipe book</h1>
    </header>
  )
}

export default Header
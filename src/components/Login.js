import React from 'react'

const Login = ({ authenticate }) => {
  return (
    <div className="login">
      <h2>Get started to create your recipes !</h2>
      <button 
        onClick={authenticate}
        className="facebook-button">
          Connect with facebook
      </button>
    </div>
  )
}

export default Login
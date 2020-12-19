import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import withPlaceholder from '../hoc/withPlaceholder'

class Connexion extends Component {
  state = {
    pseudo: '',
    goToApp: false
  }

  // set the state to true for login
  goToApp = event => {
    event.preventDefault()
    this.setState({ goToApp: true })
  }

  handleChange = event => {
    const pseudo = event.target.value
    this.setState({ pseudo })
  }

  render () {
    //if login in
    if (this.state.goToApp) {
      return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
    }

    //else, sign up
    return (
      <div className='connexionBox'>
        <form className='connexion' onSubmit={this.goToApp} >
          <h1>My recipe box</h1>
          <input
            type='text'
            value={this.state.pseudo}
            onChange={this.handleChange}
            placeholder={this.props.placeholder}
            pattern='[A-Za-z-]{1,}'
            required />
          <button type='submit'>Cook me!</button>
          <p>Please don't use special characters</p>
        </form>
      </div>
    )
  }
}

const WrappedComponent = withPlaceholder(Connexion)

export default WrappedComponent

import React from 'react'
import style from './app.module.css'
import { Routes, Route } from 'react-router-dom'
import Header from '../header/header'
import Main from '../../pages/main/main'
import Cart from '../../pages/cart/cart'
import SignIn from '../../pages/sign-in/sign-in'
import Account from '../../pages/account/account'

const App = () => {
  return (
    <>
      <Header />
      <div className={style.container}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </div>
    </>
  )
}

export default App
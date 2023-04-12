import Navbar from '@/components/Navbar'
import React from 'react'

const Container = ({children}) => {
  return (
    <>
        <Navbar/>
        {children}
    </>
  )
}

export default Container
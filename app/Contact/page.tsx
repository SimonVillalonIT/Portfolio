import React from 'react'
import ButtonsContact from '../../components/molecules/ButtonsContact'
import Navbar from '../../components/organisms/Navbar'
import Contact from '../../components/organisms/Contact'
import Footer from '../../components/organisms/Footer'

function page() {
  return (
    <div className="flex flex-col items-center w-screen">
      <Navbar>
        <ButtonsContact />
      </Navbar>
      <Contact />
      <Footer />
    </div>
  )
}

export default page

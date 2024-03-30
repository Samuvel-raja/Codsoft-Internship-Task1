import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../styles/Contact.css'


const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <>
      <h1 className='contact-title' id="contact">Contact me</h1>
      <div className="contact-container" data-aos="fade-down">
        <div className="contact-left-cont">
          <img src="https://ganapatinarayanastro.com/wp-content/uploads/2023/02/843ba4_bd3021bc6649414fa9451b5029146550_mv2.gif" alt="" />
        </div>
        <div className="contact-right-cont">
          <div className="contact-1">
              <form action="" className='contact-form'>
                <label htmlFor="">Name: </label>
                <input type="text" />
                <label htmlFor="">Email </label>
                <input type="text" />
                <label htmlFor="">Contact no: </label>
                <input type="text" />
                <label htmlFor="">Message: </label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Send</button>
              </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
import React, { useEffect } from 'react'
import '../styles/Skills.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <>

      <h1 className='skills-title' id="skills">Skills</h1>
      <div className="skills-container" data-aos="fade-left">

        {/* <div className="skills-card">
          <img src="https://static.vecteezy.com/system/resources/previews/007/909/111/original/woman-and-man-characters-putting-light-bulb-books-and-gear-into-human-head-to-improve-work-skills-concept-of-up-skill-learning-new-skills-to-improve-job-flat-cartoon-illustration-vector.jpg" alt="" />
        </div> */}
        <div className="skills-cont" >
          <div className="skills-img">
            <img src="https://zappysys.com/blog/wp-content/uploads/2018/05/2000px-HTML5_logo_and_wordmark.svg_.png" alt="" />
            <div className="image-cont">
              90-100%
            </div>
          </div>
        </div>
        <div className="skills-cont" >
          <div className="skills-img">
            <img src="https://billing.flourisense.in/wp-content/uploads/2022/11/css3.png" alt="" />
            <div className="image-cont">
              90-100%
            </div>
          </div>
        </div>
        <div className="skills-cont" >
          <div className="skills-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgHWhr0JKx_XdGl6_GybprV8Sk_q1JM5oG5DQD4r5RwImUBaCcXURfurv6hGYU8asVtGU&usqp=CAU" alt="" />
            <div className="image-cont">
              90-95%
            </div>
          </div>
        </div>
        <div className="skills-cont" >
          <div className="skills-img">
            <img src="https://miro.medium.com/v2/resize:fit:800/1*COvz0L3FUapYYbsQHHZ90g.png" alt="" />
            <div className="image-cont">
              85-95%
            </div>
          </div>
        </div>
       <div className="skills-cont" >
          <div className="skills-img">
            <img src="https://miro.medium.com/v2/resize:fit:1200/1*K0a7xINk0RM5gfXGSN68cw.png" alt="" />
            <div className="image-cont">
              85-95%
            </div>
          </div>
        </div>
        <div className="skills-cont" >
          <div className="skills-img">
            <img src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg" alt="" />
            <div className="image-cont">
              85-90%
            </div>
          </div>
        </div>
        <div className="skills-cont" >
          <div className="skills-img">
            <img src="https://www.stickerpress.in/media/products/800x800/df70d11c185d4e81aad3fc5f5b5b2576.jpg" alt="" />
            <div className="image-cont">
              80-90%
            </div>
          </div>
        </div>
        <div className="skills-cont" >
          <div className="skills-img">
            <img src="https://www.freecodecamp.org/news/content/images/2022/07/git-and-github.png" alt="" />
            <div className="image-cont">
              85-95%
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
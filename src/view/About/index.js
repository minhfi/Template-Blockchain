import React from 'react'
import logo from '@/static/svg/logo-icon.svg'
import bgIcon from '@/static/image/software/Group-4.png'
import background from '@/static/image/about/about-bg.png'
import mrTrungLe from '@/static/image/about/mr-trung-le.png'
import mrVietLe from '@/static/image/about/mr-viet-le.png'
import mrQuangLe from '@/static/image/about/mr-quang-le.png'
import mrQuocLe from '@/static/image/about/mr-quoc-le.png'
import mrThaiNguyen from '@/static/image/about/mr-thai-nguyen.png'
import shakeHands from '@/static/image/about/shake-hands.png'
import { Link } from 'react-router-dom'

const index = props => {
  const strengthList = [
    'human',
    'empathy',
    'innovation',
    'practical Technology'
  ]

  const humanList = [
    {
      avatar: mrTrungLe,
      name: 'Trung Le',
      position: 'Founder & Chairman'
    },
    {
      avatar: mrVietLe,
      name: 'Viet Le',
      position: 'CEO'
    },
    {
      avatar: mrQuangLe,
      name: 'Quang Le',
      position: 'CTO'
    },
    {
      avatar: mrThaiNguyen,
      name: 'Thai Nguyen',
      position: 'CSO'
    },
    {
      avatar: mrQuocLe,
      name: 'Quoc Le',
      position: 'Technology Director'
    }
  ]

  const handleScroll = e => {
    props.aboutRef.current = e.target.scrollTop
  }

  return (
    <>
      <div className="about" onScroll={handleScroll}>
        <div className="about-main">
          <div className="about-background">
            <img className="" src={background} alt="background-software"/>
          </div>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo Dinovative"/>
            </Link>
            <h2 className="logo-heading heading-5">Our Core Values & People</h2>
          </div>
          <div className="about-bg-icon icon">
            <img src={bgIcon} alt="background-about"/>
          </div>
          <div className="about-content">
            <div className="full-height">
              <h1 className="heading-2">We define, then develop tech products that make a difference.</h1>
              <p className="description paragraph-3">Our work encompasses the different steps of building technology solutions, often starting with research before defining the business strategy and needs, mapping out the architecture and the roadmap. We then concentrate our minds on powerful ideas for the technology before developing and implementing those ideas into the final product.</p>
              <div className="about-strength-list">
                {strengthList.map(txt => (
                  <h1 key={txt} className="about-strength-item heading-extra">
                    {txt}
                  </h1>))}
              </div>
            </div>
            <div className="about-human">
              {humanList.map(({ avatar, name, position }) => (
                <div key={name} className="about-human-card">
                  <div className="human-card-img">
                    <img src={avatar} alt={`${name} - ${position}`} />
                  </div>
                  <div className="human-card-info">
                    <h4 className="human-card-name heading-4">
                      {name}
                    </h4>
                    <span className="human-card-position paragraph-3">
                      {position}
                    </span>
                  </div>
                </div>))}
            </div>
            <div className="about-contact">
              <div className="about-contact-img">
                <img src={shakeHands} alt="shake-hands" />
              </div>
              <h2 className="about-contact-heading heading-2">
                Let’s get in touch
              </h2>
              <p className="about-contact-info display-5">
                <span>A</span>
                8, Street 12, Tan Hung, Distrist 7, Ho Chi Minh City
              </p>
              <p className="about-contact-info display-5">
                <span>E</span>
                <a href="mailto:contact@dinovative.com.vn">
                  contact@dinovative.com.vn
                </a>
              </p>
              <p className="about-contact-info display-5">
                <span>P</span>
                <a href="tel:+84993103203">
                  0993 103 203
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default index

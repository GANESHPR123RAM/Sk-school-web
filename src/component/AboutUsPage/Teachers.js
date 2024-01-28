import React from 'react'
import './Teacher.css'
import Blank from '../Image/OIP.jpeg'
function Teachers() {
  return (
    <div className="aboutBox">
      {AboutData.map((t) => (
        <div class="aboutwrapper pt-20">
          <div class="aboutcard"><img src={t.img} />
            <div class="aboutinfo">
              <h1>{t.name}</h1>
              <h2>{t.Subject}</h2>
              <li>{t.Qualification}</li>
              <li>{t.Experience}</li>
            </div>
          </div>
        </div>))}
    </div>
  )
}

export default Teachers


const AboutData = [
  {
    img: Blank,
    name: 'Bhavanishankar sherawat',
    Subject: "Athletic Development",
    Qualification: "Fitness and Recreation Center",
    Experience: "Leadership Service",
  },
  {
    img: Blank,
    name: 'Bhavanishankar sherawat',
    Subject: "Athletic Development",
    Qualification: "Fitness and Recreation Center",
    Experience: "Leadership Service",
  },
  {
    img: Blank,
    name: 'Bhavanishankar sherawat',
    Subject: "Athletic Development",
    Qualification: "Fitness and Recreation Center",
    Experience: "Leadership Service",
  }
]
import React, { useEffect } from 'react'; // Make sure to import useEffect
import gsap from 'gsap'; // Import the gsap library
import '../HomePage/Homepage.css';
import sports from '../Image/sports.jpeg';
import Homepagebg from '../Image/school-hd-1.jpg';
import otherActivity from '../Image/otherActivity.jpg';
import furniture from '../Image/furniture.jpg';

function HomePage() {
//   useEffect(() => {
//     gsap.from('.homePageContent', {
//         delay:0.4,
//       opacity:0.6,
//       duration: 1,
//       y:-20,
//       scrolling:true
//     });
//   }, []);
    return (
        <>
            <div className="Homepage-Box">
                <img src={Homepagebg} alt='' className=' z-1 w-full h-full absolute' />
                <div className="homePageContent">
                    <p>Education is the most powerful weapon which you can use to change the world.</p>
                    <p><strong className=' text-yellow-300'>Inspiring confidence through Learning</strong></p><br/>
                    <p>WelCome To</p>
                    <p><strong className=' text-lime-600'>Savitri Krishna Senior Secondary School -</strong></p>
                    <p><strong>Nurturing Minds, Inspiring Futures </strong></p>
                </div>


                {/* <div className="w-full h-full pt-20 z-2 absolute  align-middle justify-center">

                    <div className=" w-full h-fit flex justify-center align-middle text-white pt-20 ">
                        "Education is the most powerful weapon which you can use to change the world.”
                        <strong>"Inspiring confidence through Learning"</strong>
                    </div>
                    <div className=" w-full h-fit pt-10 flex align-middle justify-center flex-col">

                        <p className='text-center text-white font-bold  '>WelCome To
                            <br />
                            <strong >Savitri Krishna Senior Secondary School – <br />Nurturing Minds, Inspiring Futures</strong>
                        </p>
                        <p className=' text-center pt-5 text-white'>
                            At Savitri Krishna Senior Secondary School, we believe in providing a holistic education
                            <br /> that empowers students to excel academically, socially, and emotionally.
                            <br />Our dedicated faculty, state-of-the-art facilities,
                            <br /> and a commitment to excellence create an environment where students thrive. Explore our website to discover
                            <br /> the various facets of our educational journey.
                        </p>

                    </div>
                </div> */}
            </div>
            <div className="Homepage2-Box bg-slate-900 p-10 flex flex-col items-center justify-around">
                <h1 className='text-center text-white pt-10'>Facilities</h1>
                <div className=" w-full h-full flex flex-row align-middle justify-evenly mt-10 flex-wrap ">
                    {CardData.map((A) => (
                        <div class="wrapperCardFacility pt-20">
                            <div class="Facilitycard"> <img src={A.img} />
                                <div class="Facilityinfo">
                                    <h1>{A.title}</h1>
                                    <li>{A.line1}</li>
                                    <li>{A.line2}</li>
                                    <li>{A.line3}</li>
                                </div>
                            </div>
                        </div>))}
                </div>
            </div>

        </>
    )
}


export default HomePage

const CardData = [
    {
        img: otherActivity,
        title: 'curriculum activities',
        line1: "Athletic Development",
        line2: "Fitness and Recreation Center",
        line3: "Leadership Service",
    },
    {
        img: sports,
        title: 'sports',
        line1: "Creative Arts Hub",
        line2: "Language and Literature Corner",
        line3: "Outdoor Sporting Spaces",
    },
    {
        img: furniture,
        title: 'Classrooms',
        line1: "modern classrooms",
        line2: "collaborative spaces",
        line3: "ergonomic furniture",
    }
]
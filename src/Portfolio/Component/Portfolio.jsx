import React from 'react'
import '../Style/Portfolio.css'
import { Motion } from '../../Component/Motion'
import coursemangement from "../../assets/course-management.avif"
import blogImage from "../../assets/blog-img.avif"
import RestApi from "../../assets/rest-api.jpg"
import cryptoTracker from "../../assets/crypto-tracker.png"

const Portfolio = () => {
  return (
    <Motion>
    <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">My Working</span>

        <div className="portfolio__container container grid">

            
            <div className="portfolio__content ">
                    <a href='https://github.com/bhupendrasambare/course-management-react-spring-boot' target='_blank' className="portfolio__button">
                <img className="w-100 border-radius-20-top" src={coursemangement}/>
                <div className="card-inner">

                        <div>
                            <h3 className="portfolio__title">Course Management</h3>
                        </div>


                    <div className='portfolio__flex p-3'>
                        <i class='bx bxl-spring-boot portfolio__icon' ></i>
                        <i class='bx bxl-react portfolio__icon'></i>
                        <i class='bx bxs-data portfolio__icon' ></i>
                        <i className="bx bxl-github pl-2"></i>
                    </div>
                </div>
                    </a>
            </div>

            
            <div className="portfolio__content ">
                    <a href='https://github.com/bhupendrasambare/Simple-blogminor-project' target='_blank' className="portfolio__button">
                <img className="w-100 border-radius-20-top" src={blogImage}/>
                <div className="card-inner">

                        <div>
                            <h3 className="portfolio__title">Simple Blog</h3>
                        </div>


                    <div className='portfolio__flex p-3'>
                        <i class='bx bxl-spring-boot portfolio__icon' ></i>
                        <i class='bx bx-data portfolio__icon' ></i>
                    </div>
                </div>
                    </a>
            </div>
            

            <div className="portfolio__content ">
                    <a href='https://bhupendrasambare.github.io/React-Crypto-Tracker/' target='_blank' className="portfolio__button">
                <img className="w-100 border-radius-20-top" src={cryptoTracker}/>
                <div className="card-inner">

                        <div>
                            <h3 className="portfolio__title">Crypto Tracker</h3>
                        </div>


                    <div className='portfolio__flex p-3'>
                        <i class='bx bxl-react portfolio__icon' ></i>
                        <i className="bx bxl-github pl-2"></i>
                    </div>
                </div>
                    </a>
            </div>

            <div className="portfolio__content ">
                    <a href='https://github.com/bhupendrasambare/springboot-CRUD' target='_blank' className="portfolio__button">
                <img className="w-100 border-radius-20-top" src={RestApi}/>
                <div className="card-inner">

                        <div>
                            <h3 className="portfolio__title">Spring Boot REST API</h3>
                        </div>


                    <div className='portfolio__flex p-3'>
                        <i class='bx bxl-spring-boot portfolio__icon' ></i>
                        <i class='bx bxs-data portfolio__icon' ></i>
                        <i className="bx bxl-github pl-2"></i>
                    </div>
                </div>
                    </a>
            </div>                     
            

        </div>

    </section></Motion>
  )
}

export default Portfolio
import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import { Container, Row, Col } from "react-bootstrap";


const frontData = [
    {
        title: "HTML",
        level: "Experienced"
    },
    {
        title: "CSS",
        level: "Experienced"
    },
    {
        title: "Tailwind CSS",
        level: "Experienced"
    },
    {
        title: "JS",
        level: "Experienced"
    },
    {
        title: "React",
        level: "Experienced"
    },
    {
        title: "Angular",
        level: "Experienced"
    }
]

const backData = [
    {
        title: "JAVA",
        level: "Experienced"
    },
    {
        title: "JEE",
        level: "Experienced"
    },
    {
        title: "Spring Boot",
        level: "Experienced"
    },
    {
        title: "MongoDb",
        level: "Experienced"
    },
    {
        title: "MySQL",
        level: "Experienced"
    },
    {
        title: "PostgreSQL",
        level: "Experienced"
    }
]

export const Experiences = () => {
    return (
        <section id="experience" className='experience'>
            <Container>
                <h2>My Experience</h2>
                <Row className="container experience__container">
                    <Col>
                        <div className="experience__frontend">
                            <h3>Frontend Developement</h3>
                            <div className="experience__content">
                                {
                                    frontData.map((item, index) => {
                                        return (
                                            <article className="experience__details" key={index}>
                                                <BsPatchCheckFill className='experience__details-icon' />
                                                <div>
                                                    <h4>{item.title}</h4>
                                                    <small className='text-light'>{item.level}</small>
                                                </div>
                                            </article>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="experience__backend">
                            <h3>Backend Developement</h3>
                            <div className="experience__content">
                                {
                                    backData.map((item, index) => {
                                        return (
                                            <article className="experience__details" key={index}>
                                                <BsPatchCheckFill className='experience__details-icon' />
                                                <div>
                                                    <h4>{item.title}</h4>
                                                    <small className='text-light'>{item.level}</small>
                                                </div>
                                            </article>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
import React from 'react'
import "./AboutPage.scss"

const AboutPage = (props) => {
    return (
        <div className="conntainer">
            <div className="row">
                <div className="col-12 about-img ">
                    <h1 className='text-center'>{props.content}</h1>
                </div>
            </div>
        </div>
    )
}

export default AboutPage

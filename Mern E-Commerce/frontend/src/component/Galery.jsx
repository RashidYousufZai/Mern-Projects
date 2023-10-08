import React from 'react'
import "./Galery.scss"
import { watch1, watch2, watch3 } from '../Assets'

const Galery = () => {
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-6 col-sm-12 col1 img-hover">
                    <img className='img1' src={watch3} alt="" />
                </div>
                <div className="col-md-3 col-sm-6 col1 img-hover">
                    <img className='img2' src={watch1} alt="" />
                </div>
                <div className="col-md-3 col-sm-6 col1 img-hover">
                    <div className="row ">
                        <div className="col-12 col3 col1 img-hover">
                            <img className='img3' src={watch2} alt="" />
                        </div>
                        <div className="col-12 col3 col1 img-hover">
                            <img className='img4' src={watch3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Galery

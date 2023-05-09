import React from 'react'


function Banner() {
    return (
        <>
            <div className="home-slides owl-carousel owl-theme">
                <div className="main-slides-item">
                    <div className="container">
                        <div className="main-slides-content">
                            <h1>We learn to <span>Save</span></h1>
                        </div>
                    </div>
                </div>
                <div className="main-slides-item item-bg2">
                    <div className="container">
                        <div className="main-slides-content">
                            <h1>Be Alert <br /><span>Avert Fire</span></h1>
                        </div>
                    </div>
                </div>
                <div className="main-slides-item item-bg3">
                    <div className="container">
                        <div className="main-slides-content">
                            <h1>Keep Calm and  <span>Fire Safety On</span></h1>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Banner;
import React from 'react'
import SellOne from '../images/sellOne.png'
import SellTwo from '../images/sellTwo.png'
import Footer from '../component/Footer'

const Sell = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="sell-header text-center">
                        <h1>Sell your home with confidence</h1>
                        <p>Zillow makes it simpler to sell your home and move forward</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid partner">
                <div className="row">
                    <div className="col-lg-8 agent-left">
                        <h2 className='mt-4 ms-5'>Sell with a partner agent or get a cash offer</h2>
                        <p className='mt-4 ms-5'>Zillow helps you sell your home, your way. Easily explore your selling options below and get personalized market value estimates — we can even help you choose the best option when you’re ready.</p>
                        <p className='mt-4 ms-5'><i> This experience is currently available in the Atlanta, Austin, Charlotte, Colorado Springs, Columbia, Dallas-Fort Worth, Denver, Greenville, Houston, Killeen, Northern Colorado, Phoenix, Raleigh-Durham, San Antonio and Tucson markets. We'll be expanding to more markets soon.</i></p>
                        <h4 className='mt-4 ms-5'>Compare personalized options, no commitment required</h4>
                        <form action="">
                            <input type="text" placeholder='Enter your address' className='mt-3 ms-5 agent-input' />
                        </form>
                        <div className='d-flex ms-5 mt-4 gap-4'>
                            <div className="partner-left">
                                <h4 className='mt-4'>Sell with a Zillow partner agent</h4>
                                <p className='mt-3'>List your home with a Zillow partner agent to get local expertise and potentially maximize your sales price.</p>
                            </div>
                            <div className="partner-left">
                                <h4 className='mt-4'>Sell directly to Opendoor</h4>
                                <p className='mt-3'>Get an all-cash offer from our trusted partner, Opendoor, to sell your home faster and avoid the hassle of showings.*</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center align-items-center partner-right">
                        <img src={SellOne} alt="sell-one" />
                    </div>
                </div>
            </div>
            <div className="container-fluid fsbo">
                <div className="row">
                    <div className="col-lg-8 fsbo-left">
                        <h2 className='mt-4 ms-5'>Sell your home yourself</h2>
                        <p className='mt-4 ms-5'>Deciding to sell your home yourself is referred to as for-sale-by-owner (FSBO). The FSBO process is similar to traditional selling, but without the help of a real estate agent. In this case, you’re responsible for the home prep, marketing, showings, and negotiations.</p>
                        <button className='btn btn-primary mt-4 ms-5'>Post your home for sale</button>
                        <div className='ms-5 mt-4 gap-4'>
                            <div className="fsb-left">
                                <h4>Why sell FSBO</h4>
                                <ul>
                                    <li>Avoid paying a listing agent commission</li>
                                    <li>Advertise your listing for free on Zillow</li>
                                    <li>Flexibility and control from start to finish</li>
                                </ul>
                            </div>
                            <div className="fsb-right">
                                <h4>How to sell FSBO</h4>
                                <p>When selling yourself, start with home prep, staging, and hiring a professional photographer. Once your marketing materials are ready, research comparable homes to help price your home. Then, list on Zillow. You’ll likely host home showings or open houses. Then select an offer, negotiate, accept and close.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 fsbo-right d-flex justify-content-center align-items-center ">
                        <img src={SellTwo} alt="sell-two" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Sell

import { useEffect, useState } from "react";
import MapImg from "../images/map-image.jpeg"
import Footer from '../component/Footer'
import { Pagination } from 'react-bootstrap';

const Buy = ({ getListing, houses }) => {

    const itemsPerPage = 30; // Number of items to display per page
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Get the properties for the current page
    const currentHouses = houses.slice(startIndex, endIndex);

    // Function to handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        getListing();
    }, []);

    return (
        <>
            <hr />
            <div className='buy-nav-bar ps-3'>
                <ul class="nav nav-pills gap-2">
                    <li class="nav-item">
                        <input type="text" placeholder='City, Neighborhood, ZIP, Address' className='buy-input' />
                    </li>
                    <li class="nav-item dropdown buy-nav-item">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">For Sale</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown buy-nav-item">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Price</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown buy-nav-item">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Home Type</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown buy-nav-item">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">More</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-lg-5 mt-3">
                        <div className="left-buy">
                            <img src={MapImg} alt="left-img" className='left-img' />
                        </div>
                    </div>
                    <div className="col-lg-7 right-buy">
                        <div className="right-buy">
                            <h4 className='mt-3'>Real Estate & Homes For Sale</h4>
                            <p> Showing {houses.length} Results</p>
                            <div className="card-container mt-3 gap-2">
                                {currentHouses.length > 0 && currentHouses.map((house, index) => {
                                    return (
                                        <div className="card side-card" key={index}>
                                            <img src={house.photo} className="card-img-top" alt="img-one" style={{ objectFit: 'cover', width: '100%', height: '200px' }} />
                                            <div className="card-body">
                                                <p><strong className='paragraph'>{house.price}</strong></p>
                                                <p className='paragraph'>{house.sqft}</p>
                                                <p className='paragraph'>{house.sold_date}</p>
                                                <p className='paragraph'>{house.address}</p>
                                                <p className='paragraph'>{house.listing_id}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                                <Pagination className="pagin">
                                    {Array.from({ length: Math.ceil(houses.length / itemsPerPage) }, (_, index) => (
                                        <Pagination.Item
                                            key={index + 1}
                                            active={currentPage === index + 1}
                                            onClick={() => handlePageChange(index + 1)}
                                        >
                                            {index + 1}
                                        </Pagination.Item>
                                    ))}
                                </Pagination>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Buy

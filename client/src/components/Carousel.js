import React from "react";
// import { Link } from "react-router-dom";
import "./Carousel.css";
import img1 from "./images/pups3.jpeg";
import img2 from "./images/pups2.jpg";
import img3 from "./images/cats4.jpeg";
import img4 from "./images/cats6.jpg";
import img5 from "./images/pops1.jpg";
import img6 from "./images/pups4.jpeg";
import img7 from "./images/cats5.jpeg";


function Carousel() {
    return (
        <div className="bd-example">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                {/* <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol> */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img class="carousel-img" src={img1} alt="cute-pic" />

                    </div>
                    <div className="carousel-item">
                        <img class="carousel-img" src={img2} alt="cute-pic" />

                    </div>
                    <div className="carousel-item">
                        <img class="carousel-img" src={img3} alt="cute-pic" />

                    </div>
                    <div className="carousel-item">
                        <img class="carousel-img" src={img4} alt="cute-pic" />

                    </div>
                    <div className="carousel-item">
                        <img class="carousel-img" src={img5} alt="cute-pic" />

                    </div>
                    <div className="carousel-item">
                        <img class="carousel-img" src={img6}  alt="cute-pic" />

                    </div>
                    <div className="carousel-item">
                        <img class="carousel-img" src={img7} alt="cute-pic" />

                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default Carousel;
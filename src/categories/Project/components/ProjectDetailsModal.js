import React, {Component} from "react";
import {Modal} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ProjectDetailsModal extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true
        };
        if (this.props.data && this.props.icons) {
            const technologies = this.props.data.technologies;
            const images = this.props.data.images;
            var title = this.props.data.title;
            var description = this.props.data.description;
            var icons = this.props.icons;

            if (this.props.data.technologies) {
                var tech = technologies.map((icon, i) => {
                    return (
                        <li className="list-inline-item mx-3" key={i}>
                            <span>
                                <a href={icons[icon].url} className="skills-tile-href" target="_blank"
                                   rel="noopener noreferrer">
                                    <div className="text-center skills-tile">
                                       <img src={`./svgIcons/${icons[icon].svg}.svg`} style={{width: 50, height: 50}}></img>
                                       <p className="text-center" style={{fontSize: "1.2rem", marginTop: "4px"}}>{icon}</p>
                                    </div>
                                </a>
                            </span>
                        </li>
                    );
                });
                if (this.props.data.images) {
                    var img = images.map((elem, i) => {
                        return  <div key={i}>
                                    <img src={`./${elem}`} style={{width:"100%",aspectRatio:16/9, borderRadius:"5px"}} />
                                </div>;
                    });
                }
            }
        }
        return (
            <Modal
                {...this.props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modal-inside"
            >
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon" style={{color:"white"}}></i>
        </span>
                <div className="container-fluid p-0" style={{width:"80vw"}}>
                    <div className="row no-gutters" style={{gap:"50px"}}>
                        <div className="col-md-6">
                            <div className="slider-container">
                                {this.props.data.images ? <Slider {...settings}>
                                    {img}
                                </Slider> : ""}
                            </div>
                        </div>
                        <div className="col-md-5 d-flex flex-column justify-content-between">
                            <div className="p-4">
                                <h3 style={{padding: "5px 5px 0 5px", fontSize:"3rem"}}>{title}</h3>
                                <p className="modal-description">{description}</p>
                            </div>
                            <div className="p-4">
                                <div className="col-md-12 text-center">
                                    <ul className="list-inline mx-auto">{tech}</ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default ProjectDetailsModal;

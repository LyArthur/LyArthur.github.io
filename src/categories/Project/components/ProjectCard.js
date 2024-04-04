import React, { Component } from 'react';

class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
        };

        this.togglePopup = this.togglePopup.bind(this);
    }

    togglePopup() {
        this.setState({ showPopup: !this.state.showPopup });
    }

    render() {
        const { title, image, description, link } = this.props;
        return (
            <div className="project-card" onClick={this.togglePopup}>
                <img src={image} alt={title} className="project-image" />
                <h3 className="project-title">{title}</h3>
                {this.state.showPopup && (
                    <div className="popup">
                        <h3 className="popup-title">{title}</h3>
                        <p className="popup-description">{description}</p>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            En savoir plus
                        </a>
                        <button className="popup-close-button" onClick={this.togglePopup}>
                            Fermer
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

export default ProjectCard;

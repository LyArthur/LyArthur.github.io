import React, {Component} from "react";
import {ContactUs} from './components/mailContact';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', mail: '', object: '', message: ''};

    }

    render() {
        if (this.props.resumeContact && this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeBasicInfo.section_name.contact;
            var contact = this.props.resumeContact.icons.map(function (contact, i) {
                return (
                    <li className="list-inline-item mx-3" key={i}>
            <span>
                <a  className="social-tile"
                    href={contact.url}
                    target={"_blank"}
                    rel="noopener noreferrer">
                  <img src={`./svgIcons/${contact.svg}.svg`} style={{width:50,height:50,fill:"#ffffff"}}></img>
                    </a>
            </span>
                    </li>
                );
            });
        }
        return (<section id="contact">
            <div className="col-md-12">
                <div className="col-md-12">
                    <h1 className="section-title">
                        <span className="text-white">{sectionName}</span>
                    </h1>
                </div>
                <div className="col-md-12">
                    <ContactUs/>
                </div>
                <div className="col-md-12">
                    <ul className="list-inline mx-auto skill-icon">{contact}</ul>
                </div>
            </div>
        </section>);
    }
}

export default Contact;
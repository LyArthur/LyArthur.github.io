import React, {Component} from "react";

class Contact extends Component {
    render() {
        if (this.props.resumeContact && this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeBasicInfo.section_name.contact;
            var contact = this.props.resumeContact.icons.map(function (contact, i) {
                return (
                    <li className="list-inline-item mx-3" key={i}>
            <span>
                <a className="social-tile"
                href={contact.url}>
              <div className="text-center contact-tile">
                <i className={contact.class} style={{ fontSize: "300%" }}></i>
              </div>
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
                <div className="col-md-12 text-center">
                    <ul className="list-inline mx-auto skill-icon">{contact}</ul>
                </div>
            </div>
        </section>);
    }
}

export default Contact;
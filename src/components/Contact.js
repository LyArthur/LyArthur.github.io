import React, {Component} from "react";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', mail: '', object: '', message: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        console.log(event.target);
        this.setState({[name]: target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
    }

    render() {
        if (this.props.resumeContact && this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeBasicInfo.section_name.contact;
            var contact = this.props.resumeContact.icons.map(function (contact, i) {
                return (
                    <li className="list-inline-item mx-3" key={i}>
            <span>
                <a className="social-tile"
                   href={contact.url}
                   target={"_blank"}>
              <div className="text-center contact-tile">
                <i className={contact.class} style={{fontSize: "300%"}}></i>
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
                    <form onSubmit={this.handleSubmit}>
                        <label for={"name"}>Name:</label>
                        <input type="text" name={"name"} value={this.state.name} onChange={this.handleChange}/>
                        <label>
                            Name:
                            <input type="text" name={"mail"} value={this.state.mail} onChange={this.handleChange}/>
                        </label>
                        <label>
                            Name:
                            <input type="text" name={"object"} value={this.state.object} onChange={this.handleChange}/>
                        </label>
                        <label>
                            Name:
                            <input type="text" name={"message"} value={this.state.message}
                                   onChange={this.handleChange}/>
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </section>);
    }
}

export default Contact;
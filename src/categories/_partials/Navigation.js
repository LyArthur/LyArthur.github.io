import React, {Component} from "react";
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSection: "home",
        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll() {
        const sections = ["home", "about","portfolio", "skills", "resume"];
        let activeSection = "home";

        sections.forEach((section) => {
            const currentSection = document.getElementById(section);
            if (
                currentSection &&
                currentSection.getBoundingClientRect().top <= 150 &&
                currentSection.getBoundingClientRect().bottom >= 150
            ) {
                activeSection = section;
                console.log(activeSection);
                if (activeSection === "skills"){
                    document.querySelectorAll(".navigation a").forEach((el) => {
                        el.style.color = "white";
                        el.style.borderColor = "white";
                    });
                } else {
                    document.querySelectorAll(".navigation a").forEach((el) => {
                        el.style.color = "black";
                        el.style.borderColor = "black";
                    });
                }
            }
        });

        this.setState({ activeSection });
    }

    render() {
        return (
            <nav className="navigation">
                <ul className="menu">
                    <li><a className={this.state.activeSection === "home" ? "active" : ""} href="#home">Home</a></li>
                    <li><a className={this.state.activeSection === "about" ? "active" : ""} href="#about">About</a></li>
                    <li><a className={this.state.activeSection === "portfolio" ? "active" : ""} href="#portfolio">Project</a></li>
                    <li><a className={this.state.activeSection === "skills" ? "active" : ""} href="#skills">Skills</a></li>
                    <li><a className={this.state.activeSection === "resume" ? "active" : ""} href="#resume">Resume</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;

import React, {Component} from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./categories/_partials/Header";
import Footer from "./categories/_partials/Footer";
import About from "./categories/About/About";
import Experience from "./categories/Experience/Experience";
import Projects from "./categories/Project/Projects";
import Skills from "./categories/Skills/Skills";
import Contact from "./categories/Contact/Contact";

class App extends Component {

    constructor(props) {
        super();
        this.state = {
            foo: "bar",
            resumeData: {},
            sharedData: {},
        };
    }

    applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
        this.swapCurrentlyActiveLanguage(oppositeLangIconId);
        document.documentElement.lang = pickedLanguage;
        var resumePath =
            document.documentElement.lang === window.$primaryLanguage
                ? `res_primaryLanguage.json`
                : `res_secondaryLanguage.json`;
        this.loadResumeFromPath(resumePath);
    }

    swapCurrentlyActiveLanguage(oppositeLangIconId) {
        var pickedLangIconId =
            oppositeLangIconId === window.$primaryLanguageIconId
                ? window.$secondaryLanguageIconId
                : window.$primaryLanguageIconId;
        document
            .getElementById(oppositeLangIconId)
            .removeAttribute("filter", "brightness(40%)");
        document
            .getElementById(pickedLangIconId)
            .setAttribute("filter", "brightness(40%)");
    }

    componentDidMount() {
        this.loadSharedData();
        if (localStorage["language"] === 'fr'){
            this.applyPickedLanguage(
                window.$primaryLanguage,
                window.$primaryLanguageIconId
            );
        } else {
            this.applyPickedLanguage(
                window.$secondaryLanguage,
                window.$secondaryLanguageIconId
            );
        }

    }

    loadResumeFromPath(path) {
        $.ajax({
            url: path,
            dataType: "json",
            cache: false,
            success: function (data) {
                this.setState({resumeData: data});
            }.bind(this),
            error: function (xhr, status, err) {
                alert(err);
            },
        });
    }

    loadSharedData() {
        $.ajax({
            url: `portfolio_shared_data.json`,
            dataType: "json",
            cache: false,
            success: function (data) {
                this.setState({sharedData: data});
                document.title = `${this.state.sharedData.basic_info.name}`;
            }.bind(this),
            error: function (xhr, status, err) {
                alert(err);
            },
        });
    }

    render() {
        return (
            <div>
                <Header sharedData={this.state.sharedData.basic_info}
                        resumeBasicInfo={this.state.resumeData.basic_info}/>
                <div className="col-md-12 mx-auto text-center language">
                    <div
                        onClick={() =>{
                            localStorage["language"] = 'fr';
                            this.applyPickedLanguage(
                                window.$primaryLanguage,
                                window.$primaryLanguageIconId
                            )}
                        }
                        style={{display: "inline"}}
                    >
            <span
                className="iconify language-icon mr-5"
                data-icon="twemoji-flag-for-flag-france"
                data-inline="false"
                id={window.$primaryLanguageIconId}
            ></span>
                    </div>
                    <div
                        onClick={() =>{
                            localStorage["language"] = 'en';
                            this.applyPickedLanguage(
                                window.$secondaryLanguage,
                                window.$secondaryLanguageIconId
                            )}
                        }
                        style={{display: "inline"}}
                    >
            <span
                className="iconify language-icon"
                data-icon="twemoji-flag-for-flag-united-kingdom"
                data-inline="false"
                id={window.$secondaryLanguageIconId}
            ></span>
                    </div>
                </div>
                <About
                    resumeBasicInfo={this.state.resumeData.basic_info}
                    sharedBasicInfo={this.state.resumeData.about}
                />
                <Projects
                    resumeProjects={this.state.resumeData.projects}
                    resumeBasicInfo={this.state.resumeData.basic_info}
                    sharedIcons={this.state.sharedData.icons}
                />
                <Skills
                    sharedIcons={this.state.sharedData.icons}
                    resumeBasicInfo={this.state.resumeData.basic_info}
                />
                <Experience
                    resumeExperience={this.state.resumeData.experience}
                    resumeBasicInfo={this.state.resumeData.basic_info}
                />
                <Contact
                    resumeContact={this.state.sharedData.contact}
                    resumeBasicInfo={this.state.resumeData.basic_info}
                />
                <Footer sharedBasicInfo={this.state.sharedData.basic_info}/>
            </div>
        );
    }
}

export default App;

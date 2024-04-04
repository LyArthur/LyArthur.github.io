import React, {Component} from "react";

class Skills extends Component {
    render() {
        if (this.props.sharedIcons && this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeBasicInfo.section_name.skills;
            var skillsArray = Object.entries(this.props.sharedIcons);
            var skills = skillsArray.map(([name, skill]) => {
                return (<li className="list-inline-item mx-3" key={name}>
            <span>
                <a href={skill.url} className="skills-tile-href" target="_blank" rel="noopener noreferrer">
                <div className="text-center skills-tile">
                        <img src={`./svgIcons/${skill.svg}.svg`} style={{width: 50, height: 50}}></img>
                        <p
                            className="text-center"
                            style={{fontSize: "70%", marginTop: "4px"}}
                        >
                        {name}
                        </p>
                </div>
                </a>
                </span>
            </li>)
                ;
            });
        }

        return (<section id="skills">
            <div className="col-md-12">
                <div className="col-md-12">
                    <h1 className="section-title">
                        <span className="text-white">{sectionName}</span>
                    </h1>
                </div>
                <div className="col-md-12 text-center">
                    <ul className="list-inline mx-auto skill-icon">{skills}</ul>
                </div>
            </div>
        </section>);
    }
}

export default Skills;

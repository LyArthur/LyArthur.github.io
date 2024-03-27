import React, {Component} from "react";
import DnDAbout from "../functions/about/dndAbout";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      /*var profilepic = "images/" + this.props.sharedBasicInfo.image;*/
      var datas = this.props.sharedBasicInfo
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            {/*<div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={angularIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={vueIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>*/}

            <div className="col-md-8 center tab">
              <div className="col-md-10">
                <DnDAbout datas={datas}></DnDAbout>
              </div>
            </div>
            <div className="col-md-10">
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

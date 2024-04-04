import React, { Component } from "react";
import ProjectDetailsModal from "./components/ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo && this.props.sharedIcons) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-3"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div>
                  <img
                      src={projects.image}
                      alt="projectImages"
                      style={{marginBottom: 0, paddingBottom: 0, position: 'relative', aspectRatio: "1/1"}}
                  />
                </div>
                <h1 className="project-title-settings mt-3">
                    {projects.title}
                  </h1>
                <h2 className="project-title-job mt-3">{projects.job}</h2>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
        <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto" >
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
            icons={this.props.sharedIcons}
          />
        </div>
      </section>
    );
  }
}

export default Projects;

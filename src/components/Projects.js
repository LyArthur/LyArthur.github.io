import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

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
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div>
                  <img
                    src={projects.images[0]}
                    alt="projectImages"
                    height="230"
                    style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
                  />
                  <span className="project-date">{projects.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.title}
                  </p>
                </div>
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
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
//templates
/*
{
  "title": "Animal Shelter",
    "startDate": "2020",
    "description": "Najbardziej rozbudowana aplikacja nad którą miałam okazję pracować. Poznałam dużo technologii a mój kod by sprawdzany przez super opiekuna. Aplikacja obsługuje wszystkie procesy adopcji i pozwala na przechowywanie wszelkiej dokumentacji związanej z adopcją zwierząt ze schroniska.",
    "images": [
  "images/portfolio/animal-shelter/p1.jpg",
  "images/portfolio/animal-shelter/p2.jpg"
],
    "url": "",
    "technologies": [
  {
    "class": "devicon-angularjs-plain",
    "name": "Angular"
  },
  {
    "class": "devicon-typescript-plain",
    "name": "TypeScript"
  },
  {
    "class": "devicon-csharp-plain",
    "name": "C#"
  }
]
},
{
  "title": "Photography",
    "startDate": "2018",
    "description": "Osobisty projekt na przedmiot ze studiów. Byłam odpowiedzilna za testowanie aplikacji, która optymalizuje zdjęcia z pomocą popularnych algorytmów używanych przed edytory grafiki takie jak Pixlr czy Adobe Photoshop. Otrzymałam 5-tkę za projekt :)",
    "images": [
  "images/portfolio/photography/p1.jpg",
  "images/portfolio/photography/p2.jpg"
],
    "url": "https://github.com",
    "technologies": [
  {
    "class": "devicon-react-original",
    "name": "React"
  },
  {
    "class": "devicon-javascript-plain",
    "name": "JavaScript"
  }
]
},
{
  "title": "3D Object Viewer",
    "startDate": "2015",
    "description": "Jedna z pierwszych aplikacji nad którymi pracowałam na stażu. Musiałam przygotować front-end dla aplikacji, która pokazuje modele 3D znanych budynków. To był także mój pierwszy projekt w frameworku Angular. Dużo się nauczyłam!",
    "images": [
  "images/portfolio/adventure/p1.jpg",
  "images/portfolio/adventure/p2.jpg"
],
    "url": "https://github.com",
    "technologies": [
  {
    "class": "devicon-angularjs-plain",
    "name": "Angular"
  },
  {
    "class": "devicon-typescript-plain",
    "name": "TypeScript"
  },
  {
    "class": "devicon-csharp-plain",
    "name": "C#"
  }
]
}*/

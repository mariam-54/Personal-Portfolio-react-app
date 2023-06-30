import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.jpg";
import projImg2 from "../assets/img/project2.jpg";
import projImg3 from "../assets/img/project3.jpg";
import projImg4 from "../assets/img/project4.jpg";
import projImg5 from "../assets/img/project5.jpg";
import projImg6 from "../assets/img/project6.JPG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Restaurant",
      description: "HTML & CSS Template",
      imgUrl: projImg1,
      projectUrl:"https://mariam-54.github.io/resturant/",
    },
    {
      title: "Hotel",
      description: "HTML5 & CSS3 Template",
      imgUrl: projImg2,
       projectUrl:"https://mariam-54.github.io/Hotel-website/",
    },
    {
      title: "Car Animation",
      description: "CSS Animation Task",
      imgUrl: projImg3,
       projectUrl:"https://mariam-54.github.io/Car-animation/",
    },
    {
      title: "Medical",
      description: "Bootstrap Template",
      imgUrl: projImg4 ,
       projectUrl:" https://mariam-54.github.io/Responsive_Medical_website/",
    },
    {
      title: "Shopping Cart",
      description: "JavaScript Task",
      imgUrl: projImg5,
       projectUrl:" https://mariam-54.github.io/Simple-JS_Task/",
    },
    {
      title: "Personal Portfolio",
      description: "React.js Website",
      imgUrl: projImg6,
       projectUrl:"",
    },
  ];
  

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I'm a junior front-end web developer(React.js) with Proven experience developing 
                      consumer-focused websites using HTML, CSS, Bootstrap,JavaScript,and React.js. I 
                      have a good knowledge of the best practices for web design, user experience, 
                      and speed, a trainee at SEF FUTURE as a full stack (Node. js) web developer 
                      and I'm looking to gain more technical and soft skills to achieve my goals as 
                      a web developer.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                       <Nav.Item>
                    </Nav.Item>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                /> 
                            )
                            
                          })
                          
                        }
                       
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

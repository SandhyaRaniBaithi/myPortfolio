import React from "react";
import ProjectCard from "./ProjectCard";
// import FB from '../../assets/FB.png'

const Project = () => {
  const projects = [
    {
      title: "Amazon Clone",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7mTGg265m0Co8f7ar-d64xv0VyF0q-8OGNAoG94Pln1_9c58RMdBSAYOL7FYIY0DSuBY&usqp=CAU",
      skills: ["HTML"," ", "CSS"],
      link: "https://sandhyaranibaithi.github.io/Amazon-page/amazom.html#top",
    },
    {
      title: "Facebook Clone",
      image: "https://img.freepik.com/free-vector/facebook-blue-background_23-2147614786.jpg?t=st=1732108252~exp=1732111852~hmac=d428dece5a435fd9f3b46b24b5b9a513101d0373a7a29fb0b338e121c53a053f&w=740",
      skills: ["HTML"," ", "CSS"," ", "JAVASCRIPT"],
      link: "https://sandhyaranibaithi.github.io/Facebook-/Social%20book/index.html",
    },
    {
        title: "Natural Farms",
        image: "https://img.freepik.com/free-vector/world-food-day-event-lettering_52683-44477.jpg?t=st=1732110884~exp=1732114484~hmac=40888211f17078cdb491c4ea90f695b53a0a77864076c30b7296d8ac690cb1c7&w=740",
        skills: ["HTML"," ", "CSS"],
        link: "https://sandhyaranibaithi.github.io/home_page/Day-1/Day-1NF.html",
      },
      {
        title: "Login Page",
        image: "https://img.freepik.com/free-vector/dark-gray-login-template_1017-7461.jpg?t=st=1732109782~exp=1732113382~hmac=e8255ea741952dfa0c91a8b909d28dac4583c2a797b240ebdc0b802ea1a087b9&w=740",
        skills: ["HTML"," ", "CSS"],
        link: "https://sandhyaranibaithi.github.io/login-form-/Login%20form-2/login%20form.html",
      },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          projectTitle={project.title}
          projectImage={project.image}
          projectSkills={project.skills}
          projectLink={project.link}
        />
      ))}
    </div>
  );
};

export default Project;
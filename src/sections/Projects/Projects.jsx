import React from 'react'
import styles from './ProjectsStyles.module.css'
import Twitter_Clone from '../../assets/Twitter_Clone_resized.png'
import PassWord_Manager from '../../assets/PassWord_Manager_resized.png';
import Spotify_Clone from '../../assets/Spotify_Clone_resized.png';
import ToDo_App from '../../assets/ToDo_App_resized.png';
import Realtime_Chat_App from '../../assets/Realtime_Chat_App_resized.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>

      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Realtime_Chat_App}
          link="https://github.com/ayandas1234/Chat-App-Using-React--Tailwind--Zustand--Daisy-UI--Node-js--Express--MongoDB--Socket-io.git"
          h3='Realtime Chat App'
          p='Built using MERN Stack, Tailwind CSS, Socket.io, DaisyUI, Zustand'
        />
        
        <ProjectCard
          src={Twitter_Clone}
          link="https://github.com/ayandas1234/Twitter-Clone-using-Tailwind-CSS.git"
          h3='Twitter Clone'
          p='Built using Tailwind CSS'
        />

        <ProjectCard
          src={PassWord_Manager}
          link="https://github.com/ayandas1234/Password-Manager-using-React-Tailwind-MongoDB-and-Express.git"
          h3="PassWord Manager"
          p="Built with React, Tailwind CSS, MongoDB, and Express"
        />
        <ProjectCard
          src={Spotify_Clone}
          link="https://github.com/ayandas1234/Spotify-Clone-Using-HTML-CSS-JAVASCRIPT.git"
          h3="Spotify Clone"
          p="Built With HTML, CSS, and JavaScript"
        />
        <ProjectCard
          src={ToDo_App}
          link="https://github.com/ayandas1234/TodoList-App-Using-React-and-Tailwind.git"
          h3="ToDo App"
          p="Built Using React and Tailwind"
        />
      </div>
    </section>
  )
}

export default Projects;

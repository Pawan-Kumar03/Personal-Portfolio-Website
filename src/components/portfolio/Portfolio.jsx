import React from "react";
import './portfolio.css'
import IMG01 from '../../portfolio/EmotionDetectionSystem.png'
import IMG02 from '../../portfolio/UI-UX.png'
import IMG03 from '../../portfolio/FYP.png'
import IMG1 from '../../portfolio/Tetris.PNG'
import IMG2 from '../../portfolio/TicTacToe.PNG'
import IMG3 from '../../portfolio/DisneyHotStar.PNG'
import IMG4 from '../../portfolio/DataMining.PNG'
import IMG5 from '../../portfolio/Snake.PNG'
import IMG6 from '../../portfolio/BankManagementSystem.PNG'


const data = [
    {
        id:1,
        image:IMG01,
        title:'Emotion Detection System',
        github:'https://github.com/Pawan-Kumar03/emotion_detection_system',
        demo:'https://www.linkedin.com/posts/pawan-kumar-3b1869246_cnn-vgg16-resnet50-activity-7234091003169619969-EL8b?utm_source=share&utm_medium=member_desktop&rcm=ACoAADz-5PUBzYmyrDVWgHMqlufcyGjcBmjz1yc'
    },
    {
        id:2,
        image:IMG02,
        title:'UI/UX Design Project',
        github:'https://www.linkedin.com/posts/pawan-kumar-3b1869246_userabrprofiles-fillabrmask-visualabrquestioning-activity-7199841098884681729-uAMN?utm_source=share&utm_medium=member_desktop&rcm=ACoAADz-5PUBzYmyrDVWgHMqlufcyGjcBmjz1yc',
        demo:'https://www.linkedin.com/posts/pawan-kumar-3b1869246_userabrprofiles-fillabrmask-visualabrquestioning-activity-7199841098884681729-uAMN?utm_source=share&utm_medium=member_desktop&rcm=ACoAADz-5PUBzYmyrDVWgHMqlufcyGjcBmjz1yc'
    },
    {
        id:3,
        image:IMG03,
        title:'Haaribot – Autonomous Agricultural Robot!',
        github:'https://www.linkedin.com/posts/pawan-kumar-3b1869246_finalyearproject-agriculturetech-ai-activity-7332159597308198912-9f-H?utm_source=share&utm_medium=member_desktop&rcm=ACoAADz-5PUBzYmyrDVWgHMqlufcyGjcBmjz1yc',
        demo:'https://www.linkedin.com/posts/pawan-kumar-3b1869246_finalyearproject-agriculturetech-ai-activity-7332159597308198912-9f-H?utm_source=share&utm_medium=member_desktop&rcm=ACoAADz-5PUBzYmyrDVWgHMqlufcyGjcBmjz1yc'
    },
    {
        id:4,
        image:IMG1,
        title:'Tetris Game',
        github:'https://github.com/Pawan-Kumar03/TetrisGame',
        demo:'https://drive.google.com/file/d/1jUHY9Z7tUfIa5VhGRJy_fudHNIZBkHrX/view?usp=sharing'
    },
    {
        id:5,
        image:IMG2,
        title:'Tic Tac Toe AI GameBot',
        github:'https://github.com/Pawan-Kumar03/Tic-Tac-Toe-game-AI-Bot',
        demo:'https://drive.google.com/file/d/1IiY6oV8RjMLMl8mISq-0eWytPGk67Mra/view?usp=sharing'
    },
    {
        id:6,
        image:IMG3,
        title:'Disney HotStar Clone',
        github:'https://github.com/Pawan-Kumar03/Disney-HotStar-Clone',
        demo:'https://drive.google.com/file/d/1YsnJ3omANahQRWeYa-c0bt__Aadhc0VB/view?usp=sharing'
    },
    {
        id:7,
        image:IMG4,
        title:'Web Scrapping',
        github:'https://github.com/Pawan-Kumar03/webScrapping',
        demo:'https://drive.google.com/file/d/1Zk6tbng_M8O8FMpBsZ4QimCvlJ9ssDTT/view?usp=sharing'
    },
    {
        id:8,
        image:IMG5,
        title:'Snake Game',
        github:'https://github.com/Pawan-Kumar03/Snake-Game',
        demo:'https://drive.google.com/file/d/1sYjoLx5NMSq3D89Se62S8DHKdRWeMd0M/view?usp=sharing'
    },
    {
        id:9,
        image:IMG6,
        title:'Bank Management System',
        github:'https://github.com/Pawan-Kumar03/BankManagementSystem',
        demo:'https://drive.google.com/file/d/1sMfHaLq3F5WoTD9O56B7vpfpgNl8WIjr/view?usp=sharing'
    }
]


const Portfolio = () =>{
    return(
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    data.map(({id,image,title,github,demo})=>{
                        return(<article key={id} className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={image} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <div className="portfolio__item-cta">
                        <a href={github} className="btn" target="_blank">Github</a>
                        <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                        </div>
                    </article>
                    )
                    })
                }
            </div>
        </section>
    )
}
export default Portfolio
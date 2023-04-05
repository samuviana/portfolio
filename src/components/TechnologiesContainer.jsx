import {
DiHtml5,
DiCss3,
DiMysql,
DiReact,
DiBootstrap,
DiJavascript1
}
from 'react-icons/di';

import '../styles/components/technologiesContainer.sass'

const technologies = [
  { id: 'html', name: "HTML5", icon: <DiHtml5 />, text: "HTML foi onde eu tive o meu primeiro contato com a área da tecnologia, através de uma matéria da escola.  Sempre foi uma das matérias que mais gostei, pois eu tinha liberdade para criar sites da forma que eu quisesse." },
  { id: 'css', name: "CSS3", icon: <DiCss3 />, text: "O CSS foi algo que me encantou desde o primeiro contato, sempre gostei de experimentar novas ideias e estilizações diferentes nos sites que eu estava produzindo." },
  { id: 'mysql', name: "MySQL", icon: <DiMysql />, text: "SQL foi minha primeira tecnologia de banco de dados, e me ajudou a entender na prática como funciona um database." },
  { id: 'react', name: "React", icon: <DiReact />, text: "React é um framework que eu sempre quis aprender, então tenho estudado esse assunto por conta propria, inclusive desenvolvi esse portfolio utilizando react + sass, e foi uma ótima experiencia." },
  { id: 'bootstrap', name: "Bootstrap", icon: <DiBootstrap />, text: "Essa tecnologia chamada bootstrap facilita muito a nossa vida, confesso que não utilizei tanto, mas é uma tecnologia que acho bastante interessante." },
  { id: 'javascript', name: "JavaScript", icon: <DiJavascript1/>, text: "JavaScript foi a segunda linguagem de programação que eu tive contato, a primeira foi c#, no entanto eu gostei muito mais de estudar JS, por ser escrita de forma simples e ainda ter uma integração muito boa com front-end." },
];

const TechnologiesContainer = () => {
  return (
     <section className="tech-cont">
    <h2>Tecnologias</h2>
    <div className="grid-tech">
      {technologies.map((tech) =>(
        <div className="technologies-card" id={tech.id} key={tech.id}>
          {tech.icon}
          <div className="tech-info">
            <h3>{tech.name}</h3>
      <p>{tech.text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
)}

export default TechnologiesContainer
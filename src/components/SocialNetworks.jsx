import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import '../styles/components/socialnetworks.sass'

const socialNetworks = [
  {name: "linkedin", icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/samuel-viana-45a047245/' },
  {name: "github", icon: <FaGithub />, link: 'https://github.com/samuviana' },
  {name: "instagram", icon: <FaInstagram />, link: 'https://www.instagram.com/samu_vianag/?next=%2F' },
];

const SocialNetworks = () => {
 return (
 <section id="social-networks">
  {socialNetworks.map((network) => (
    <a target="_blank" href={network.link} className="social-btn" id={network.name} Key={network.name}>
      {network.icon}
    </a>
  ))}
 </section>
 );
};

export default SocialNetworks
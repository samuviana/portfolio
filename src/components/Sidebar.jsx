import avatar from '../img/euft.jpg'
import '../styles/components/sidebar.sass'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'
import curriculo from '../components/CV-samuel.pdf'

const Sidebar = () => {
  return <aside id="sidebar">
    <img src={avatar} alt="Samuel" />
    <p className="tittle">Samuel Viana</p>
    <SocialNetworks />
    <InformationContainer />
    <a href={curriculo} download={curriculo} className="btn"> Download Currículo</a>
  </aside>
}

export default Sidebar
import ContactCard from '../../components/ContactCard/index.js';
import { ToastContainer } from 'react-toastify';
import './style.scss';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact(){
    return(
        <div className='page-contact' >
            <div className='container' >
                <ToastContainer />
                <h1 className='page-title' >Fale comigo!</h1>
                <span className='page-subtitle' >Entre em contato</span>
                <div className='icons-container'>
                    <ContactCard name='Github' link={'https://github.com/Andryel-Blanco'}/>
                    <ContactCard name='Instagram' link={'https://www.instagram.com/andryel_blanco/'}/>
                    <ContactCard name='Mail' link={''}/>
                    <ContactCard name='Linkedin' link={'https://www.linkedin.com/in/andryel-blanco/'}/>
                </div>
            </div>
        </div>
    )
}
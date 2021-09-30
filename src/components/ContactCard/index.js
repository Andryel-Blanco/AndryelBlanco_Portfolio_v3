import { IoLogoGithub, IoLogoInstagram, IoMail, IoLogoLinkedin } from "react-icons/io5";
import { toast } from 'react-toastify';
import './style.scss';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactCard(props){

    const notify = () => toast.success("Email copiado!");
    const link = props.link;

    function handleRedirect(){
        if(props.name === 'Mail'){
            navigator.clipboard.writeText('blabla');
            notify();
        }else{
            window.location.href = link;
        }
    }

    return(
        <div className='card' onClick={()=>{handleRedirect()}} >
            {/* <ToastContainer /> */}
            {props.name === 'Github' ? <IoLogoGithub size={62} color='#FFF'/> : null}
            {props.name === 'Instagram' ? <IoLogoInstagram size={62} color='#FFF'/> : null}
            {props.name === 'Mail' ? <IoMail size={62} color='#FFF' /> : null}
            {props.name === 'Linkedin' ? <IoLogoLinkedin size={62} color='#FFF'/> : null}
        </div>
    )
}
import './style.scss';

import { IoArrowForwardOutline } from "react-icons/io5";

export default function ProjectCard(props){

    const link = props.link;

    return(
        <div className='project-card'>
            <div className='card-image'>
                <img src={props.photo} alt='imagem representando o projeto'/>
            </div>
            <div className='card-text' >
                <h1 id='project-name' >{props.name}</h1>
                <p id='project-description' >{props.description}</p>
            </div>
            <div className='arrow-text'>
                <span>Ver Projeto</span>
                <IoArrowForwardOutline
                    color={'#563DF3'}
                    size={25}
                    onClick={()=>{window.location.href = link;}}
                />
            </div>
        </div>
        
    )
}
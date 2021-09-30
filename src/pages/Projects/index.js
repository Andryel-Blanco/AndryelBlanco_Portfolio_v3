import './style.scss';
import ProjectCard from '../../components/ProjectCard';

import FocusedImg from '../../assets/Prints/Focused.png';
import BiomemorizaImg from '../../assets/Prints/biomemoriza.png';



export default function Projects(){

    return(
        <div className='page-projects' >
            <h1 className='title'>Portfólio</h1>
            <div className='container' >
                <ProjectCard 
                    name={'Focused.io'} description={'Focused.io é um webapp desenvolvido para ajudar as pessoas a se manter focadas por meio do método pomodoro.'} 
                    photo={FocusedImg} 
                    link={'https://focused-io.vercel.app/'}
                />
                <ProjectCard 
                    name={'Bimemoriza'} description={'Jogo com recurso em libras, para auxiliar no ensino da biologia.'} 
                    photo={BiomemorizaImg} 
                    link={'https://http://biomemoriza.com.br/'}
                />
            </div>
        </div>
    )
}
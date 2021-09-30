import { useHistory } from 'react-router';
import './style.scss';

import illustrationOne from '../../assets/images/illustrationOne.png';

export default function Home(){
    const history = useHistory();
    
    function handleChangePage(){
        history.push('/aboutme');
    }

    return(
        <div className='page-home'> 
            <div className='main-content' >
                <div className='text-container'>
                    <span className='top-span'>Olá, eu sou</span>
                    <h1 className='name'>Andryel Blanco</h1>
                    <span className='bottom-span'>Desenvolvedor Front-End</span>
                    <div className='button'>
                        <h1 className='button-text' onClick={()=>{handleChangePage()}}>Ver Mais</h1>
                    </div>
                </div>
                <img src={illustrationOne} alt='Ilustração de um garoto em uma mesa com o braço para cima e fazendo símbolo da paz'/>
            </div>
        </div>
    )
}
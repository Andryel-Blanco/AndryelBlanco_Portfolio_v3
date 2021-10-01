import { useHistory } from 'react-router';
import {motion} from 'framer-motion';


import illustrationOne from '../../assets/images/illustrationOne.png';
import './style.scss';


export default function Home(){
    const history = useHistory();
    
    function handleChangePage(){
        history.push('/aboutme');
    }

    return(
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{ duration: 1 }}>
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
        </motion.div>
    )
}
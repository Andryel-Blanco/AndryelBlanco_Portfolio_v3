import './style.scss';

import Image from '../../assets/images/Image.svg';

export default function AboutMe(){
    return(
        <div className='page-aboutme' >
            <div className='mobile-title'>
                <h1>Sobre mim</h1>
            </div>
            <div className='purple-box'>
                <img src={Image} alt='Foto de corpo de Andryel Blanco'/>
            </div>
            <div className='card-object'>
                <div className='numbers'>
                    <span className='index-numbers'>1</span>
                    <span className='index-numbers'>2</span>
                    <span className='index-numbers'>3</span>
                    <span className='index-numbers'>4</span>
                    <span className='index-numbers'>5</span>
                    <span className='index-numbers'>6</span>
                    <span className='index-numbers'>7</span>
                </div>
                <div className='code'>
                    <p className='first-line'>const <strong>DESENVOLVEDOR</strong> = {'{'}</p>
                    <p className='property-line'>nome: '<strong>Andryel Blanco</strong>',</p>
                    <p className='property-line'>idade: <strong>19</strong>,</p>
                    <p className='property-line'>tipo: '<strong>Front-End</strong>'',</p>
                    <p className='property-line'>framework: '<strong>ReactJS</strong>',</p>
                    <p className='property-line'>jedi: '<strong className='special'>SIM</strong>',</p>
                    <p className='bottom-line'>{'}'}</p>
                </div>
            </div>
        </div>
    )
}
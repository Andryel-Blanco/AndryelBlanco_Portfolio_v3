import { useState, useEffect } from 'react';
import './styles.scss';
import { Link, useLocation, } from "react-router-dom";

export default function TopBar(){

    let location = useLocation();
    const currentPath = location.pathname;

    const [currentPage, setCurrentPage] = useState(currentPath);

    function handleCurrentPage(page){
        setCurrentPage(page);
    }
    
    useEffect(() => {
        setCurrentPage(currentPath); 
      }, [location]);
    
    return(
        <nav>
            <div className='ball-nav'>
                <Link to="/" className='navigation' onClick={()=>handleCurrentPage('/')}>
                    <div className='ball' style={currentPage === '/' ? {backgroundColor: '#563DF3'} : null}></div>
                    Home
                </Link>
            </div>
            <div className='ball-nav'>
                <Link to="/aboutme" className='navigation' onClick={()=>handleCurrentPage('/aboutme')}>
                    <div className='ball' style={currentPage === '/aboutme' ? {backgroundColor: '#563DF3'} : null}></div>
                    Sobre
                </Link>
            </div>
            <div className='ball-nav'>
                <Link to="/projects" className='navigation' onClick={()=>handleCurrentPage('/projects')}>
                    <div className='ball' style={currentPage === '/projects' ? {backgroundColor: '#563DF3'} : null}></div>
                    Projetos
                </Link>
            </div>
            <div className='ball-nav'>
                <Link to="services" className='navigation' onClick={()=>handleCurrentPage('/services')}>
                    <div className='ball' style={currentPage === '/services' ? {backgroundColor: '#563DF3'} : null}></div>
                    Skills
                </Link>
            </div>
            <div className='ball-nav'>
                <Link to="contact" className='navigation' onClick={()=>handleCurrentPage('/contact')}>
                    <div className='ball' style={currentPage === '/contact' ? {backgroundColor: '#563DF3'} : null}></div>
                    Contato
                </Link>
            </div>
      </nav>
    )
}
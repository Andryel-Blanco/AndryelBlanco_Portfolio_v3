
import { IoLogoReact,  IoLogoSass, IoLogoJavascript, IoLogoHtml5, IoLogoFigma, IoLogoGithub} from "react-icons/io5";
import './style.scss';

export default function SkillCard(props){

    const percentage = props.percentage;

    return(
        <div className='skill-card'>
            <div className='skill-icon'>
                {props.name === 'React' ? <IoLogoReact size={90} color={'#563DF3'}/> : null}
                {props.name === 'Sass' ? <IoLogoSass size={90} color={'#563DF3'}/>: null}
                {props.name === 'JavaScript' ? <IoLogoJavascript size={90} color={'#563DF3'}/> : null}
                {props.name === 'Figma' ? <IoLogoFigma size={90} color={'#563DF3'}/> : null}
                {props.name === 'Github' ? <IoLogoGithub size={90} color={'#563DF3'}/> : null}
                {props.name === 'HTML' ? <IoLogoHtml5 size={90} color={'#563DF3'}/> : null}

            </div>
            <div className='progress-bar'>
                <div className="bar" style={{width: percentage}}>
                    <p className="percent">{props.percentage}</p>
                </div>
            </div>

        </div>
    )
}
import faceImage from '../../../images/person.png';
import './Info.css';

export default function Info(){
    return(
        <div className='info-container'>
            <img src={faceImage} alt='profile'></img>
            <div className='info-details'>
                <h3 className='info-name'>Jake Smith</h3>
                <h4 className='info-job-description'>Frontend Developer</h4>
                <div className='info-buttons'>
                <button><i class="fa-solid fa-envelope"></i>Email</button>
                <button><i class="fa-brands fa-github"></i>Github</button>
                </div>
            </div>
        </div>
    )
}
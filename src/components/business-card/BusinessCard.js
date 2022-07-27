//components
import About from './About/About';
import Footer from './Footer/Footer';
import Info from './Info/Info';
import Interests from './Interests/Interests';

//css
import './BusinessCard.css';

export default function BusinessCard(){
    return(
        <div className="businesscard-container">
            <Info/>
            <About/>
            <Interests/>
            <Footer/>
        </div>
    )
}
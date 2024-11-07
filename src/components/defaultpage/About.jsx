import '../css/about.css';
import aboutimg from '../assets/about1.jpg';

export default function About(){
    return(
        <div className='about'>
            <div className='about-left'>
                <img src={aboutimg} alt='about1' className='about-img'/>
            </div>
            <div className='about-right'>
                <h3>About</h3>
                <h2>Reduce Waste, Nourish Communities</h2>
                <p>
                Promotes a culture of sustainability and reduces the environmental footprint associated with food wastage.
                Challenges and Considerations. The goal is to reduce food wastage at the household level and ensure that
                people in need have access to free or affordable food options.A Community-based Sharing Network is a
                platform designed to connect individuals within a local area who have surplus food with those who need it.
                </p>
            </div>
        </div>
    )
}
import '../css/features.css';
import feature1 from '../assets/feature1.jpg';
import feature2 from '../assets/feature2.jpg';
import feature3 from '../assets/feature3.jpg';

export default function About(){
    return(
        <div className='features' id='features'>
            <div className='feature'>
                <img src={feature1} alt='feature1'/>
                <div className='caption'>
                    <p>Easy food donations</p>
                </div>
            </div>
            <div className='feature'>
                <img src={feature2} alt='feature2' />
                <div className='caption'>
                    <p>Always ready for delivery</p>
                </div>
            </div>
            <div className='feature'>
                <img src={feature3} alt='feature3'/>
                <div className='caption'>
                    <p>Zero food waste</p>
                </div>
            </div>
        </div>
    )
}
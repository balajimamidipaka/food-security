import './css/navbar.css'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { Link as Scrolllink} from 'react-scroll';
import {Link}  from 'react-router-dom'
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Navbar({onLoginClick}){
    const authContext=useAuth()
    const navigate=useNavigate()

    function handlelogout(){
        authContext.logout()
        navigate('/')
    }

    return(
        <>
            <nav className={`navbar dark-nav`}>
                <div className="logo"><VolunteerActivismIcon/>LeftOverLove</div>
                {authContext.isAuthenticated?(
                    <>
                        <ul>
                            <li><Link to='/fooditems'>Order</Link></li>
                            <li><Link to='/donateitems'>Donate</Link></li>
                            <li><Link to='/myorders'>My Orders</Link></li>
                            <li><Link to='/mydonations'>My Donations</Link></li>
                        </ul>
                        <button className='login' onClick={handlelogout}>Logout</button>
                    </>
                ):(
                    <>
                        <ul>
                            <li><Scrolllink to='home' smooth={true} offset={0} duration={1000}>Home</Scrolllink></li>
                            <li><Scrolllink to='features' smooth={true} offset={-280} duration={1000}>Features</Scrolllink></li>
                            <li><Scrolllink to='contact' smooth={true} offset={0} duration={1000}>Contact</Scrolllink></li>
                        </ul>
                        <button className='login' onClick={onLoginClick}>Login</button>
                    </>
                )}
               
            </nav>

        </>
    )
}
import About from "./defaultpage/About";
import Contact from "./defaultpage/Contact";
import Features from "./defaultpage/Features";
import Footer from "./defaultpage/Footer";
import Home from "./defaultpage/Home";
import Title from "./defaultpage/Title";
import './css/defaultpage.css'
import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";


export default function Defaultpage({isLoginVisible,closeLogin,showErrormessage,setShowErrormessage}){
    const [isLoginForm, setLoginForm] = useState(true)
    const [username,setUsername]=useState(null)
    const [password,setPassword]=useState(null)
    const authContext=useAuth()
    const navigate=useNavigate()

    function toggleForm(){
        setLoginForm(!isLoginForm)
        setShowErrormessage(false)
    }

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        if(isLoginForm){
            if(authContext.login(username,password)){
                setShowErrormessage(false)
                navigate('/fooditems')
            }
            else{
                setShowErrormessage(true)
            }
        }
    }

    return(
        <>
            <div >
                {isLoginVisible && (
                    <div className="popup-overlay" onClick={closeLogin}>
                        <div className="popup" onClick={(e) => e.stopPropagation()}>
                            <button className="close-button" onClick={closeLogin}>X</button>
                            
                            <h2>{isLoginForm ? 'Login' : 'Register'}</h2>
                            {showErrormessage&& <h3 style={{color:"red"}}>Invalid Credentials</h3>}

                            <form>
                                <div className="field">
                                    <input type="text" placeholder="Username" onChange={handleUsernameChange} required />
                                </div>
                                <div className="field">
                                    <input type="password" placeholder="Password" onChange={handlePasswordChange} required />
                                </div>

                                {/* Show Confirm Password Field for Register Form */}
                                {!isLoginForm && (
                                    <div className="field">
                                        <input type="password" placeholder="Confirm Password" required />
                                    </div>
                                )}

                                <div className="field btn">
                                    <input type="submit" onClick={handleSubmit} value={isLoginForm ? 'Login' : 'Register'} />
                                </div>
                            </form>

                            {/* Toggle Between Login and Register */}
                            <div className="toggle-link">
                                {isLoginForm ? (
                                    <p>Don't have an account? <button onClick={toggleForm}>Register</button></p>
                                ) : (
                                    <p>Already have an account? <button onClick={toggleForm}>Login</button></p>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <Home/>
                <div className="container">
                    <Title subtitle='our features' title='what we offer'/>
                    <Features/>
                    <About/>
                    <Title subtitle='contact us' title='get in touch'/>
                    <Contact/>
                    <Footer/>
                </div>
            </div>
        </>
    )
}
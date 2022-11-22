import "./Footer.css"
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
const Footer = () => {
    return (
        <>
            <div className="footer">
            
            <div className="text">
                <h3>Copyright © BorschUA</h3>
                </div>
                <div className="icons">
                    <a href="#"> <FiFacebook /></a>
                    <a href="#"> <FiInstagram /></a> 
                    <a href="#"> <FiTwitter/> </a>  
                </div>
            </div>
        </>
    )
}

export default Footer
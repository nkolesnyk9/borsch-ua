import './Images.css'
import pic from "../images/donate.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Images = () => {
    return (
        <div className="images-container">
            <div className="idiv-img one" data-aos="flip-left"
            data-aos-duration="1500"></div>
            <div className="idiv-img two">
                <a target="_blank" href='https://visitukraine.today/donation'><img className='link-image' src={pic}></img></a>
            </div>
            <div className="idiv-img three" data-aos="flip-left"
            data-aos-duration="1500"></div>
        </div>
    )
}

export default Images
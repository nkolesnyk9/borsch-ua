import './Subscribe.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Subscribe = () => {
    return (
        <div className="subscribe" data-aos="fade-right" data-aos-easing="linear"
        data-aos-duration="1500" >
            <h2> Want to receive emails about new products?</h2>
            <button>Subscribe</button>
        </div>
    )
}

export default Subscribe
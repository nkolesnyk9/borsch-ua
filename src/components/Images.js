import './Images.css'
import pic from "../images/donate.jpeg"

const Images = () => {
    return (
        <div className="images-container">
            <div className="idiv-img one"></div>
            <div className="idiv-img two">
                <a target="_blank" href='https://visitukraine.today/donation'><img className='link-image' src={pic}></img></a>
            </div>
            <div className="idiv-img three"></div>
        </div>
    )
}

export default Images
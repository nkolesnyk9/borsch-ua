import "./About.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function About() {
  return (
    <div className="about-parent">
      <div className="about-container" data-aos="zoom-in" data-aos-duration="2000">
        <h1>BorschUA</h1>
        <p>
          BorschUA was created to support Ukrainian army and Ukrainian people.
          by gathering all the sellers. Since the war begun our talented people
          all over the wolrd begun to create various products. Some are making
          handmade accessories, some opened up small clothing stores, some
          started to bake etc. Lots of people were forced to leave their
          homeland and escape to different countries. In order to remind the
          world about horrible war happeing in Ukraine we are here making
          hadmade products to show the world that we are still fighting and we
          will fight till the end of war. From each sale of any products we
          donate 20% to Armed Forces of Ukraine. Our army still need help, our
          men in the field need lots of help: warm clothes, medicine. money to
          fix military tech. Each cent counts here.{" "}
        </p>
      </div>
    </div>
  );
}

export default About;

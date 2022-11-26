import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function About() {
  return (
    <div className="about-parent">
      <div
        className="about-container"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <h1>BorschUA</h1>
        <p>
          BorschUA was created to support Ukrainian army and Ukrainian people
          during this terrible time. <br/> Since the beginning of war, lots of people
          have been forced to leave their homes and escape to different cities
          or even countries. Some lost their jobs, some can't really work in
          foreign countries and all of them are trying to survive and support
          their families. Our talented people all over the world started to
          create various products. Some are making handmade accessories, some
          opened up small clothing stores, some are opening up small food
          service businesses etc. These products are created not only to support
          themselves but also to remind the world about the horrible war that is
          still happening in Ukraine. <br/>Here in BorschUA our goal is to gather all
          the Ukrainian vendors in one spot, so it will make it easier for
          shoppers to find Ukrainian products and possibly show support. We are
          making handmade products to show the world that we are still fighting
          and we will fight till the war is over.
          <br/> <span className="bold">🇺🇦From each sale, we donate
          20% to the Armed Forces of Ukraine🇺🇦</span>
        </p>
      </div>
    </div>
  );
}

export default About;

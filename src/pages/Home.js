import './Home.css'
import Subscribe from '../components/Subscribe';
import Images from '../components/Images';
function Home() {
    return (
        <>
        <div className='header'>
        <h1> Welcome to BorschUA </h1>
        </div>
        <Subscribe />
          <Images />
          </>
    )
    
}
export default Home;
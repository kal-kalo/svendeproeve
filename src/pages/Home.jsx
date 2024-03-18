import welcomeImage from '../assets/splash-image.jpg';

import { Link } from "react-router-dom";
import Logo from '../components/Logo';

const Home = () => {
    return (

        <div>

            <img style={{ width: '100vw', height: '100vh', filter: 'brightness(80%)' }} src={welcomeImage} alt="welcome" />
            <Logo />
            <Link className='primary-btn' to='/activities' style={{ position: 'absolute', bottom: '60px', left: '50%', transform: 'translateX(-50%)', }}>
                Kom i gang
            </Link>

        </div>

    )
}
export default Home
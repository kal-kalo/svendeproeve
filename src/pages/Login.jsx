
import welcomeImage from '../assets/splash-image.jpg';
import LoginForm from "../components/LoginForm";
import Shadow from '../components/Shadow';


const Login = () => {


  return (
    <>
      <img src={welcomeImage} alt="welcomeImage" style={{ height: '100vh', width: '100vw', position: 'relative' }} />

      <Shadow />

      <LoginForm />
    </>
  )
}

export default Login
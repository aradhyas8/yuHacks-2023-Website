import { FunctionComponent } from "react";
import HeroAnimation from "../components/HeroAnimation_old.component";
import './Login.css';

interface LoginProps {
  
}
 
const Login: FunctionComponent<LoginProps> = () => {
  return (  
    <div className="LoginContainer">
      <h1>Login</h1>
      <HeroAnimation />
    </div>
  );
}
 
export default Login;
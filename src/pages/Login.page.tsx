import { FunctionComponent } from "react";
import './Login.css';

interface LoginProps {
  
}
 
const Login: FunctionComponent<LoginProps> = () => {
  return (  
    <div className="LoginContainer">
      <h1 style={{color: "#ffffff"}}>Hacker Portal</h1>
      <p>Hacker portal coming soon...</p>
    </div>
  );
}
 
export default Login;
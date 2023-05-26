import { FunctionComponent } from "react";
import './UserSnippet.css';

interface UserSnippetProps {
  
}
 
const UserSnippet: FunctionComponent<UserSnippetProps> = () => {
  return ( 
    <div className="UserSnippetContainer">
      <a className="Username" href="/yuHacks-2023-Website/login">Dashboard</a>
      {/* <a className="Username" onClick={()=>window.alert("Dashboard coming soon")}>LOGIN</a> */}
      <div className="UserProfile">
        {/* TODO - Add user picture */}
      </div>
    </div>
   );
}
 
export default UserSnippet;
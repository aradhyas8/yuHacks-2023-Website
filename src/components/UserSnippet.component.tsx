import { FunctionComponent } from "react";
import './UserSnippet.css';

interface UserSnippetProps {
  
}
 
const UserSnippet: FunctionComponent<UserSnippetProps> = () => {
  return ( 
    <div className="UserSnippetContainer">
      <a className="Username" href="/login">LOGIN</a>
      <div className="UserProfile">
        {/* TODO - Add user picture */}
      </div>
    </div>
   );
}
 
export default UserSnippet;
import logo from "../../assets/images/logo.jpg";
import { NavLink as Link } from 'react-router-dom';
import SignInButton from "../SignInButton/SignInButton";
import SignUpButton from "../SignUpButton/SignUpButton";
const Header = () => {
    return ( <header className="u-clearfix u-custom-color-1 u-header u-header" id="sec-3e39"><div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
    <Link to="/" className="u-file-link u-image u-logo u-image-1" title="Logo" data-image-width="235" data-image-height="112">
      <img src= {logo} className="u-logo-image u-logo-image-1" alt="Logo of Swith"/>
    </Link>
    <SignInButton/>
    <SignUpButton/>
    
    </div></header>  );
}
 
export default Header;

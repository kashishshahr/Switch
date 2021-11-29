import {Link} from 'react-router-dom';
const SignInButton = () => {
        
    return ( 
    <Link to="/signin" className="u-border-2 u-border-custom-color-1 u-btn u-button-style u-custom-color-1 u-btn-2">
        Sign In
    </Link> 
    );
}
 
export default SignInButton;
import { Button } from 'react-bootstrap';
import './CustButton.css'
const CustButton = ({val}) => {
    return ( 
        <Button className="CustButton" variant="success">{val}</Button>
    );
}
 
export default CustButton;
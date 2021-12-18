import { Col } from "react-bootstrap";

const DisplayCard = ({image,title}) => {
    
    return (  
    <Col>
        <img src={image}/>
        <h5>{title}</h5>
    </Col> 
        );
}
 
export default DisplayCard;
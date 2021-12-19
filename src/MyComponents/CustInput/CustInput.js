import { FloatingLabel, Form } from "react-bootstrap";

const CustInput = ({label,typeInput,placeholder}) => {
    return ( <>
        <FloatingLabel
          controlId="floatingInput"
          label={label}
          
        >
          <Form.Control type={typeInput} placeholder={placeholder} />
        </FloatingLabel>
      </> );
}
 
export default CustInput;
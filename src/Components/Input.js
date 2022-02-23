
import {Form,} from "react-bootstrap"
function Input ({ value, onChange }) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Rechercher votre film" value={value} onChange={onChange} />
      </Form.Group>
    </Form>
  );
};
export default Input;

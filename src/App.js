import { Button,Form,Col,Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import './App.css';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Contact</Nav.Link>
    </Nav.Item>
   
  </Nav>

 
  <br />
  <br />

        <Form  >
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group>
    <Form.File id="exampleFormControlFile1" label="input your CV" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>tunis</option>
        <option>soussa</option>
        <option></option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>
  
  <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
      Gender
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Male"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Female"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
       
      </Col>
    </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Agree to terms and conditions" />
  </Form.Group>
  <Button variant="outline-success">Send Information</Button>{' '}
</Form>
        



      </header>
    </div>
  );
}



export default App;

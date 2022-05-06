import React from 'react'
import {FormControl,InputGroup,Button} from 'react-bootstrap'
function MyForm() {
  return (
      <div>
    <h1>Welcome to my site</h1>
    <div className='faza'>
       <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">email</InputGroup.Text>
    <FormControl
      placeholder="email"
      aria-label="email"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
    <FormControl
      placeholder="Password"
      aria-label="Password"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  <Button variant="primary">Sign In</Button>{' '}

    </div>
    </div>
  )
}

export default MyForm
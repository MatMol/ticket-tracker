'use client';
// We use the `use client` for when we need a component or code to be interactive for the user
// this would make this component a client side rendered component
import { Button } from '@mui/material';

const DeleteButton = () => {
  return (
    <Button onClick={() => console.log('pepe')}>D</Button>
  )
}

export default DeleteButton

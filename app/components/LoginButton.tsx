'use client';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const LoginButton = () => {
	const router = useRouter();

  return (
    <Button onClick={() => router.push('/users')}>Login</Button>
  )
}

export default LoginButton

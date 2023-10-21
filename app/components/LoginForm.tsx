import React from 'react'
import { Card, Input } from '@mui/material'
import LoginButton from './LoginButton'

const LoginForm = () => {
  return (
    <Card sx={{ width: 550, padding: 20 }}>
			<Input
					type='email'
					placeholder="Email"
					sx={{
							"--Input-radius": "8px",
							"--Input-gap": "8px",
							"--Input-placeholderOpacity": 0.5
					}}/>
				<Input
        type="password"
        placeholder="Pasword"
      />
			<LoginButton />
    </Card>
  )
}

export default LoginForm

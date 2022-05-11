import reeact from 'react'
import ReactDOM from 'react-dom'
import { ButtonV2 } './Button/Button'
import { Logo } from '../components/logo'

function LoginPage() {
  return (
    <div>
      <Logo width="80" height="80" />
      <h1> </h1>
      <Button>Login</Button>
      <Button>SignUp</Button>
    </div>
  )
}

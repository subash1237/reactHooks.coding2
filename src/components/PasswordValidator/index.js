// Write your code here
import {useState} from 'react'
import PropTypes from 'prop-types'
import {
  PasswordValidatorContainer,
  PasswordInput,
  ErrorMessage,
  Heading,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleChange = e => {
    setPassword(e.target.value)
    setError(false)
  }

  const validatePassword = () => {
    if (password.length < 8) {
      setError(true)
    } else {
      setError(false)
    }
  }

  return (
    <PasswordValidatorContainer>
      <Heading>Password Validator</Heading>
      <p>Check how strong and secure its your password</p>
      <PasswordInput
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handleChange}
        onBlur={validatePassword}
      />
      {error && (
        <ErrorMessage>Your password must be at least 8 characters</ErrorMessage>
      )}
    </PasswordValidatorContainer>
  )
}

PasswordValidator.propTypes = {}

export default PasswordValidator

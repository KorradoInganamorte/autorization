import { useState } from "react"
import { useNavigate } from "react-router-dom"

import axios from "axios"

function Login() {
  const [email, setEmail] = useState<string>("")
  const [emailDirty, setEmailDirty] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<string>(
    "The field 'Email' cannot be empty"
  )

  const [password, setPassword] = useState<string>("")
  const [passwordDirty, setPasswordDirty] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<string>(
    "The field 'Password' cannot be empty"
  )

  function blur(e: React.ChangeEvent<HTMLInputElement>) {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true)
        break
      case "password":
        setPasswordDirty(true)
        break
    }
  }

  function emailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    if (
      e.target.value !== "" &&
      !emailRegex.test(String(e.target.value).toLowerCase())
    ) {
      setEmailError("non-correct value")
    } else {
      setEmailError("")
    }
  }

  function passwordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
    if (e.target.value.length < 8) {
      setPasswordError("the password must be longer than 8 characters")
    } else {
      setPasswordError("")
    }
  }

  const navigate = useNavigate()

  function verification() {
    const validUser = {
      email: email,
      password: password
    }

    if (
      sessionStorage.getItem("email") === validUser.email &&
      sessionStorage.getItem("password") === validUser.password
    ) {
      axios.post("http://localhost:3000/users", validUser)
      navigate("/")
    }
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center px-[3.5rem] pt-[2.5rem] pb-[4rem] bg-white border border-black rounded-[1rem]">
        <h2 className="font-medium text-5xl mb-[3rem]">Log In</h2>
        <div className="grid-input mb-[1.5rem]">
        <div>
            {emailDirty && emailError ? (
              <p className="text-base text-red-500">{emailError}</p>
            ) : null}
            <input
              value={email}
              onChange={emailChange}
              onBlur={(e) => blur(e)}
              className="py-[1.5rem] pl-[1.5rem] w-[38.5rem] bg-white rounded-[5px] border border-black text-lg"
              placeholder="Email..."
              name="email"
            />
          </div>
          <div>
            {passwordDirty && passwordError ? (
              <p className="text-base text-red-500">{passwordError}</p>
            ) : null}
            <input
              value={password}
              onChange={passwordChange}
              onBlur={(e) => blur(e)}
              className="py-[1.5rem] pl-[1.5rem] w-[38.5rem] bg-white rounded-[5px] border border-black text-lg"
              placeholder="Password"
              name="password"
            />
          </div>
        </div>
        <button
          className="py-[1rem] px-[4.5rem] bg-blue-500 text-white text-2xl rounded-[.5rem] border border-black border-opacity-60"
          onClick={verification}>
          Log In
        </button>
      </div>
    </div>
  )
}

export default Login

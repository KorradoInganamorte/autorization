import { useRef } from "react"

import axios from "axios"

import Input from "../components/input"

function Login() {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const inputs = [
    { ref: emailRef, placeholder: "Email...", name: "email" },
    { ref: passwordRef, placeholder: "Password...", name: "Password" }
  ]

  function verification() {
    const validUser = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value
    }

    if (
      sessionStorage.getItem("email") === validUser.email &&
      sessionStorage.getItem("password") === validUser.password
    ) {
      axios.post("http://localhost:3000/users", validUser).then((response) => {
        console.log(response.data)
      })
    }
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center px-[3.5rem] pt-[2.5rem] pb-[4rem] bg-white border border-black rounded-[1rem]">
        <h2 className="font-medium text-5xl mb-[3rem]">Log In</h2>
        <div className="grid-input mb-[1.5rem]">
          {inputs.map((input, index) => (
            <Input
              inputRef={input.ref}
              placeholder={input.placeholder}
              name={input.name}
              key={index}
            />
          ))}
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

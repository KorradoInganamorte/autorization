import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

import Input from "../components/input"

function Signup() {
  const nameRef = useRef<HTMLInputElement>(null)
  const surnameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const countryRef = useRef<HTMLInputElement>(null)
  const cityRef = useRef<HTMLInputElement>(null)

  const [name, setName] = useState()
  const [surname, setSurnmae] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [country, setCountry] = useState()
  const [city, setCity] = useState()

  const inputs = [
    { value: name, ref: nameRef, placeholder: "Name...", name: "name" },
    { value: surname, ref: surnameRef, placeholder: "Surname...", name: "surname" },
    { value: email, ref: emailRef, placeholder: "Email...", name: "email" },
    { value: password, ref: passwordRef, placeholder: "Password...", name: "Password" },
    { value: country, ref: countryRef, placeholder: "Country...(optional)", name: "country" },
    { value: city, ref: cityRef, placeholder: "City...(optional)", name: "city" }
  ]

  const navigate = useNavigate()

  function sendData() {
    const newUser = {
      name: nameRef.current?.value,
      surname: surnameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      country: countryRef.current?.value,
      city: cityRef.current?.value
    }

    sessionStorage.setItem("name", newUser.name!)
    sessionStorage.setItem("surname", newUser.surname!)
    sessionStorage.setItem("email", newUser.email!)
    sessionStorage.setItem("password", newUser.password!)
    sessionStorage.setItem("country", newUser.country!)
    sessionStorage.setItem("city", newUser.city!)

    navigate("/login")
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center px-[3.5rem] pt-[2.5rem] pb-[4rem] bg-white border border-black rounded-[1rem]">
        <h2 className="font-medium text-5xl mb-[3rem]">Sigh Up</h2>
        <div className="grid-input mb-[1.5rem]">
          {inputs.map((input, index) => (
            <Input
              value={input.value}
              
              inputRef={input.ref}
              placeholder={input.placeholder}
              name={input.name}
              key={index}
            />
          ))}
        </div>
        <button
          className="py-[1rem] px-[1rem] bg-blue-500 text-white text-2xl rounded-[.5rem] border border-black border-opacity-60"
          onClick={sendData}>
          Registaration
        </button>
      </div>
    </div>
  )
}

export default Signup

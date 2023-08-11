import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup() {
  const [name, setName] = useState<string>("")
  const [nameDirty, setNameDirty] = useState<boolean>(false)
  const [nameError, setNameError] = useState<string>("The field 'Name' cannot be empty")

  const [surname, setSurname] = useState<string>("")
  const [surnameDirty, setSurnameDirty] = useState<boolean>(false)
  const [surnameError, setSurnameError] = useState<string>("The field 'Surname' cannot be empty")

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

  const [country, setCountry] = useState<string>("")
  const [city, setCity] = useState<string>("")
  const [isValid, setIsValid] = useState<boolean>(false)

  function blur(e: React.ChangeEvent<HTMLInputElement>) {
    switch (e.target.name) {
      case "name":
        setNameDirty(true)
        break
      case "surname":
        setSurnameDirty(true)
        break
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

  function nameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
    if(e.target.value.length <= 1 ) {
        setNameError("The name must be more than 1 character")
    } else {
        setNameError("")
    }
  }

  function surnameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSurname(e.target.value)
    if(e.target.value.length <= 1 ) {
        setSurnameError("The name must be more than 1 character")
    } else {
        setSurnameError("")
    }
  }

  useEffect(() => {
    if(nameError || surnameError || emailError || passwordError){
        setIsValid(false)
    } else {
        setIsValid(true)
    }

  }, [nameError, surnameError, emailError, passwordError])

  const navigate = useNavigate()

  function sendData() {

    const newUser = {
      name: name,
      surname: surname,
      email: email,
      password: password,
      country: country,
      city: city
    }

    sessionStorage.setItem("name", newUser.name)
    sessionStorage.setItem("surname", newUser.surname)
    sessionStorage.setItem("email", newUser.email)
    sessionStorage.setItem("password", newUser.password)
    sessionStorage.setItem("country", newUser.country)
    sessionStorage.setItem("city", newUser.city)

    navigate("/login")
  }

  return (
    <div className="w-screen flex justify-center ">
      <div className="flex flex-col items-center px-[3.5rem] pt-[2.5rem] pb-[4rem] my-[5.5rem] bg-white border border-black rounded-[1rem]">
        <h2 className="font-medium text-5xl mb-[3rem]">Sigh Up</h2>
        <div className="grid-input mb-[1.5rem]">
          <div>
            {nameDirty && nameError ? (
              <p className="text-base text-red-500">{nameError}</p>
            ) : null}
            <input
              value={name}
              onBlur={(e) => blur(e)}
              onChange={nameChange}
              className="py-[1.5rem] pl-[1.5rem] w-[38.5rem] bg-white rounded-[5px] border border-black text-lg"
              placeholder="Name..."
              name="name"
            />
          </div>
          <div>
            {surnameDirty && surnameError ? (
              <p className="text-base text-red-500">{surnameError}</p>
            ) : null}
            <input
              value={surname}
              onBlur={(e) => blur(e)}
              onChange={surnameChange}
              className="py-[1.5rem] pl-[1.5rem] w-[38.5rem] bg-white rounded-[5px] border border-black text-lg"
              placeholder="Surname..."
              name="surname"
            />
          </div>

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
          <input
            value={country}
            onBlur={(e) => blur(e)}
            onChange={(e) => setCountry(e.target.value)}
            className="py-[1.5rem] pl-[1.5rem] w-[38.5rem] bg-white rounded-[5px] border border-black text-lg"
            placeholder="Country...(optional)"
            name="country"
          />
          <input
            value={city}
            onBlur={(e) => blur(e)}
            onChange={(e) => setCity(e.target.value)}
            className="py-[1.5rem] pl-[1.5rem] w-[38.5rem] bg-white rounded-[5px] border border-black text-lg"
            placeholder="City...(optional)"
            name="city"
          />
        </div>
        <button
          className="py-[1rem] px-[1rem] bg-blue-500 text-white text-2xl rounded-[.5rem] border border-black border-opacity-60"
          onClick={sendData} disabled={!isValid}>
          Registaration
        </button>
      </div>
    </div>
  )
}

export default Signup

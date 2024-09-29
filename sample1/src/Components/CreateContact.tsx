import React, { ChangeEvent, ReactEventHandler, SyntheticEvent, useEffect, useState } from 'react'
import { UserProp } from '../Redux/UserReducer/UserProp'
import { useDispatch } from 'react-redux'
import { addUser } from '../Redux/UserReducer/UserSlice'
import { useNavigate } from 'react-router-dom'

const CreateContact = () => {

  const dispatch = useDispatch()
  const nav = useNavigate()

  const [btnDisable, setbtnDisable] = useState(true)

  const [selectedRadio, setSelectedRadio] = useState<string | null>(null);
  const [showTextbox, setShowTextbox] = useState(false);
  const [fname, setFname] = useState<string | null>(null)
  const [lname, setLname] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const [contact, setContact] = useState<number | null>(null)
  const [address, setAddress] = useState<string | null>(null)


  useEffect(() => {
    if (fname !== null || lname !== null || email !== null || contact !== null || address !== null) {
      setbtnDisable(false)
    }
  }, [fname, lname, email, contact, address])


  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedValue = e.target.value;
    setSelectedRadio(selectedValue);
    setShowTextbox(selectedValue !== null);
  };

  const fnameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFname(e.target.value)
  }

  const lnameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setLname(e.target.value)
  }

  const contactHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setContact(e.target.valueAsNumber)
  }

  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const addressHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value)
  }

  const submitHandler = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault()

    const UserDetail: UserProp = {
      fname,
      lname,
      address: {
        atype: selectedRadio,
        details: address,
      },
      contact: JSON.stringify(contact),
      email,
    }

    console.log(UserDetail)
    dispatch(addUser(UserDetail))
    nav("/homepage")

  }

  const backHandler = () => {
    nav("/homepage")
  }

  return (
    <div className='bg-slate-300 mx-10 my-5 shadow-lg'>
      <form onSubmit={submitHandler} className='p-[5rem] space-y-[2rem]'>
        <div className='flex space-x-5 justify-center'>
          <input onChange={fnameHandler} className='p-2 rounded-md flex-1' required type="text" placeholder='Firstname' />
          <input onChange={lnameHandler} className='p-2 rounded-md flex-1' required type="text" placeholder='Lastname' />
        </div>
        <div className='flex'>
          <input onChange={contactHandler} className='p-2 rounded-md flex-1' required placeholder="Contact No." type="number" />
        </div>
        <div className='flex'>
          <input onChange={emailHandler} className='p-2 rounded-md flex-1' placeholder='Email' type="email" required />
        </div>
        <div className='space-x-5'>
          <input required type="radio" value="Home" checked={selectedRadio === "Home"} onChange={handleRadioChange} /><span>Home</span>
          <input required type="radio" value="Office" checked={selectedRadio === "Office"} onChange={handleRadioChange} /><span>Office</span>
        </div>
        <div className="flex">
          <input onChange={addressHandler} required placeholder='Enter your Address' type="text" className={showTextbox ? `p-2 rounded-md flex-1` : `hidden`} />
        </div>
        <div className='flex'>
          <button disabled={btnDisable} type='submit' className={`${btnDisable ? `bg-blue-200` : `bg-blue-500`} flex-1 px-5 py-2 rounded-md text-white`}>Submit</button>
        </div>
      </form>
      <div className='flex justify-start p-4'>
        <button onClick={backHandler} className='bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-900'>Back</button>
      </div>
    </div>
  )
}

export default CreateContact

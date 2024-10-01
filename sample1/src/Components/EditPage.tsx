import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { RootState } from '../Redux/store'
import { updateUser } from '../Redux/UserReducer/UserSlice'
import { UpdateProp, UserProp } from '../Redux/UserReducer/UserProp'


const EditPage = () => {
  // Regex
  function isAlphabetic(name: string): boolean {
    return /^[a-zA-Z]+$/.test(name);
  }

  const dispatch = useDispatch()
  const {id} = useParams()

  const obj = useSelector((state: RootState) => state.userreducer.users.find(pre => pre._id === parseFloat(id as string)))
  const ind = useSelector((state: RootState) => state.userreducer.users.findIndex(pre => pre._id === parseFloat(id as string)))

  const nav = useNavigate()

  const [btnDisable, setbtnDisable] = useState(true)
  const [_id, setId] = useState<number | null>(null)

  const [selectedRadio, setSelectedRadio] = useState<string | null>(null);
  const [showTextbox, setShowTextbox] = useState(false);
  const [fname, setFname] = useState<string | null>('')
  const [lname, setLname] = useState<string | null>("")
  const [email, setEmail] = useState<string | null>("")
  const [contact, setContact] = useState<number | null>(0)
  const [address, setAddress] = useState<string | null>("")

  useEffect(() => {
    console.log(ind)
    console.log(obj)
    setFname(obj?.fname || "")
    setLname(obj?.lname || "")
    setContact(obj?.contact || 0)
    setEmail(obj?.email || '#')
    setSelectedRadio(obj?.address?.atype || "")
    setAddress(obj?.address?.details || "")
  }, [])

  useEffect(() => {
    if(fname === obj?.fname && lname === obj?.lname && contact === obj?.contact && email === obj?.email && selectedRadio === obj?.address?.atype && address === obj?.address?.details){
      setbtnDisable(true)
    }
    else if(fname !== null && lname !== null && email !== null && contact !== null && address !== null) {
      let tele: string = JSON.stringify(contact)
      if(isAlphabetic(fname) && isAlphabetic(lname) && tele.length == 10 && email.search('@') > -1){
        setbtnDisable(false)
      }
      else{
        setbtnDisable(true)
      }
    }
    else{
      setbtnDisable(true)
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

  const backHandler = () => {
    nav("/homepage")
  }

  const submitHandler = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault()
    const UserDetail: UserProp = {
      _id: obj?._id || -1,
      fname,
      lname,
      address: {
        atype: selectedRadio,
        details: address,
      },
      contact: contact,
      email,
    }
    // console.log(UserDetail)
    const newUser: UpdateProp = {
      id:ind,
      users:UserDetail
    }
    console.log(`Before Update`)
    console.log(newUser)
    dispatch(updateUser(newUser))
    nav("/homepage")
  }

  return (
    <div className='bg-slate-300 mx-10 my-5 shadow-lg'>
      <form onSubmit={submitHandler} className='p-[5rem] space-y-[2rem]'>
        <div className='flex space-x-5 justify-center'>
          <input value={fname || ''} onChange={fnameHandler} className='p-2 rounded-md flex-1' required type="text" placeholder='Firstname' />
          <input value={lname || ''} onChange={lnameHandler} className='p-2 rounded-md flex-1' required type="text" placeholder='Lastname' />
        </div>
        <div className='flex'>
          <input value={contact || 0} onChange={contactHandler} className='p-2 rounded-md flex-1' required placeholder="Contact No." type="number" />
        </div>
        <div className='flex'>
          <input value={email || ''} onChange={emailHandler} className='p-2 rounded-md flex-1' placeholder='Email' type="email" required />
        </div>
        <div className='space-x-5'>
          <input required type="radio" value="Home" checked={selectedRadio === "Home"} onChange={handleRadioChange} /><span>Home</span>
          <input required type="radio" value="Office" checked={selectedRadio === "Office"} onChange={handleRadioChange} /><span>Office</span>
        </div>
        <div className="flex">
          <input value={address || ''} onChange={addressHandler} required placeholder='Enter your Address' type="text" className={showTextbox ? `p-2 rounded-md flex-1` : `hidden`} />
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

export default EditPage

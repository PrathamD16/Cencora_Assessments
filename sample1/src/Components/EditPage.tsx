import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { RootState } from '../Redux/store'


const EditPage = () => {
  const dispatch = useDispatch()
  const res = useSelector((state: RootState) => state.userreducer.users)
  const { id } = useParams()
  const nav = useNavigate()

  const [btnDisable, setbtnDisable] = useState(true)

  const [selectedRadio, setSelectedRadio] = useState<string | null>(null);
  const [showTextbox, setShowTextbox] = useState(false);
  const [fname, setFname] = useState<string | null>('')
  const [lname, setLname] = useState<string | null>("")
  const [email, setEmail] = useState<string | null>("")
  const [contact, setContact] = useState<number | null>(0)
  const [address, setAddress] = useState<string | null>("")

  let index: number;
  useEffect(() => {
    index = parseInt(id as string, 10)
    setFname(res[index]?.fname || '')
    setLname(res[index]?.lname || '')
    setEmail(res[index]?.email || '')
    setContact(res[index]?.contact || 0)
    setSelectedRadio(res[index]?.address?.atype || '')
    setAddress(res[index]?.address?.details || '')
  }, [])

  useEffect(() => {
    if(fname != res[index]?.fname || lname != res[index]?.lname || contact != res[index]?.contact || email != res[index]?.email || selectedRadio != res[index].address?.atype || address != res[index].address?.details){
      setbtnDisable(false)
    }
    else{
      setbtnDisable(true)
    }
  }, [selectedRadio, fname, lname, email, contact, address])


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
    console.log(`Update Button`)
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

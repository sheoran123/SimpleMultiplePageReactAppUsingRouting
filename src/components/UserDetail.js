import { Link } from 'react-router-dom'
import {useState} from 'react'


const UserDetail = ({AddUserDetail}) => {
    const [firstname,setFirstName] =useState('')
    const [lastname,setLastName] =useState('')
    const [email,setEmail]=useState('')
    const sendBackdetails=()=>{
        AddUserDetail({firstname,lastname,email})
    }

    return (
        <div className="">
            <header className="font-bold box-content h-20 w-screen bg-green-300 m-auto rounded-md box-border pt-7"><h1 className="text-2xl text-white italic ">Enter User Details</h1>
            </header>
            <form className="flex flex-col gap-5 mt-8 ">
                <div className="flex flex-col gap-2">
                    <label htmlFor="firstname" className="text-gray-400 text-sm">First Name</label>
                    <input type="text" className="w-1/3 place-self-center no-border border-b-2" placeholder="" value={firstname} onChange={(e)=>setFirstName(e.target.value)} />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="lastname" className="text-gray-400 text-sm">Last Name</label>
                    <input type="text" className="w-1/3 place-self-center no-border border-b-2" placeholder="" value={lastname} onChange={(e)=>setLastName(e.target.value)} />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-gray-400 text-sm">Email</label>
                    <input type="email" className="w-1/3 place-self-center no-border border-b-2 " placeholder="" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <Link to="/personalDetail" className="bg-green-300 rounded-xl hover:bg-green-700 hover:ring-5 w-1/5 py-3 place-self-center text-xl text-white" onClick={sendBackdetails}>Continue</Link>
            </form>
        </div>
    )
}

export default UserDetail

import { Link } from 'react-router-dom'
import {useState} from 'react'


const PersonalDetail = ({AddPersonalDetail}) => {
    const [occupation,setOccupaction] =useState('')
    const [city,setCity] =useState('')
    const [bio,setBio]=useState('')
    const addDetails=()=>{
        AddPersonalDetail({occupation,city,bio})
    }

    return (
        <div>
            <header className="font-bold box-content h-20 w-screen bg-green-300 m-auto rounded-md box-border pt-7"><h1 className="text-2xl text-white italic ">Enter Personal Details</h1></header>
            <form className="flex flex-col gap-5 mt-8 ">
                <div className="flex flex-col gap-2">
                    <label className="text-gray-400 text-sm" htmlFor="occupation">Occupation</label>
                    <input type="text" className="w-1/3 place-self-center no-border border-b-2" placeholder="" value={occupation} onChange={(e)=>setOccupaction(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-gray-400 text-sm" htmlFor="city">City</label>
                    <input type="text" className="w-1/3 place-self-center no-border border-b-2" placeholder="" value={city} onChange={(e)=>setCity(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-gray-400 text-sm" htmlFor="bio">Bio</label>
                    <input type="text" className="w-1/3 place-self-center no-border border-b-2" placeholder="" value={bio} onChange={(e)=>setBio(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-3">
                    <Link to="/" className="bg-green-300 rounded-xl hover:bg-green-700 hover:ring-5  py-3 w-auto place-self-center text-xl px-5 text-white">Back</Link>
                    <Link to="/confirmation" className="bg-green-300 rounded-xl hover:bg-green-700 hover:ring-5 py-3 w-auto place-self-center px-5 text-xl text-white" onClick={addDetails}>Continue</Link>
                </div>
            </form>
        </div>
    )
}

export default PersonalDetail

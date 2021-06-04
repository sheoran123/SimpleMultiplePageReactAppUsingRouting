import { Link } from 'react-router-dom'



const Confirmation = ({details}) => {
    

    return (
        <div>
            <header className="font-bold box-content h-20 w-screen bg-green-300 m-auto rounded-md box-border pt-7"><h1 className="text-2xl text-white italic ">Confirm</h1></header>
            {details.length!==0?<div className="flex flex-col gap-5 mt-10">
                <div>
                    <h2 className="text-2xl italic ">First Name :</h2>
                    <p className="text-md italic text-gray-600 font-800">{details[0].firstname}</p>
                </div>
                <div>
                    <h2 className="text-2xl italic ">Last Name :</h2>
                    <p className="text-md italic text-gray-600 font-800">{details[0].lastname}</p>
                </div>
                <div>
                    <h2 className="text-2xl italic ">Email :</h2>
                    <p className="text-md italic text-gray-600 font-800">{details[0].email}</p>
                </div>
                <div>
                    <h2 className="text-2xl italic ">Occupation :</h2>
                    <p className="text-md italic text-gray-600 font-800">{details[1].occupation}</p>
                </div>
                <div>
                    <h2 className="text-2xl italic ">City :</h2>
                    <p className="text-md italic text-gray-600 font-800">{details[1].city}</p>
                </div>
                <div>
                    <h2 className="text-2xl italic ">Bio :</h2>
                    <p className="text-md italic text-gray-600 font-800">{details[1].bio}</p>
                </div>
            </div>:<h1>Please fill all info first</h1>}
            <div className="mt-10 ">
                <Link to="/personalDetail" className="bg-green-300 mr-10 rounded-xl hover:bg-green-700 hover:ring-5  py-3 w-auto place-self-center text-xl px-5 text-white">Back</Link>
                <Link to="/success" className="bg-green-300 rounded-xl hover:bg-green-700 hover:ring-5  py-3 w-auto place-self-center text-xl px-5 text-white">Confirm & Continue</Link>  
            </div>    
        </div>
    )
}

export default Confirmation

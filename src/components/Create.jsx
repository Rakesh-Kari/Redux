import { useState } from "react";
import { useDispatch } from "react-redux";
import { creatingUser } from "../features/UserDetailSlice";
import { useNavigate } from "react-router-dom";

export const Create = () => {

    const [ users, setUsers ] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getUserData = (e) => {
        setUsers ({...users, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("users:", users)
        dispatch(creatingUser(users));
        navigate('/read')
    }

    return (
        <div className="w-1/2 mt-10 mx-10">
            <div className="flex flex-col">       
                <div className="flex">
                    <div className="flex flex-col justify-center mr-4">
                        Name: 
                    </div>
                    <input type="text" name="name" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-3 px-2" placeholder="Enter username" onChange={getUserData}/>
                </div>
                <div className="flex mt-4">
                    <div className="flex flex-col justify-center mr-4">
                        Email: 
                    </div>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-3 px-2" placeholder="Enter Email" onChange={getUserData}/>
                </div>
                <div className="flex mt-4">
                    <div className="flex flex-col justify-center mr-4">
                        Age: 
                    </div>
                    <input type="number" id="age" name="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-3 px-2" placeholder="Enter age" onChange={getUserData}/>
                </div>
                <div className="flex mt-4">
                    <div className="flex flex-col justify-center mr-4">
                        Gender: 
                    </div>
                    <input type="text" id="gender" name="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-3 px-2" placeholder="Enter gender" onChange={getUserData}/>
                </div>

                <button className="border-2 bg-blue-800 text-white  py-2 w-40 mt-5" onClick={handleSubmit}>
                    Submit
                </button>

            </div>
        </div>
    )
}


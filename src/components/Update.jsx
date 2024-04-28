import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { updatingUser } from "../features/UserDetailSlice";

export const Update = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const [update, setUpdate] = useState();
    const { users, loading} = useSelector(state => state.userdetails)
    const navigate = useNavigate();
    
    useEffect(() => {
        if(id) {
            const singleUser = users.filter(element => element.id === id)
            setUpdate(singleUser[0]);
        }
    },[])

    const newData = (e) => {
        setUpdate({...update, [e.target.name]: e.target.value})
        console.log(update)
    }

    const handleSubmit = (e) => {
        e.preventDefault;
        dispatch(updatingUser(update))
        navigate('/read')
    }

    return (
        <div className="w-1/2 mt-10 mx-10">
            <div className="flex flex-col justify-center"> Updating the Data</div>
            <div className="flex flex-col">       
                <div className="flex">
                    <div className="flex flex-col justify-center mr-4">
                        Name: 
                    </div>
                    <input type="text" value={update && update.name} name="name" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-3 px-2 flex-grow " placeholder="Enter username" onChange={newData}/>
                </div>
                <div className="flex mt-4">
                    <div className="flex flex-col justify-center mr-4">
                        Email: 
                    </div>
                    <input type="email" value={update && update.email} name="email" iad="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-3 px-2 flex-grow" placeholder="Enter Email" onChange={newData}/>
                </div>
                <div className="flex mt-4">
                    <div className="flex flex-col justify-center mr-4">
                        Age: 
                    </div>
                    <input type="number" value={update && update.age} id="age" name="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-3 px-2 flex-grow" placeholder="Enter age" onChange={newData}/>
                </div>
                <div className="flex mt-4">
                    <div className="flex flex-col justify-center mr-4">
                        Gender: 
                    </div>
                    <input type="text" value={update && update.gender} id="gender" name="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg py-3 px-2 flex-grow" placeholder="Enter gender" onChange={newData}/>
                </div>

                <button className="border-2 bg-blue-800 text-white  py-2 w-40 mt-5 " onClick={handleSubmit}>
                    Submit
                </button>

            </div>
        </div>
    )
}

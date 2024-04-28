import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletingUser, showingUser } from "../features/UserDetailSlice";
import { SinglePopup } from "./SinglePopup";
import { Link } from "react-router-dom";

export const Read = () => {
    const dispatch = useDispatch();
    const alldata = useSelector((state) => state.userdetails);

    const [popup, setPopup] = useState(false);
    const [id, setId] = useState();

    useEffect(() => {
        dispatch(showingUser());
    }, [dispatch]);

    return (
        <div className="p-4">
            {popup &&  <SinglePopup id={id} popup={popup} setPopup={setPopup} />}
            <h1 className="text-2xl font-bold mb-4 flex justify-center">This is the read operation</h1>
            {alldata.loading ? (
                <p>Loading...</p>
            ) : alldata.error ? (
                <p className="text-red-500">Error: {alldata.error}</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {alldata.users

                    .filter(element => {
                        if(alldata.searchData.length === 0) {
                            return element;
                        } else {
                            return element.email.toLowerCase().includes(alldata.searchData.toLowerCase())
                        }
                    })
                    
                    .map((user) => (
                        <div className="">
                            <div key={user.id} className="border rounded p-4 bg-gray-100">
                                <div className="">
                                    <div className="flex">
                                        <p className="font-bold mr-3">Name:</p>
                                        <p>{user.name}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="font-bold mr-3">Email:</p>
                                        <p>{user.email}</p>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <button onClick={() => { setPopup(true), setId(user.id) }} type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">View</button>
                                    <Link to={`/update/${user.id}`}>
                                        <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Edit</button>
                                    </Link>
                                    <button onClick={() => dispatch(deletingUser(user.id))} type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Delete</button>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

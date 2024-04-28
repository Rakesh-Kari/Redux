import { useSelector } from "react-redux"

export const SinglePopup = ({id, popup, setPopup}) => {

    const showData = useSelector((state) => state.userdetails.users)

    const singleUser = showData.filter((element) => element.id === id)
    console.log(singleUser)

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-10 bg-black bg-opacity-80">
            <div className="bg-white p-10 border-10 h-96 w-96 flex flex-col justify-start items-center">
                <button type="button" onClick={() => setPopup(false)} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 px-10 py-2">Close</button>
                <div className="flex flex-col mt-10">
                    <p>Name: {singleUser[0].name}</p>
                    <p>Email: {singleUser[0].email}</p>
                    <p>Age: {singleUser[0].age}</p>
                    <p>Gender: {singleUser[0].gender}</p>
                </div>
            </div>
        </div>


    )
}


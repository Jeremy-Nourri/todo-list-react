/* eslint-disable react/prop-types */
function Task({ id, title, duedate, description, isDone, deleteTask, changeTaskStatus }) {

    return ( 
        <div className="w-2/3 mx-auto my-3 p-4 bg-[#C3DBC5] rounded shadow ">
            <div className="flex justify-between">
                <p className="font-semibold text-sm">Titre : {title}</p>
                <p className="font-semibold text-sm">Date limite : {duedate}</p>
            </div>
            <hr className="bg-gray-500 h-0.5 mt-2" />
            <div className="px-10 py-6 break-words overflow-hidden">
                <p className="">{description}</p>
            </div>
            <div className="flex justify-between">
                <button 
                    onClick={() => changeTaskStatus(id)}
                    className="block rounded-lg p-1 px-4 font-semibold text-sm cursor-pointer text-black bg-[#E8DCB9]"
                >
                    { isDone ? "A faire" :  "Fait"}
                </button>                 
                <button
                    onClick={() => deleteTask(id)}
                    className="block rounded-lg p-1 px-4 font-semibold text-sm cursor-pointer text-white bg-[#7798AB]"
                >
                    Supprimer
                </button>
            </div>
        </div>
     );
}

export default Task;
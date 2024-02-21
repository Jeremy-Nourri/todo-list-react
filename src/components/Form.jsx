/* eslint-disable react/prop-types */
import { useRef } from "react";
import { v4 as uuid } from "uuid";
import moment from "moment";

function Form({ addTask }) {

    const inputTitle = useRef(null);
    const inputDescription = useRef(null);
    const inputDuedate = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formattedDate = moment(inputDuedate.current.value).format("DD/MM/YYYY");
        addTask({ 
            id: uuid(),
            title: inputTitle.current.value,
            description: inputDescription.current.value,
            duedate: formattedDate,
            isDone: false,
        })
        inputTitle.current.value = "";
        inputDescription.current.value = "";
        inputDuedate.current.value = "";
    }


    return (
        <>
        <h2 className="text-center font-bold">Créer une nouvelle tâche</h2>
        <form onSubmit={handleSubmit} className="w-2/3 p-3 rounded-lg shadow mx-auto text-center bg-[#0D1B1E]">
            <label htmlFor="title" className="block text-white mb-1">Titre</label>
            <input type="text" className="w-1/2 rounded-lg bg-gray-100 border border-gray-300 p-1 mb-4 outline-none" id="title" ref={inputTitle} required/>

            <label htmlFor="description" className="block text-white">Description</label>
            <textarea 
                rows="4" 
                maxLength="150" 
                placeholder="300 caractères maximum" 
                className="w-1/2 rounded-lg bg-gray-100 border border-gray-300 p-1 mb-4 outline-none placeholder:text-center"
                id="description" 
                ref={inputDescription} 
                required
            />

            <label htmlFor="duedate" className="block text-white">Date limite</label>
            <input type="date" className="w-1/2 cursor-pointer rounded-lg bg-gray-100 border border-gray-300 p-1 mb-4 outline-none" id="duedate" ref={inputDuedate} required/>

            <button type="submit" className="block rounded-lg my-3 mx-auto p-1 px-4 font-semibold cursor-pointer text-white bg-[#7798AB]">
                Insérer la tâche
            </button>
        </form>
        </>
     );
}

export default Form;
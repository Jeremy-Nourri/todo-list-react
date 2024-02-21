/* eslint-disable react/prop-types */
import Task from "./Task";

function Table({ tasksList, deleteTask, changeTaskStatus }) {
    return ( 
        <article>
            <h1 className="text-center font-bold my-4">Liste de tâches:</h1>
            {
                tasksList.map((task) => (
                    <Task 
                        key={task.id}
                        id={task.id}
                        title={task.title} 
                        description={task.description} 
                        duedate={task.duedate}
                        isDone={task.isDone}
                        deleteTask={deleteTask}
                        changeTaskStatus={changeTaskStatus}
                    />
                ))
            }

        </article>
     );
}

export default Table;
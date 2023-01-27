import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';   
import TaskForm from '../pure/forms/taskForm';


const TaskListComponent = () => {

  const defaultTask1 = new Task( 'Example', 'description1', true, LEVELS.NORMAL);

  const defaultTask2 = new Task( 'Example', 'description2', false, LEVELS.URGENT);

  const defaultTask3 = new Task( 'Example', 'description3', true, LEVELS.BLOCKING);
  
  //Estado de componente
  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  //Control del ciclo de vida del componente
  useEffect(() => {
    console.log('Task State has been modified');
    setLoading(false);
    return () => {
      console.log('TaskList component is going to unmount...');
    };
  }, [tasks]);

  function completeTask(task){
    console.log('Complete this task: ', task);

    //esto nos permite sacar el indice de la tarea en concreto.
    const index = tasks.indexOf(task);

    //Creamos una variable temporar que nos trae todas las tareas
    //para poder iterar sobre ellas
    const temTasks = [...tasks];

    //Modificamos una tarea concreta dentro de una posición concreta
    //(de true a false) o (de false a true)
    temTasks[index].completed = !temTasks[index].completed

    //we update the state of the component with the new list of tasks
    //Iteration of the tasks in orden to show the task update
    setTasks(temTasks);
  }

  //Funcion para borrar tareas
  function deleteTask(task){
    console.log('Delete this task: ', task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  }
  
  //Funcion para añadir tareas
  function addTask(task){
    console.log('Add this task: ', task);
    const index = tasks.indexOf(task)
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  }

  return (
    <div>
      <div className='col-12'>
        <div className='card'>
          {/*Card Header (title) */}
          <div className='card-header p-3'>
            <h5>
              Your Task:
            </h5>
          </div>
          {/*Card body (contet) */}
          <div className='card-body' data-mdd-perfect-scrollbar= 'true' style={{position: 'relative', height: '400px'}}>
            <table>
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/*TODO: Iterar sobre una lista de tareas */}
                {tasks.map((task, index) => {
                  return(
                    <TaskComponent 
                      key={index} 
                      task={ task }
                      complete={ completeTask }
                      remove={ deleteTask }
                    >
                      
                    </TaskComponent>
                  )
                })}
                
              </tbody>
            </table>
          </div>
        </div>
        <TaskForm add={ addTask }></TaskForm>
      </div>

      {/*<TaskComponent task={ defaultTask }></TaskComponent>*/}
    </div>
  );
};


export default TaskListComponent;



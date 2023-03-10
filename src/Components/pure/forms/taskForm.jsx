import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

// Componente para crear nuevas tareas (task)
const TaskForm = ({ add }) => {

  const nameRef = useRef('');
  const descriptionRef = useRef('');
  const levelRef = useRef(LEVELS.NORMAL);

  // Metodo que llamaremos al enviar (hacer submit)
  // recibe el evento por defecto (e)
  function addTask(e){
    e.prevenDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value,
    );
    add(newTask);
  }

  return (
    <form onSubmit={ addTask } className= 'd-flex justify-content-center align-items-center mb-4'>
      <div className='form-outline flex-fill'>
        <input ref={nameRef} id='inputName' type='text' className='form-comtrol form-comtrol-lg' required autoFocus placeholder='Task Name'/>
        <input ref={descriptionRef} id='inputDescription' type='text' className='form-comtrol form-comtrol-lg' required placeholder='Description Task'/>
        <label htmlFor='selectLevel' className='sl-only' >Priority</label>
        <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
          <option value={LEVELS.NORMAL}>
            NORMAL
          </option>
          <option value={LEVELS.URGENT}>
            URGENT
          </option>
          <option value={LEVELS.BLOCKING}>
            Blocking  
          </option>
        </select>
      </div>
      <button type='submit' className='btn btn-success btn-lg ms-2'>
        Add
      </button>
    </form>
  );
};


TaskForm.propTypes = {
  add: PropTypes.func.isRequired
};


export default TaskForm;


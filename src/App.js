import logo from './logo.svg';
import './App.css';
import Greeting from './Components/pure/greeting';
import GreetingF from './Components/pure/greetingF';
import { Task } from './models/task.class';
import TaskListComponent from './Components/Container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio de greeting.js */}
        {/*<Greeting name="Willian"></Greeting>*/}

        {/*Componente de ejemplo funcional*/}
        {/*<GreetingF name="Willian"></Greeting>*/}
        
        {/*Componentes de listados de tareas*/}
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;

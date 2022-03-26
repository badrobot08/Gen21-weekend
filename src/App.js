import logo from "./logo.svg";
import NavBar from './components/NavBar.js'
import Content from './components/Content.js'
import ClassState from "./State Components/ClassState";
import ClassForm from "./Forms/ClassForms";
function App() {
  
  const name='Papaye'

  return (
    <div className="App">
      <ClassForm/>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import NavBar from './components/NavBar.js'
import Content from './components/Content.js'

function App() {
  
  const name='Papaye'

  return (
    <div className="App">
     <NavBar navName={name} />
     <Content />
    </div>
  );
}

export default App;

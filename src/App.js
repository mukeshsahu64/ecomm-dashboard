import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
     <button>Normal Button</button>
     <Button class="btn btn-success">Bootstrap</Button>
     <Button class="btn btn-danger">Repository</Button>
    </div>
  );
}

export default App;

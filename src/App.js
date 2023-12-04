
import './App.css';
import Incr from './Incr'
import {count, doubleCount, increment} from './signals'

function App() {
  return (
    <div className="App">
 <div>

<button onClick={increment}>Parent +</button>



</div>
      <div>
        Parent: {count}
        Parent: {doubleCount}
      </div>
      <Incr></Incr>
      
    </div>
  );
}

export default App;

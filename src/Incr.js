import {count, increment} from './signals'

function Incr() {
  return (
    <div>

        <button onClick={increment}>Child +</button>

        <p>Child {count}</p>
      
    </div>
  );
}

export default Incr;

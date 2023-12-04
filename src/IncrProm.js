import {count, increment} from './signals'

function IncrProm() {
  return (
    <div>

        <button onClick={increment}>Child +</button>

        <p>Child {count}</p>
      
    </div>
  );
}

export default Incr;

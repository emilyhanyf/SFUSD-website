import styles from './App.module.css'
import { Part1 } from './components/Part1/Part1'
import { Part2 } from './components/Part2/Part2';
import { Part3 } from './components/Part3/Part3';

function App() {

  return (
    <div className={styles.App}>
      <Part1 />
      <Part2 />
      <Part3 />
    </div>
  );
};

export default App;

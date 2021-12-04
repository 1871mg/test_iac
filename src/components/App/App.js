import styles from './App.module.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';

function App() {
  return (
	  <BrowserRouter>
      <div className="App">
	      <Navbar />
	      <Main />
      </div>
	  </BrowserRouter>
  );
}

export default App;

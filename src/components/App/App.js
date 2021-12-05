import styles from './App.module.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Footer2 from '../Footer2/Footer2';

function App() {
  return (
	  <BrowserRouter>
      <div className="App">
	      <Navbar />
	      <Main />
	      <Footer />
	      <Footer2 />
      </div>
	  </BrowserRouter>
  );
}

export default App;

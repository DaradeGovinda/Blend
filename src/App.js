
import './App.css';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/components/Pages/HomePage/HomePage';

function App() {
  return (
    <div className="z-100">
    <Navigation/>
      <div className='z-10'>
        <HomePage/>    
      </div>
      <Footer/>
    </div>
  );
}

export default App;

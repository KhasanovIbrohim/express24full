import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Restourants from './Components/Restourants/Restourants';
import Footer from './Components/Footer/Footer';

function App() {
return (
<div className="App">
  <Navbar />
  <Intro />
  <Restourants />
  <Footer />
</div>
);
}

export default App;
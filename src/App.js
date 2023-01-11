import './App.css';
import Nav from './components/nav';
import Search from './components/search';
import Weather from './components/weather';

function App() {
  return (
    <div className='App'>
      <Nav/>
      <Search/>
      <Weather/>
    </div>
  );
}

export default App;

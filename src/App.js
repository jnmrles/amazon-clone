
import './App.css';
import Header from './Header.js'
import Home from './Home.js'

// This is where you add your main components. Home page
function App() {
  return (
    // BEM Convention for app
    <div className="app">
     <Header/>
     <Home/>
     {/*Header */}
      {/*Home */}
    </div>
  );
}

export default App;

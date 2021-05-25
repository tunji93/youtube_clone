
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Searchpage from './pages/Searchpage'
import Viewspage from './pages/Viewpage'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__main">
            <Sidebar />
            <Switch>
              <Route path="/">
                <Homepage/>
              </Route>
              <Route path="/search">
                <Searchpage/>
              </Route>
              <Route path="/search/:id">
                <Viewspage/>
              </Route>
            </Switch>
        </div>
      </div>
    </Router>
      
    
  );
}

export default App;

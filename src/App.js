import {Container} from 'react-bootstrap'
import React, {useState} from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Homepage from './pages/Homepage'
import './Styles/_App.scss'

const App = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false)

  const handleSidebar = ()=> {
        
        setToggleSidebar((prevVal)=> !prevVal)
    }
  return (
    <>
      <Header handleSidebar={handleSidebar}/>
      <div className = "app__container border border-info">
        <Sidebar display={toggleSidebar}/>
        <Container fluid className="app__main border border-warning">
          <Homepage />
        </Container>
      </div>

      
    </>
  )
}

export default App














/*import './App.css';
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
              <Route  exact path="/">
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

export default App; */

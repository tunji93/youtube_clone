
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import RecomendedVideos from './components/RecomendedVideos'

function App() {
  return (
    <div className="app">
       <Header />
       <div className="app__main">
          <Sidebar />
          <RecomendedVideos />
       </div>
    </div>
      
    
  );
}

export default App;

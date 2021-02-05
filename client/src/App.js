import {Route} from 'react-router-dom';
import Projects from './components/Projects';
import Actions from './components/Actions';
import AddProjects from './components/AddProjects';
import UpdateProjects from './components/UpdateProjects';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="banner">
      <h1>Project Builder App!</h1>
      </header>
   
    <Route exact path="/">
      <Projects/>
    </Route>

    <Route path="/addprojects">
      <AddProjects/>
    </Route>
    
    <Route path="/updateprojects/:id">
      <UpdateProjects/>
    </Route>

    <Route exact path="/:id/actions">
      <Actions/>
    </Route>
    
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Post from './Components/Post';
import Posts from './Components/Posts';
import NotFound from './Components/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/posts/:id" exact component={Posts} />
        <Route path="/posts/:id/:postid" component={Post} />
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;

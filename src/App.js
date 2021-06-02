import { BrowserRouter as Router, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Step1} />
      <Route path='/step2' component={Step2} />
      <Route path='/step3' component={Step3} />
      <Route path='/step4' component={Step4} />
      <Route path='/result' component={Result} />
    </Router>
  );
}

export default App;

import './App.css';
import store from './store';
import {Provider} from 'react-redux'
import Dashboard from './ReduxComponents/Dashboard';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
   <Dashboard/>
   </Provider>
    </div>
  );
}

export default App;


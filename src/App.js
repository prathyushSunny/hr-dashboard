import './App.scss';
import DashboardNav from './Components/DashboardNav/DashboardNav'
import Dashboard from './Components/Dashboard/Dashboard'
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <div id="dashboard">
        <DashboardNav/>
        <Dashboard/>
      </div>
    </Provider>    
  );
}

export default App;

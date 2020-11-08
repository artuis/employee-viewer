
import './App.css';
import ViewEmployees from './pages/ViewEmployees';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  document.title = "Employee Viewer"
  return (
    <ViewEmployees />
  )
}

export default App;

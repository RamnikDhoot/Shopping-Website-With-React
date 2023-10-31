import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';

import Navbar from './components/Navbar';
import './App.css';
import main from './components/main';

function App() {
  return (
    <div>
      <Navbar />
      <main />
    </div>
  );
}

export default App;

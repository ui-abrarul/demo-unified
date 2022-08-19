
import { BodyLayout } from '@cedcommerce/ounce-ui';
import Onboarding from './components/onboarding/Onboarding';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
       <Routes>
       <Route path='/' element={<Onboarding/>}/>
       <Route path="dashboard" element={<Dashboard />} />
       </Routes>
       
     
    
        {/* <Onboarding /> */}
    
    </div>
  );
}

export default App;

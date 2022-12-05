import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';

function App() {
  return (
    <div style={{
      backgroundImage: 'linear-gradient(60deg, #362d42, #4f7468)',
      height: "100vh"
  }}>
    <div className="mx-5">
      <RouterProvider router={routes}></RouterProvider>
    </div>
    </div>
  );
}

export default App;

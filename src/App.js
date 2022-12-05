import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';

function App() {
  return (
    <div  className="mx-5">

      <RouterProvider router={routes}></RouterProvider>

    </div>
  );
}

export default App;

import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';

function App() {
  return (
    <div  className=" h-[100%]">

      <RouterProvider router={routes}></RouterProvider>
        <Toaster></Toaster>
    </div>
  );
}

export default App;

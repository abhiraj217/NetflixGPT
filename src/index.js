import React  from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Login from './page/Login';
import Maindashboard from './page/Maindashboard';
import { Provider } from 'react-redux';
import Store from './utils/redux/store/Store';


const appRouter = createBrowserRouter([
    {path:"/",
    element:<App />,
    children:[
      {
        path:"/login",
        element:<Login />
      },
      {
        path:"/browse",
        element:<Maindashboard />
      }
    ]}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
  <RouterProvider router={appRouter}/>
  </Provider>
);

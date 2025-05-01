import {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// method1: 
import { createBrowserRouter,RouterProvider } from 'react-router'

import AppRoutes from './Routes.jsx'
import { About,Home,Contact,User,GithubFetchData } from './components/index.js'
import { GithubInfoLoader } from './components/Github/Github.jsx'

// method 1:  we define nested also
// const router = createBrowserRouter([
//   {
//     path:'route',
//     element:<AppRoutes/>,
//     children:[
//       {
//         path:"home",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>,
        
//       },
//     ]

//   },
//   {
//     path:"contact",
//     element:<Contact/>
//   },
//   {
//     path:"/",
//     element:<App/>

//   }
// ]);

const router = createBrowserRouter([
  {
    //element:<AppRoute/>,   //we can provi the component or element also, both work same
    path:'route',Component:AppRoutes,children:[
      {path:"home",Component:Home},
      {path:"about",Component:About,},
      {path:"contact",Component:Contact},
      {path:"user/:refId",Component:User}, // take dynamic values
      {path:"github",Component:GithubFetchData,loader:GithubInfoLoader,errorElement: <div>Failed to load GitHub data.</div>,}

    ]
  },
  {
    path:"/",element:<App/>
  }
]);

// start 1:
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
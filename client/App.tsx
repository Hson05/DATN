import React from 'react'
import { useRoutes } from 'react-router-dom'
import ClientLayout from './layout/client'
import AdminLayout from './layout/admin'

type Props = {}

const App = (props: Props) => {
  const routes = useRoutes([
      {path:"/",element:<ClientLayout/>,children:[]},
      {path:"/dashboard",element:<AdminLayout/>,children:[]},
  ])
  return routes
}

export default App
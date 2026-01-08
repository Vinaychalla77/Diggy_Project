import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Text from './Components/Text'
import Searchbars from './Components/Searchbars'


function App() {

   return (
      <>
      
       <Navbar/>
       <Text/>
       <Searchbars/>
      </>

   )

}
export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Searchbars from './Components/Searchbars'
import Cards from './Components/Cards'
import Background from './Components/Background'
import Text from './Components/Text'


function App() {

   return (
      <>
         <div>
            <Navbar />
            <Background/>
         </div>
      </>

   )

}
export default App

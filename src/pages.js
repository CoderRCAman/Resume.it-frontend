import React from 'react';
import {ChakraProvider} from '@chakra-ui/react' 
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Layout from './components/Layout/Index'
import Resume from './components/main/Resume';
 import LandingPage from './components/main/LandingPage';
 import SelectResume from './components/main/SelectResume';
export default function Pages (){
   const isAuthenticated =  () => {
       const isLogged = localStorage.getItem('firstLogin') 
       return isLogged?true : false
   }
    return(

        <ChakraProvider > 
           
            <Router>
                <Routes>
                    <Route path='/' element ={<LandingPage/>} />
                    <Route path='/select' element ={<SelectResume/>} />
                    <Route path='/create/resume' element ={ isAuthenticated() ? <Resume/>:<LandingPage/> } />
                </Routes>
            </Router>

        </ChakraProvider>

    )

}
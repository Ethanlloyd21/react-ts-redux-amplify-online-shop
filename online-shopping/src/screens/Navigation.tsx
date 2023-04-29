import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import NavBarComponent from '../components/NavBarComponent'



const Navigation: React.FC<{}> =({}) => {
  return (
    <>
        <Router>
            <NavBarComponent />
        </Router>
    </>
  )
}

export default Navigation
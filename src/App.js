import './App.css';
import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



const App =()=> {
  const pageSize=15
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)
    
 
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar color='#f11946'
         progress={progress} />
        <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country='us' category='general'/>} />
        <Route exact path="/Business" element={<News setProgress={setProgress} apiKey={apiKey}  key='Business' pageSize={pageSize} country='us' category='Business'/>} />
        <Route exact path="/Entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  key="Entertainment" pageSize={pageSize} country='us' category='Entertainment'/>} />
        <Route exact path="/General" element={<News setProgress={setProgress} apiKey={apiKey}  key="General" pageSize={pageSize} country='us' category='General'/>} />
        <Route exact path="/Health" element={<News setProgress={setProgress} apiKey={apiKey}  key="Health" pageSize={pageSize} country='us' category='Health'/>} />
        <Route exact path="/Science" element={<News setProgress={setProgress} apiKey={apiKey}  key="Science" pageSize={pageSize} country='us' category='Science'/>} />
        <Route exact path="/Sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="Sports" pageSize={pageSize} country='us' category='Sports'/>} />
        <Route exact path="/Technology" element={<News setProgress={setProgress} apiKey={apiKey}  key="Technology" pageSize={pageSize} country='us' category='Technology'/>} />
          
        </Routes>
        
        </Router>
      </div>
    )
}
export default App
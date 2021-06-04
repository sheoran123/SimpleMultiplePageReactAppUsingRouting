import {BrowserRouter as Router,Route} from 'react-router-dom'
import UserDetail from './components/UserDetail'
import PersonalDetail from './components/PersonalDetail'
import Confirmation from './components/Confirmation'
import Success from './components/Success'
import {useState} from 'react'

function App() {
  const [details,setDetails] =useState([])

  // Adding details
  const addDetail=(detail)=>{
    setDetails([...details,detail])
  }

  
  return (
    <Router>
      <div className="container text-center">
      <Route path='/' exact render={(props)=>
        (
          <UserDetail AddUserDetail={addDetail}/>
        )} />
      <Route path='/personalDetail' exact render={(props)=>
        (
          <PersonalDetail AddPersonalDetail={addDetail}/>
        )} />
      <Route path='/confirmation' exact render={(props)=>
        (
          <Confirmation details={details}/>
        )} />
      <Route path='/success' exact render={(props)=>
        (
          <Success />
        )} />
      </div>
    </Router>
  );
}

export default App;

import Navbar from "./components/Navbar"
import MainPage from "./components/MainPage"
import people,{user} from "./components/people"
import { useState } from "react"
import Footer from "./components/Footer"


// console.log(user)
function App() {
const [userData,setUserData]=useState(people)
const [newUser,setNewUser]=useState(user)
// const [newUser1,setNewUser1]=useState("")
// const [newUser2,setNewUser2]=useState({fname:"izaan1",lname:"saqib"})

const handleChange=(e)=>{
  // setNewUser(e.target.value)
   // setNewUser({...newUser2,fname:"ali"})
  const {name,value}=e.target
  // setNewUser({...newUser,[name]:value})
  setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
}

const handleSubmit = (event) => {
  event.preventDefault();
  setUserData((prevUsers) => [...prevUsers, newUser]);
  // setNewUser({ name: '', age: '', email: '' });
};

   return (
    <>
    <Navbar/>
    {/* <input  
    type="text"
    id="fname1"
    value={newUser2.fname}
    onChange={handleChange}/>
    {console.log(newUser2.fname)}
    <h1>{newUser2.fname}</h1> */}
    <MainPage data={userData}
    newUser={newUser} 
    formChange={handleChange}
    submit={handleSubmit} />
    <Footer/>
    </>
  )
}

export default App

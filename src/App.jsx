import './App.css'
import { UserList } from "./components/userlist";
import { AddUser} from "./components/adduser";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

  const [users, setUsers] = useState([])

  const handleAddUser = user => {
    setUsers([...users, user])
    toast.success('User added successfully!');

  }
  
  return <>

    <ToastContainer/>

    <AddUser 
      onAddUser = {handleAddUser}
      />

    <UserList
      users={users}
    />

  </>
}
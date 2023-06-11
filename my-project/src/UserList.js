import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
function UserList() {
    const [listOfUsers, setListOfUsers] = useState([]);
  
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          setListOfUsers(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  
    return (
      <div>
        {listOfUsers.map(user => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
  
  export default UserList;
  
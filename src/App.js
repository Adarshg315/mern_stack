import React, {useState, useEffect} from 'react'
import axios from 'axios';

const App = () => {
    //eslint-disable-next-line 
    const [users, setUsers] = useState(null);
    //eslint-disable-next-line 
    const [username, setUsername] = useState('')
    //eslint-disable-next-line 
    const [email, setEmail] = useState('')
    useEffect(() => {
        axios.get('/api/users')
            .then(users => setUsers(users))
            .catch(err => console.log(err))
    }, [])

    const submitForm = () => {
        if(username === '') {
            alert('Please fill the username field');
            return;
        }
        if(email === '') {
            alert('Please fill the email field');
            return;
        }
        axios.post('/api/users', {
            username: username,
            email: email
        })
        .then(() => {
            alert('Account created successfully')},
            window.location.reload()
        )
        .catch(() => alert('Could not creat account. Please try again'))
    }
  
    return (
      <>
          <h1>My Project</h1>
          
            {/* users === null ? ( <p>Loading...</p>) :
             (users.length === 0 ? (<p>No user available</p>) : (
                  <h2>Available Users</h2> */}
                  {/* <ol>
                      users.map((user, index) => (
                          <li key={index}>
                              Name: {user.name} - Email: {user.email}
                          </li>
                      ))
                  </ol> */}
          <form onSubmit={submitForm}>
              <input type='text' placeholder='Enter your username'/>
              <input type='text' placeholder='Enter your email address'/>
              <input type='submit'/>
          </form>
      </>
  )
}
export default App

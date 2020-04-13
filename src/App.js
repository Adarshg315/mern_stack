import React, {useState, useEffect} from 'react'
import axios from 'axios';

const App = () => {
    const [users, setUsers] = useState(null);
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    useEffect(() => {
        axios.get('api/users')
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
      </>
  )
}
export default App

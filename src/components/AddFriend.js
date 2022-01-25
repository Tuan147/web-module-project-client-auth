import React, { useState } from "react";
import axios from 'axios';

const initCredentials = {
        id: 0,
        name: '',
        age: 0,
        email: ''
};

const AddFriend = (props) => {
    const [credentials, setCredentials] = useState(initCredentials)

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const add = () => {
        const token = localStorage.getItem('token');
        axios.post('http://localhost:9000/api/friends', credentials, {headers: {
            authorization: token
        }})
            .then(res => {
                setCredentials(res.data)
            })
            .catch(err => console.log(err))
    };

    return (
        <div className="add-friend">
            <form onSubmit={add}>
                <label> Friend Name
                    <input 
                        type='text'
                        name='name' 
                        value={credentials.value}
                        onChange={handleChange}
                    />
                </label>
                <label> Friend Email
                    <input 
                        type='email'
                        name='email'
                        value={credentials.email}
                        onChange={handleChange}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )

}

export default AddFriend;
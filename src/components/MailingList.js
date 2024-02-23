import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './MailingList.css';

function MailingList() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        setError('');
        setSubmitted(true);
        // Send data to server/API
        const url = 'https://docs.google.com/forms/d/e/1FAIpQLSczLwPCI62d7XgnOEkIQo7__Q8hO3TiW3MMH6K0wIKyna50aw/formResponse';
        const data = new FormData();
        data.append('entry.1386355655', email);

        fetch(url, {
            method: 'POST',
            body: data,
            mode: 'no-cors' // 'cors' by default
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.error(error);
        });
    };

    return (
        <div className="signup-form">
            {/* <h2>Join Our Mailing List</h2> */}
            <form onSubmit={handleSubmit} className='sign-up'>
                <TextField 
                    label="Email" 
                    variant="standard" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="email-input"
                    error={!!error}
                    helperText={error}
                    type='text'
                    name='entry.1386355655'
                />
                <Button variant="contained" color="primary" type="submit" className="submit-button">
                    Sign Up
                </Button>
            </form>
            {submitted && <p className="success-message">Thank you for signing up!</p>}
        </div>
    );
}

export default MailingList;

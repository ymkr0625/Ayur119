
import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
    const [fullName, setFullName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registrationStatus, setrgistrationStatus]=useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8084/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fullName, mobileNumber, email, password }),
            });

            const data = await response.json();
            console.log('Server Response:', data);

            if (response.ok) {
                setrgistrationStatus('Registration failed.');
            } else {
               const error=await response.json();
               setrgistrationStatus(error);
            }
        } catch (error) {
            console.error('Error:',error);
            setrgistrationStatus('Registration successful.');
        }
    };

    return (
        <div>
            <h2>Registration Form</h2>
             <form onSubmit={handleSubmit}>
                <label>Full Name:</label>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />

                <label>Mobile Number:</label>
                <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />

                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Register</button>
                {registrationStatus && <div>{registrationStatus}</div>}
            </form>
        </div>
    );
};

export default RegistrationForm;

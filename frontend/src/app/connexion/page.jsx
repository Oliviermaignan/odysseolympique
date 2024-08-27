'use client'
import Logo from "../components/Logo";
import { useState } from 'react';
import './page.css'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.inputEmail.value;
        const password = e.target.inputPassword.value;

        const loginAPIURL = process.env.NEXT_PUBLIC_API_LOGIN + 'api/login'

        const response = await fetch(loginAPIURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });

        const data = await response.json();
        console.log(data);
        
        if (data.status) {
            console.log('Connexion réussie:', data);
            // Rediriger ou gérer la connexion
        } else {
            console.error('Erreur de connexion:', data);
        }
    };
    return (
        <>
            <Logo />
            <h2 className="text-center pt-2 pb-2 pt-md-3 pb-md-3">Connexion:</h2>

            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
                <label htmlFor="inputEmail" className="d-flex w-50 input-size" >Email :</label>
                <input type="text" id="inputEmail" placeholder="email@example.com" className="input-bgc-and-border rounded-pill px-3 py-2 w-75 input-size"/>
                <label htmlFor="inputPassword" className="d-flex w-50 input-size">Mot de passe :</label>
                <input type="password" id="inputPassword" placeholder="Votre mot de passe" className="input-bgc-and-border rounded-pill px-3 py-2 w-75 input-size"/>
                <a href="" className="d-flex justify-content-center pt-3 text-center">Vous n'avez pas de compte ? Inscrivez-vous!</a>

                <div className="d-flex w-50 input-size justify-content-end">
                    <button type="submit" className="btn connexion-btn mt-4 py-2 rounded-pill text-white fw-semibold">Connexion</button>
                </div>
            </form>

        </>
    );
}

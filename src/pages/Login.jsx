import React, { useEffect } from 'react';

import { auth, firebaseUi, autorization } from '../firebase';

const Login = () => {

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            if (!authUser) {
                firebaseUi.start("#firebase-auth-container", {
                    signInSuccessUrl: '/',
                    callbacks: {
                        signInSuccessWithAuthResult: (AuthResult, redirectUrl) => {
                            setAutenticado(true);
                            console.log('is autenticado con', autorization.currentUser.email);
                            setUser(autorization.currentUser.email);
                            return false;
                        }
                    },
                    signInOptions: [
                        {
                            provider: autorization.EmailAuthProvider.PROVIDER_ID
                        }
                    ],
                });
            }
        })
    }, []);

    return <div id="firebase-auth-container"></div>
}

export default Login;
import React, { useState } from 'react';
import {signInWithGoogle, signOut, useAuthState} from '../utilities/firebase';
import Button from "@mui/material/Button";

const LoginPage = () => {

    const login = () => {
        signInWithGoogle();
      };
    const logout = () => {
        signOut();
    };

    return (
        <div>
            <Button onClick={login}>
              Login
            </Button>
        </div>
    );
}

export default LoginPage;

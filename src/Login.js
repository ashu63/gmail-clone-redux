import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth, provider } from './firebase'
import './Login.css'

function Login() {
    const dispatch = useDispatch()

    const signIn = () => {
        auth.signInWithPopup(provider).then(({user}) => {
            dispatch(
                login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL,
                })
            )
        })
        .catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn.macrumors.com/article-new/2017/06/gmail-logo.jpg?retina" alt=""/>
                <Button variant="contained" color="primary" onClick={signIn}>Sign In</Button>
            </div>
        </div>
    )
}

export default Login

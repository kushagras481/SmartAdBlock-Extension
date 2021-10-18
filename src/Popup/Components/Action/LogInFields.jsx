import React from 'react'

import '../../Styles/Components/LogInFieldsStyles.scss'

import { 
    useForm 
} from 'react-hook-form'


import { URL } from '../../../Constants/URLEnums'

import {
    setAuthenticated
} from '../../../Background/Redux/Actions/User'

import {
    signInError
} from '../../../Background/Redux/Actions/LogIn'

import { useSelector, useDispatch } from 'react-redux'

function LogInFields(props){
    const { register, formState: { errors }, handleSubmit } = useForm()

    const dispatch = useDispatch()

    var authErrorMessage = ''

    function formActions(data){
        signin(data)
    }

    async function signin(data){
        let email = data.email
        let password = data.password

        console.log(email) 
        console.log(password)

        dispatch(setAuthenticated(true))

        /*try {
            const user = await Auth.signIn(email, password)
            dispatch(setAuthenticated(true))
        } catch (error) {
            switch(error.code){
                case 'NotAuthorizedException':
                    authErrorMessage = 'Invalid email or password'
                    break
                case 'UserNotFoundException':
                    authErrorMessage = 'Invalid email'
                    break
                default:
                    authErrorMessage = 'Unknown error during log in'
                    break
            }
            dispatch(signInError(authErrorMessage))
        }*/
    }
    
    function forgotPassword(){
        let url = URL.BASE_URL + URL.FORGOT_PASSWORD_EXT

        window.open(
            url,
            '_blank'
        )
    }

    function signUp(){
        let url = URL.BASE_URL + URL.SIGNUP_EXT
        
        window.open(
            url,
            '_blank'
        )
    }

    return (
        <div id='login-section'>
            <div id='login-components'>
                <div id='login-fields-section'>
                    <div id='login-title'>Log in</div>
                    <div id='login-form-section'>
                        <form>
                            <input class='input-field credential-input-field email-input-field' 
                                type="text" name="email" placeholder="email" 
                                {
                                    ...register('email',{ 
                                        required: true,
                                        maxLength: 320, 
                                        pattern: /^(?=[a-zA-Z0-9._]{5,20}$)(?!.*[_.]{2})[^_.].*[^_.]$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                    })
                                }
                            /><br/>
                            <input class='input-field credential-input-field password-input-field'
                                type="password" name="password" placeholder="password"
                                {
                                    ...register('password',{ 
                                        required: true,
                                        minLength: 8,
                                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                                    })
                                }
                            /><br/>
                            {(errors.email?.type === "required" || errors.password?.type === "required") && <p id='error-text' style={{padding: 0, margin: '0.25rem 0rem'}}>*please enter your credentials</p>}
                            {(!(errors.email?.type === "required" || errors.password?.type === "required") && (errors.email?.type === "maxLength" || errors.email?.type === "pattern" || errors.password?.type === "minLength" || errors.password?.type === "pattern")) && <p id='error-text' style={{padding: 0, margin: '0.25rem 0rem'}}>*invalid email or password</p>}
                            <div id='signin-button-section'>
                                <button id='signin-button' class='action-button' onClick={handleSubmit(formActions)}>Sign in</button>
                            </div>
                        </form>
                        <div id='forgot-password-section'>
                            <button id='forget-password-button' onClick={forgotPassword}>Forgot password?</button>
                        </div>
                        <div id='question-section'>
                            <p id='question-phrase'>Not registered?</p>
                        </div>
                        <div id='signup-button-section'>
                            <button id='signup-button' class='action-button' onClick={signUp}>Create account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogInFields
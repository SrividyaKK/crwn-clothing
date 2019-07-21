import React from 'react';
import SignIn from '../../components/SignIn/SignIn';

import './SignInSignUp.scss';
import SignUp from '../../components/SignUp/SignUp';

const SignInSignUpPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    );
}

export default SignInSignUpPage;
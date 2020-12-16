import { PersonalVideo } from '@material-ui/icons'
import React from 'react'
import { Confirm } from '../comps/register/Confirm'
import { FormPersonalDetails } from '../comps/register/FormPersonalDetails'
import { UserForm } from '../comps/register/UserForm'
import HowToRegIcon from '@material-ui/icons/HowToReg';
export default function Register() {
    return (
        <>
            <div style={{ marginTop: '5%' }}><HowToRegIcon fontSize="large" /></div>
            <h2>Registration Form</h2>
            <UserForm />
        </>
    )
}
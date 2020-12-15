import { PersonalVideo } from '@material-ui/icons'
import React from 'react'
import { Confirm } from '../comps/register/Confirm'
import { FormPersonalDetails } from '../comps/register/FormPersonalDetails'
import { UserForm } from '../comps/register/UserForm'
export default function Register() {
    return (
        <>
            <h4>Registration Form</h4>
            <UserForm />
        </>
    )
}
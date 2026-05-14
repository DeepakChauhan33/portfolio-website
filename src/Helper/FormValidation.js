import { useState } from "react";







export const validateName = (name) => {

    let nameError = "";
    const pattern = /^[a-zA-Z\s]+$/;


    if (name.trim().length < 3) {
        nameError = "Please enter at least 3 characters";
    } else if (!pattern.test(name.trim())) {
        nameError = "Only letters and spaces allowed";
    }

    return nameError;

}



export const validateEmail = (email) => {

    let emailError = ""
    const pattern = /^\S+@\S+\.\S+$/;

    if (!pattern.test(email.trim())) {
        emailError = "Enter a valid email"
    }

    return emailError;
}



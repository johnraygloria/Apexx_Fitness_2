import {useState} from "react";

interface FormRegisterData {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    date_birth: string;
    gender: string;
    contact_name:string;
    relationship: string;
    password: string;
    password_confirmation: string;
}
interface ErrorsFormRegisterData{
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    date_birth: string;
    gender: string;
    contact_name:string;
    relationship: string;
    password: string;
    password_confirmation: string;
}

export const useRegisterForm = () => {
   const[registerForm, setRegisterForm] = useState<FormRegisterData>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    date_birth: "",
    gender: "",
    contact_name:"",
    relationship:"",
    password:"",
    password_confirmation:""
   });
   
   const[errorsRegisterForm, setErrorsRegisterForm] = useState<ErrorsFormRegisterData>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    date_birth: "",
    gender: "",
    contact_name:"",
    relationship:"",
    password:"",
    password_confirmation:""
   });

const handleChangeRegisterForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {id, value} = e.target;
    setRegisterForm(prev => ({
        ...prev,
        [id]: value
    }));

    if(errorsRegisterForm[id as keyof typeof errorsRegisterForm]){
        setErrorsRegisterForm(prev => ({
            ...prev,
            [id]: ""
        }));
    }
};
    const handleSubmitRegisterForm = (e: React.FormEvent) => {
        e.preventDefault();
        
        const newErrorsRegisterForm = {
            first_name: registerForm.first_name? "" : "First Name is required",
            last_name: registerForm.last_name? "" : "Last Name is required",
            email: registerForm.email? "" : "Email is required",
            phone: registerForm.phone? "" : "Phone is required",
            date_birth: registerForm.date_birth? "" : "Date Birth is required",
            gender: registerForm.gender? "" : "Gender is required",
            contact_name: registerForm.contact_name? "" : "Contact Name is required",
            relationship: registerForm.relationship? "" : "Relationship is required",
            password: registerForm.password? "" : "Password is required", 
            password_confirmation: registerForm.password_confirmation? "" : "Password Confirmation is required"
        };
        setErrorsRegisterForm(newErrorsRegisterForm);

        if(!newErrorsRegisterForm.first_name && !newErrorsRegisterForm.last_name && !newErrorsRegisterForm.email &&
            !newErrorsRegisterForm.phone && !newErrorsRegisterForm.date_birth && !newErrorsRegisterForm.gender &&
            !newErrorsRegisterForm.contact_name && !newErrorsRegisterForm.relationship && !newErrorsRegisterForm.password && !newErrorsRegisterForm.password_confirmation){
           console.log("Register attempt with:", registerForm);
           return true;
        }

        return false;
    };
    return {
        registerForm,
        errorsRegisterForm,
        handleChangeRegisterForm,
        handleSubmitRegisterForm
    }
   }

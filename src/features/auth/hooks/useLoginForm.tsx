import { useState } from "react";

interface FormData {
  username: string;
  password: string;
}

interface FormErrors {
  username: string;
  password: string;
}

export const useLoginForm = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: ""
  });
  
  const [errors, setErrors] = useState<FormErrors>({
    username: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    if (errors[id as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [id]: ""
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      username: formData.username ? "" : "Username is required",
      password: formData.password ? "" : "Password is required"
    };
    
    setErrors(newErrors);
    
    if (!newErrors.username && !newErrors.password) {
      console.log("Login attempt with:", formData);
      return true;
    }
    
    return false;
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit
  };
};
'use client';
import React, { useState } from "react";
import InputRow from "./InputRow";
import axios from 'axios';

const page = () => {
  // const [formData, setFormData] = useState({
  //   full_name1: "",
  //   email1: "",
  //   phone_number1: "",
  //   level1: "",
  //   department1: "",
  //   semester1: "",
  //   enrollment1: "",
  //   institute1: "",
  //   eventtype: "",
  //   eventName: "",
  // });
  // const [typeofevent, setTypeOfEvent] = useState("solo");

  // const initialRequiredFields = ['eventtype', 'eventName', 'institute1','full_name1', 'email1','phone_number1','level1','department1','semester1','enrollment1'];
  // const [requiredFields, setRequiredFields] = useState([...new Set(initialRequiredFields)]);
  // const [validationErrors, setValidationErrors] = useState({});
  // const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {

  //     const errors = {};
  //     requiredFields.forEach((field) => {
  //       if (!formData[field]) {
  //         errors[field] = `${field} is required`;
  //       }
  //     });

  //     if (Object.keys(errors).length > 0) {
  //       // If there are errors, you can handle them here (e.g., show error messages)
  //       console.log('Form validation errors:', errors);
  //       setValidationErrors(errors);
  //       return;
  //     }else{
  //       setValidationErrors({})
  //     }
  
  //     setIsSubmitting(true); // Set isSubmitting to true when form is being submitted

  //     const response = await axios.post('api/post', formData);
  //     if (response.status === 200) {
  //       alert(`Thank you for submitting the form!`);
  //       setRegistrationSuccess(true);
  //       setSuccessMessage(response.data.text)
  //       handleReset();
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   finally {
  //     setIsSubmitting(false); // Set isSubmitting back to false after form submission is complete
  //   }
  // };
  // const handleReset = () => {
  //   setFormData({
  //     full_name1: "",
  //     email1: "",
  //     phone_number1: "",
  //     level1: "",
  //     department1: "",
  //     semester1: "",
  //     enrollment1: "",
  //     institute1: "",
  //     eventtype: "",
  //     eventName: "",
  //   });
  // };
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name == "eventtype" && value == "solo") {
  //     setTypeOfEvent("solo")
  //   }
  //   if (name == "eventtype" && value == "group") {
  //     setTypeOfEvent("group")
  //   }
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));

  //   setRequiredFields([...new Set([...requiredFields, name])]);
  // };
  // const renderInputRows = () => {
  //   const { eventName } = formData;
  //   if (!eventName) {
  //     return null;
  //   }
  //   const participantCount = parseInt(eventName.split(" ").pop());
  //   //console.log(participantCount)
  //   const inputRows = [];
  //   // for (let i = 1; i <= participantCount; i++) {
  //   //   inputRows.push(
  //   //     <InputRow
  //   //       key={i}
  //   //       formData={formData}
  //   //       participantIndex={i}
  //   //       handleChange={handleChange}
  //   //     />
  //   //   );
  //   // }
  //   let i = 1
  //   do {
  //     inputRows.push(
  //       <InputRow
  //         key={i}
  //         formData={formData}
  //         participantIndex={i}
  //         handleChange={handleChange}
  //         validationErrors={validationErrors}
  //       />
  //     );
  //     i++
  //   } while (i <= participantCount)
  //   return inputRows;
  // };

  // const [isChecked, setIsChecked] = useState(false);
  // const [registrationSuccess, setRegistrationSuccess] = useState(false);
  // const [successmessage, setSuccessMessage] = useState("")

  // const handleRadioButtonChange = (event) => {
  //   console.log(event.target.checked)
  //   setIsChecked(event.target.checked);
  // };

  return (
    <>
      <h1 className="text-red-500">Registration Closed</h1>
    </>
  );
};

export default page;

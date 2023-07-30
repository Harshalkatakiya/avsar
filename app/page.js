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
      <div>
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <div className="w-full  mx-auto min-h-[1000px]">
            <h1 className="text-red-500">Registration Closed</h1>
            {/* <div>
              <div className="bg-white text-black  shadow-lg p-4 px-4 md:p-8 mb-2">
                <div className="text-4xl font-bold">
                  Atmiya Avsar Event Registration
                </div>
                <div className="text-md font-medium mt-3">
                  Atmiya Avsar Art & Cultural Fest Event Registration
                </div>
                <hr />
              </div>
              {!registrationSuccess ? (<div className="bg-white text-black  shadow-lg p-3 px-3 md:p-6 mb-6">
                Read / Download Event Rules -
                <a href="/AtmiyaAvsarRulesEnglish.pdf" style={{ color: "blue" }}> English</a> |
                <a href="/AtmiyaAvsarRulesGujarati.pdf" style={{ color: "blue" }}> Gujarati</a>
                <div className="text-sm mb-4 mt-2">
                <input
                    id="default-radio-1"
                    type="radio"
                    name="concent"
                    value={true}
                    required={true}
                    className="w-10"
                    checked={isChecked}
                    onChange={handleRadioButtonChange}
                  />{" "}
                  <label htmlFor="default-radio-1" className="text-lg font-normal">
                    I have read the above rules and regulation of the events and I agree to the terms above
                  </label>
                </div>
                <hr />
                {isChecked ?
                  (<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2 mt-2">
                    <div>
                      <select
                        className="h-10 border mt-1  px-4 w-full bg-white text-black"
                        name="eventtype"
                        value={formData.eventtype}
                        onChange={handleChange}
                        required="true"
                      >
                        <optgroup label="Select Event Types">
                          <option value="">Select Event Types</option>
                          <option value="solo">Solo Events</option>
                          <option value="group">Group Events</option>
                        </optgroup>
                      </select>
                      {validationErrors.eventtype && <div className="text-red-600">{validationErrors.eventtype}</div>}
                    </div>
                    <div>
                      <select
                        className="h-10 border mt-1  px-4 w-full bg-white text-black"
                        name="eventName"
                        value={formData.eventName}
                        onChange={handleChange}
                        required="true"
                      >
                        {
                          typeofevent == "solo" ? (<optgroup label="Select Group Event you want to participate">
                            <option value="">Select Solo Event</option>
                            <option value="Debet">Debet</option>
                            <option value="Elocution">Elocution</option>
                            <option value="Gazal-Shayari Kaavya writing">Gazal-Shayari Kaavya writing</option>
                            <option value="Pad-purti">Pad-purti</option>
                            <option value="Quiz">Quiz</option>
                            <option value="Rangoli">Rangoli</option>
                            <option value="Painting">Painting</option>
                            <option value="Poster-making">Poster-making</option>
                            <option value="Collage">Collage</option>
                            <option value="Cartooning">Cartooning</option>
                            <option value="Mehndi">Mehndi</option>
                            <option value="Clay Modeling">Clay Modeling</option>
                            <option value="Sarjanatmak Karigiri">Sarjanatmak Karigiri</option>
                            <option value="Hastakala Hobby">Hastakala Hobby</option>
                            <option value="Spot Photography">Spot Photography</option>
                            <option value="Shastriya Kanthya Sangeet (Hindustani / Karnatak)">Shastriya Kanthya Sangeet (Hindustani / Karnatak)</option>
                            <option value="Shastriya Vadhya Sangeet (Swar Vadya)">Shastriya Vadhya Sangeet (Swar Vadya)</option>
                            <option value="Shastriya Vadhya Sangeet (Tal Vadya)">Shastriya Vadhya Sangeet (Tal Vadya)</option>
                            <option value="Halvu Kanthya Sangeet">Halvu Kanthya Sangeet</option>
                            <option value="Lokgeet">Lokgeet</option>
                            <option value="Bhajan">Bhajan/Prayer</option>
                            <option value="Duha Chhand">Duha Chhand</option>
                            <option value="Western Vocal Solo">Western Vocal Solo</option>
                            <option value="Mono Acting">Mono Acting</option>
                            <option value="Mimicry">Mimicry</option>
                            <option value="Classical Dance">Classical Dance</option>
                            <option value="Story - Telling">Story - Telling</option>
                          </optgroup>) : (<optgroup label="Select Group Event you want to participate">
                            <option value="">Select Group Event</option>
                            <option value="Samuh Geet --Minimum 3 - Max Participant 6">
                              Samuh Geet --Minimum 3 - Max Participant 6
                            </option>
                            <option value="Western Vocal Group-- Minimum 3 - Max Participant 6">
                              Western Vocal Group-- Minimum 3 - Max Participant 6
                            </option>
                            <option value="Mime -- Minimum 3 -Max Participant 6">
                              Mime -- Minimum 3 -Max Participant 6
                            </option>
                            <option value="Skit -- Minimum 3 -Max Participant 6">
                              Skit -- Minimum 3 -Max Participant 6
                            </option>
                            <option value="Folk Dance -- Minimum 8-Max Participant 12">
                              Folk Dance -- Minimum 8-Max Participant 12
                            </option>
                            <option value="Pracheen Raas-- Minimum 8-Max Participant 12">
                              Pracheen Raas-- Minimum 8-Max Participant 12
                            </option>
                            <option value="Installation -- Max Participant 4">
                              Installation -- Max Participant 4
                            </option>
                          </optgroup>)
                        }
                      </select>
                      {validationErrors.eventName && <div className="text-red-600">{validationErrors.eventName}</div>}
                    </div>
                  </div>) : (<></>)}
                <hr className="mt-3 mb-3" />
                {renderInputRows()}
                <hr className="mt-3" />
                {/* Add more students here */}
                {isChecked ?
                  (<div className="text-right mt-5">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  mr-2"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                    <button
                      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 "
                      onClick={handleReset}
                    >
                      Reset
                    </button>
                  </div>) : (<></>)}
              </div>) : (
                <div dangerouslySetInnerHTML={{ __html: successmessage }} className="bg-white shadow-lg p-3 px-3 md:p-6 text-red-600 font-bold mb-2">
                </div>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

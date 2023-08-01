import React, { useState, useRef } from "react";
import "./contact.scss";
import Mail from "../../../assets/svg-images/mail.svg";
import Mobile from "../../../assets/svg-images/mobile.svg";
import { ToastContainer, toast } from "react-toastify";
import TextInput from "../InputText";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Contact = ({ mode }) => {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);
  const subjectInputRef = useRef(null);
  const DarkMode = mode === "dark" ? true : false;
  const [formData, setForData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const handleChangeInput = (event) => {

    const { name, value } = event.target;
    console.log({ name })
    console.log({ value })
    setForData((preveState) => ({
      ...preveState,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    console.log(formData)
    if (formData.name === "") {
      toast.error("Name field is required");
      nameInputRef.current.focus();
    } else if (formData.email === "") {
      toast.error("Email field is required");
      emailInputRef.current.focus();
    } else if (formData.message === "") {
      toast.error("Message field is required");
      messageInputRef.current.focus();
    } else if (formData.subject === "") {
      toast.error("Subject field is required");
      subjectInputRef.current.focus();
    } else {
      axios
        .post("https://sheetdb.io/api/v1/nx4edxbfvwm8n", formData)
        .then(() => {
          setForData({
            name: "",
            email: "",
            message: "",
            subject: ""
          });
        })
        .catch((error) => {
          toast.error(error.response.data);
        });

      toast.success(
        `Thanks ${formData.name} for contacting me. I will contact you as soon as possible.`
      );
    }
  };
  return (
    <div
      id="contact"
      className="w-full flex justify-center items-center flex-col qualification container md:w-9/12 relative"
    >
      <ToastContainer />
      {DarkMode && (
        <div className="absolute w-[70%] h-[50%] bottom-0 right-auto gradient-01" />
      )}
      <div className={`md:mt-20 mt-10 head-wrapper ${DarkMode && "dark"}`}>
        <h1 className={`font-semibold title ${DarkMode && "dark"}`}>CONTACT</h1>
      </div>
      <div className="w-full flex md:mt-20 my-10 flex-col md:flex-row content items-center justify-center md:gap-10 gap-5 relative">
        <div
          className={`bg-white rounded-[14px] py-[18px] pl-[23px] pr-[55px] ${DarkMode && "dark"
            } contact-card`}
        >
          <div className="flex  items-center">
            <img src={Mail} alt="" className="h-[40px]" />
            <span className="text-[#323B4C] text-[15px] font-semibold pl-3">
              dharakachhadiya.work@gmail.com

            </span>
          </div>
        </div>
        <div
          className={`bg-white rounded-[14px] py-[18px] pl-[23px] pr-[155px] ${DarkMode && "dark"
            } contact-card`}
        >
          <div className="flex  items-center">
            <img src={Mobile} alt="" className="h-[40px]" />
            <span className="text-[#323B4C] text-[15px] font-semibold pl-3">
              +91 9409498003
            </span>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row md:gap-0 gap-10 flex-col w-full my-20 justify-between items-center">
        <div className="md:w-[30%] w-[80%]">
          <TextInput placeholder="NAME"
            name="name"
            onChange={handleChangeInput}
            value={formData.name}
            className="w-full outline-none bg-transparent border-b border-[#323B4C20] hover:border-[#323B4C] focus:border-[#323B4C] pl-1 text-[#323B4C] "
          />
        </div>
        <div className="md:w-[30%] w-[80%]">
          <TextInput name="email" value={formData.email} onChange={handleChangeInput} placeholder="EMAIL ADDRESS" className="w-full outline-none bg-transparent border-b border-[#323B4C20] hover:border-[#323B4C] focus:border-[#323B4C] pl-1 text-[#323B4C] "
          />
        </div>
        <div className="md:w-[30%] w-[80%]">
          <TextInput placeholder="SUBJECT" name="subject" value={formData.subject} onChange={handleChangeInput} className="w-full outline-none bg-transparent border-b border-[#323B4C20] hover:border-[#323B4C] focus:border-[#323B4C] pl-1 text-[#323B4C] "
          />
        </div>
      </div>
      <div className="flex md:w-[100%] w-[80%]">
        <textarea
          placeholder="YOUR MESSAGE HERE"
          rows="5"
          name="message" value={formData.message} onChange={handleChangeInput}
          className="w-full outline-none bg-transparent border-b border-[#323B4C20] hover:border-[#323B4C] focus:border-[#323B4C] pl-1 text-[#323B4C]"
        />
      </div>
      <button
        className="text-[#323B4C] font-semibold md:mt-20 mt-10 mb-20 underline"
        onClick={handleSubmit}
      >
        SUBMIT MESSAGE
      </button>
    </div>
  );
};

export default Contact;

import React, { useState } from "react";

const Form = ({ close, onSubmit }) => {
    const [data,setdata]= useState({
        firstName:"",
        lastName:"",
        gender: "Female",
        language:["English"],
        email:"",

    })
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      <div
        onClick={close}
        className="absolute inset-0 bg-black/40"
      ></div>

      <div className="relative bg-white w-[90%] max-w-md rounded-xl p-6 z-50">

        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-400 text-xl"
        >
          ×
        </button>

        <h2 className="text-xl font-semibold text-[#1B1646] mb-1">
          Get Started Today!
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Fill in your details and take control of your tasks.
        </p>




        <form className="space-y-4">

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 p-3 rounded bg-[#FFF1F3] outline-none text-sm"
              onChange={(e) => setdata({...data,firstName:e.target.value})}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 p-3 rounded bg-[#FFF1F3] outline-none text-sm"
              onChange={(e) => setdata({...data,lastName:e.target.value})}
            />
          </div>

          <div>
            <p className="text-sm mb-2">Gender</p>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 bg-[#FFF1F3] px-4 py-2 rounded text-sm">
                <input type="radio" name="gender" checked = {data.gender === "Male"}
                onChange={()=> setdata({...data, gender: "Male"})} />
                Male
              </label>
              <label className="flex items-center gap-2 bg-[#FFF1F3] px-4 py-2 rounded text-sm">
                <input type="radio" name="gender" checked = {data.gender === "Female"}
                onChange={()=> setdata({...data, gender: "Female"})} />
                Female
              </label>
            </div>
          </div>


          <div>
            <p className="text-sm mb-2">Language</p>
            <div className="space-y-2">
              <label className="flex items-center gap-2 bg-[#FFF1F3] px-4 py-2 rounded text-sm">
                <input type="checkbox" checked = {data.language.includes("English")} onChange={(e) => setdata({ ...data, language: e.target.checked ? [...data.language, "English"] : data.language.filter(lang => lang !== "English") })} />
                English
              </label>
              <label className="flex items-center gap-2 bg-[#FFF1F3] px-4 py-2 rounded text-sm">
                <input type="checkbox" checked = {data.language.includes("Hindi")} onChange={(e) => setdata({ ...data, language: e.target.checked ? [...data.language, "Hindi"] : data.language.filter(lang => lang !== "Hindi") })} />
                Hindi
              </label>
              <label className="flex items-center gap-2 bg-[#FFF1F3] px-4 py-2 rounded text-sm">
                <input type="checkbox" checked = {data.language.includes("Marathi")} onChange={(e) => setdata({ ...data, language: e.target.checked ? [...data.language, "Marathi"] : data.language.filter(lang => lang !== "Marathi") })} />
                Marathi
              </label>
            </div>
          </div>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded bg-[#FFF1F3] outline-none text-sm"
            onChange={(e) => setdata({...data,email:e.target.value})}
          />

          <label className="flex items-center gap-2 text-xs">
            <input type="checkbox" />
            I agree to the <span className="text-[#FF3E54]">terms and conditions</span>
          </label>

          <button type="button" onClick={() => onSubmit(data)}
           className="w-full bg-[#FF3E54] text-white py-3 rounded text-sm font-medium">
            Done
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Form;

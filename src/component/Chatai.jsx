import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Chatsection from "./Chatsection";

function Chatai() {

    const [inputValue, setInputValue] = useState("");
    const [responseData, setResponseData] = useState("");
    const [loading, setLoading] = useState(false)


    // posting data to the backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post("https://nepoai-backend.onrender.com", {
                Message: inputValue

            });

            setResponseData(response.data);
        } catch (error) {
            setResponseData("Error: " + error.message);
        }
        setLoading(false);
        setInputValue("");
    }

    // 

    return (
        <>
            <Chatsection inputValue={inputValue} responseData={responseData} loading={loading} />

            <div className=" absolute w-full bottom-0 ">


                <form onSubmit={handleSubmit} className='flex flex-row justify-center bg-amber-200 items-center border-amber-300 p-6 gap-5 rounded-2xl m-5'>

                    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Type your message here..." className=' text-purple-900 p-4 w-[70%] rounded-2xl border-2 ' />
                    <button type="submit" disabled={inputValue == 0 || ""} className=' bg-black hover:bg-gray-900 active:bg-amber-700 text-white cursor-pointer p-2 rounded-xl'>Send</button>



                </form>


            </div>


        </>
    )
}


export default Chatai;

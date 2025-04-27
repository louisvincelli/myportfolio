import React, { useState } from 'react';


// type Props = {
//     isDarkMode: boolean;
// };

const Contact = () => {
//const Contact: React.FC<Props> = ({ isDarkMode }) => {

    // const [result, setResult] = useState("");

    // const onSubmit = async (event) => {
    //   event.preventDefault();
    //   setResult("Sending....");
    //   const formData = new FormData(event.target);
  
    //   formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
  
    //   const response = await fetch("https://api.web3forms.com/submit", {
    //     method: "POST",
    //     body: formData
    //   });
  
    //   const data = await response.json();
  
    //   if (data.success) {
    //     setResult("Form Submitted Successfully");
    //     event.target.reset();
    //   } else {
    //     console.log("Error", data);
    //     setResult(data.message);
    //   }
    // };

  return (
    //bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]
    <div id='contact' className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
        <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
         Please use the form below if you have any questions, comments, or feedback.
        </p>

        {/* onSubmit={onSubmit} name='name' name='email' name='message'*/}
        <form className='max-w-2xl mx-auto font-Outfit text-black'>
            <div className='grid-auto-fit gap-6 mt-10 mb-8'>
                <input type="text" placeholder='Enter your name' required 
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>
                <input type="email" placeholder='Enter your email' required 
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>
            </div>
            <textarea rows={6} placeholder='Enter your message' required
            className='w-full p-4 outline-non border-[0.5px] border-gray-400 rounded-md bg-white mb-6'></textarea>

            <button type='submit'
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white 
            rounded-full mx-auto hover:bg-black duration-500 font-Outfit'
            >Submit
            {/* <Image src={assets.right_arrow_white} alt='rightarrowwhite' className='w-4' /> */}
            </button>
            {/* <p className='mt-4'>sending...{result}</p> */}
        </form>  
    </div>
  );
};

export default Contact;
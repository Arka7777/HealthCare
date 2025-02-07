import React from 'react'
import { FaRegClock } from "react-icons/fa6";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IoBookmarkSharp } from "react-icons/io5";

export const Five = () => {
  return (
    <div className='pb-[100px]'>
      
      <div className='sec1 px-6 md:px-[100px] py-[70px] flex flex-col md:flex-row gap-[50px] items-center bg-slate-100'>
        <div className='lft w-full md:w-1/2'>
          <img className='w-full' src="https://my-doc.com/wp-content/uploads/2020/04/examining-medical-check-up-singapore.jpg" alt="" />
        </div>
        <div className='rght w-full md:w-1/2'>
          <p className='text-[30px] md:text-[45px] font-bold text-gray-500'>5 Benefits of Regular Medical Checkup</p>
          <p className='mt-[10px] flex gap-[25px]' >
            <p className='flex gap-[5px] text-blue-600'><FaRegClock className='mt-[5px]' />4 MIN READ</p>
            <p className='flex gap-[5px] text-blue-600'><IoCalendarNumberOutline className=' text-[25px]' />7 February 2025</p>
          </p>
        </div>
      </div>

      <div className='sec2 px-6 md:px-[200px] py-[50px] text-[16px] md:text-[20px]'>
        <p>Regular medical check up is crucial for the benefit of general well being and overall health. All you need to do is just visit your doctor regularly. 
          It can be quarterly or twice a year. This would help you to detect any possible or upcoming health issues to be diagnosed and treated properly. 
          Moreover, they also help to diagnose the disease at an early stage, when the chances for treatment and cure are higher and better.
        </p>
        <p className='text-[25px] md:text-[35px] font-semibold mt-[20px]'>
          The Major Benefits of Regular Medical Checkup Are:
        </p>
      </div>

      <div className='sec3 mx-6 md:mx-[150px] px-6 md:px-[50px] py-[30px] hover:shadow-2xl rounded-[10px] shadow-xl bg-blue-400 text-white'>
        <p className='text-[25px] md:text-[30px] font-semibold'>1. Lesser Healthcare Costs</p>
        <p className='mt-[10px] text-[16px] md:text-[20px] mx-[25px]'>
          In the present day world, even the thought of a huge doctor’s bill is sufficient to ignore scheduling a health checkup.
          Well, regular medical check up also helps to save a good amount of money in the long run. This is because it mitigates the risk of potential health ailments that can be life threatening. 
          This also reduces the risks of surgery or any other more serious medical care in near future.
        </p>
      </div>

      <div className='sec4 mx-6 md:mx-[150px] px-6 md:px-[50px] py-[30px] hover:shadow-2xl rounded-[10px] shadow-xl bg-blue-400 text-white mt-[50px]'>
        <p className='text-[25px] md:text-[30px] font-semibold'>2. Blood Test</p>
        <p className='mt-[10px] text-[16px] md:text-[20px] mx-[25px]'>
          When you visit a doctor for regular health care checkup, you can also ask for a blood test.
          This can be helpful to eliminate the risk of various diseases associated with blood as well as conditions that are incorporated into the bloodstream, 
          including cholesterol, diabetes, cancer, high blood pressure, anemia, HIV/AIDS, and coronary artery diseases. Moreover, a blood test also helps the doctor to 
          properly evaluate the functioning of various body organs, like liver, kidneys, heart, and thyroid.
        </p>
      </div>

      <div className='sec5 mx-6 md:mx-[150px] px-6 md:px-[150px] my-[50px]'>
        <p className='text-[25px] md:text-[35px]'>The Main Screenings and Tests to be Included Essentially in a Regular Medical Check Up are:</p>
        <p className='text-[16px] md:text-[20px] hover:text-blue-700 mt-[20px] flex gap-[10px]'>
          <IoBookmarkSharp className='mt-[7px] text-blue-500' />Cholesterol
        </p>
        <p className='text-[16px] md:text-[20px] hover:text-blue-700 mt-[10px] flex gap-[10px]'>
          <IoBookmarkSharp className='mt-[7px] text-blue-500' />Diabetes
        </p>
        <p className='text-[16px] md:text-[20px] hover:text-blue-700 mt-[10px] flex gap-[10px]'>
          <IoBookmarkSharp className='mt-[7px] text-blue-500' />High Blood Pressure
        </p>
        <p className='text-[16px] md:text-[20px] hover:text-blue-700 mt-[10px] flex gap-[10px]'>
          <IoBookmarkSharp className='mt-[7px] text-blue-500' />Body Mass Index (BMI)
        </p>
        <p className='text-[16px] md:text-[20px] hover:text-blue-700 mt-[10px] flex gap-[10px]'>
          <IoBookmarkSharp className='mt-[7px] text-blue-500' />Breast and Cervical Cancer Early Detection
        </p>
        <p className='text-[16px] md:text-[20px] hover:text-blue-700 mt-[10px] flex gap-[10px]'>
          <IoBookmarkSharp className='mt-[7px] text-blue-500' />Colorectal Cancer Screening
        </p>
        <p className='text-[16px] md:text-[20px] hover:text-blue-700 mt-[10px] flex gap-[10px]'>
          <IoBookmarkSharp className='mt-[7px] text-blue-500' />Oral Health for Adults
        </p>
        <p className='text-[16px] md:text-[20px] hover:text-blue-700 mt-[10px] flex gap-[10px]'>
          <IoBookmarkSharp className='mt-[7px] text-blue-500' />Skin Cancer Basic Information
        </p>
        <p className='text-[16px] md:text-[20px] hover:text-blue-700 mt-[10px] flex gap-[10px]'>
          <IoBookmarkSharp className='mt-[7px] text-blue-500' />Prostate Cancer Screening
        </p>
      </div>

      <div className='sec6 mx-6 md:mx-[150px] px-6 md:px-[50px] py-[30px] hover:shadow-2xl rounded-[10px] shadow-xl bg-blue-400 text-white mt-[50px]'>
        <p className='text-[25px] md:text-[30px] font-semibold'>3. Prevention is Better Than Cure</p>
        <p className='mt-[10px] text-[16px] md:text-[20px] mx-[25px]'>
          Regular medical check up make it easier for the doctors to choose a way to diagnose any health
          issue at an early stage. Medical checkups include numerous tests, counting physical examinations and 
          preventive screenings to check the present health condition and detect any risk to the patient’s health.
        </p>
      </div>

      <div className='sec7 mx-6 md:mx-[150px] px-6 md:px-[50px] py-[30px] hover:shadow-2xl rounded-[10px] shadow-xl bg-blue-400 text-white mt-[50px]'>
        <p className='text-[25px] md:text-[30px] font-semibold'>4. Stress Related Diseases</p>
        <p className='mt-[10px] text-[16px] md:text-[20px] mx-[25px]'>
          The fast moving life and hectic work schedules in the present day world can give rise 
          to many health ailments that are highly influenced by the stress levels. 
          Any kind of rise in the stress levels can lead to numerous health problems – not only mental but physical as well.
          Some common ones include hypertension and high blood pressure, weight problems, mental disorders, diabetes, Alzheimer’s disease, depression, asthma, and gastrointestinal problems. 
          Well, regular medical check up, it becomes easier to diagnose and detect these problems way before they turn into deadly or severe. 
          You can also take help from your healthcare provider to manage and control ailments related to stress quite effectively.
        </p>
      </div>

      <div className='sec8 mx-6 md:mx-[150px] px-6 md:px-[50px] py-[30px] hover:shadow-2xl rounded-[10px] shadow-xl bg-blue-400 text-white mt-[50px]'>
        <p className='text-[25px] md:text-[30px] font-semibold'>5. Makes You More Aware About Your Health</p>
        <p className='mt-[10px] text-[16px] md:text-[20px] mx-[25px]'>
          Depending upon the results of your blood tests, the doctor or healthcare provider might warn you about various habits based on your 
          family history, age, and health conditions. For example, many people usually ignore dental health and are completely unaware of oral care. However, 
          if some are aware, they do not practice it completely. You might not be brushing your teeth twice a day. But, with regular reminders from your doctor, you might start doing it.
          This change in your habit reduces the chances of advent of various dental problems.
        </p>
      </div>
    </div>
  )
}

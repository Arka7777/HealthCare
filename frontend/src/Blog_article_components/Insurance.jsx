import React from 'react';
import { IoCalendarNumberOutline } from "react-icons/io5";

const Insurance = () => {
  return (
    <div className='pb-[50px]'>
     
      <div className='px-[5%] py-[50px] shadow-2xl flex flex-col md:flex-row gap-[30px]'>
        <div className='text-white w-full md:w-1/2'>
          <p className='text-[2.5rem] md:text-[3rem] font-bold text-gray-500'>5 Health Insurance Benefits</p>
          <p className='mt-[15px] text-[1.125rem] md:text-[1.25rem] text-blue-700'>
            Health insurance provides financial protection and access to medical care, helping individuals and families manage healthcare costs.
          </p>
          <p className='flex gap-[5px] mt-[15px] text-[0.875rem] md:text-[1rem] text-blue-600'>
            <IoCalendarNumberOutline className='text-[1.5rem]' />
            <p className='ml-[5px]'>Published: 7 February 2025</p>
          </p>
        </div>
        <div className='w-full md:w-1/2'>
          <img className='h-[300px] w-full object-cover transition-transform duration-1000 hover:scale-125 hover:translate-x-2' 
            src="https://cdn-res.keymedia.com/cms/images/us/003/0270_638054224322678056.jpg" alt="Health Insurance" />
        </div>
      </div>

   
      <div className='mx-[5%] mt-[50px] px-[5%] py-[30px] bg-blue-300 shadow-xl hover:shadow-2xl'>
        <p className='text-[1.75rem] md:text-[2rem] font-semibold text-slate-600'>1. Financial Protection</p>
        <p className='text-[1.125rem] mt-[10px] ml-[30px]'>Health insurance reduces the financial burden of medical expenses, covering hospitalization, surgeries, doctor visits, and emergency treatments.</p>
      </div>

     
      <div className='mt-[50px] mx-[5%] px-[5%] py-[30px]'>
        <p className='text-[1.75rem] md:text-[2rem] font-bold text-gray-500'>Some Health Insurance Organisations:</p>
        <div className='mt-[30px] flex flex-wrap justify-center gap-[30px]'>
          <div className='p-[20px] shadow-xl hover:shadow-2xl hover:bg-slate-100 items-center rounded-[10px]'>
            <img className='h-[50px] w-[80px]' src="https://www.adityabirlacapital.com/healthinsurance/assets/img/abhi-logo-new.png" alt="" />
            <p className='mb-[15px]'>Aditya Birla Health Insurance</p>
            <a href="https://www.adityabirlacapital.com/" className='px-[5px] py-[2px] rounded-[15px] bg-blue-500 border-black border-[1px] hover:bg-blue-700 text-white'>Know More</a>
          </div>

          <div className='p-[20px] shadow-xl hover:shadow-2xl hover:bg-slate-100 items-center rounded-[10px]'>
            <img className='h-[50px] w-[150px]' src="https://www.reliancegeneral.co.in/SiteAssets/MidLife/images/logo.webp" alt="" />
            <p className='mb-[15px]'>Reliance General Health Insurance</p>
            <a href="https://www.reliancegeneral.co.in/" className='px-[5px] py-[2px] rounded-[15px] bg-blue-500 border-black border-[1px] hover:bg-blue-700 text-white'>Know More</a>
          </div>

          <div className='p-[20px] shadow-xl hover:shadow-2xl hover:bg-slate-100 items-center rounded-[10px]'>
            <img className='h-[50px] w-[50px]' src="https://www.tataaig.com/logo-min.png" alt="" />
            <p className='mb-[15px]'>TATA AIG Health Insurance</p>
            <a href="https://www.tataaig.com/" className='px-[5px] py-[2px] rounded-[15px] bg-blue-500 border-black border-[1px] hover:bg-blue-700 text-white'>Know More</a>
          </div>

          <div className='p-[20px] shadow-xl hover:shadow-2xl hover:bg-slate-100 items-center rounded-[10px]'>
            <img className='h-[50px] w-[70px]' src="https://www.careinsurance.com/cpproject/rhiclfrontend/assets/public/images/care_health_insurance_logo.svg" alt="" />
            <p className='mb-[15px]'>CARE Health Insurance</p>
            <a href="https://www.careinsurance.com/" className='px-[5px] py-[2px] rounded-[15px] bg-blue-500 border-black border-[1px] hover:bg-blue-700 text-white'>Know More</a>
          </div>

          <div className='p-[20px] shadow-xl hover:shadow-2xl hover:bg-slate-100 items-center rounded-[10px]'>
            <img className='h-[50px] w-[200px]' src="https://th.bing.com/th/id/R.67318ed92e158697e38eca1e5f86d51e?rik=lNZFLOAb%2fDj2Xw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-z6ssiTgIedY%2fTk57XaUk9lI%2fAAAAAAAAAOg%2fXK3wtOeveNg%2fs1600%2ficici_lombard_logo.jpg&ehk=R2cB9%2bFErp%2bOeFhRfZRYp2mSwMbszwWUMQDLV6ZZJu8%3d&risl=&pid=ImgRaw&r=0" alt="" />
            <p className='mb-[15px]'>ICICI Lombard Health Insurance</p>
            <a href="https://www.icicilombard.com/" className='px-[5px] py-[2px] rounded-[15px] bg-blue-500 border-black border-[1px] hover:bg-blue-700 text-white'>Know More</a>
          </div>
        </div>
      </div>

    
      <div className='mx-[5%] mt-[50px] px-[5%] py-[30px] bg-blue-300 shadow-xl hover:shadow-2xl'>
        <p className='text-[1.75rem] md:text-[2rem] font-semibold text-slate-600'>2. Access to Quality Healthcare</p>
        <p className='text-[1.125rem] mt-[10px] ml-[30px]'>
          It provides access to a network of hospitals, specialists, and preventive care, ensuring timely medical treatment without high out-of-pocket costs.
        </p>
      </div>

      <div className='mx-[5%] mt-[50px] px-[5%] py-[30px] bg-blue-300 shadow-xl hover:shadow-2xl'>
        <p className='text-[1.75rem] md:text-[2rem] font-semibold text-slate-600'>3. Coverage for Critical Illnesses</p>
        <p className='text-[1.125rem] mt-[10px] ml-[30px]'>
          Many plans cover serious conditions like cancer, heart disease, and stroke, often offering lump-sum payouts or extended care benefits.
        </p>
      </div>

      <div className='mx-[5%] mt-[50px] px-[5%] py-[30px] bg-blue-300 shadow-xl hover:shadow-2xl'>
        <p className='text-[1.75rem] md:text-[2rem] font-semibold text-slate-600'>4. Prescription Drug & Treatment Coverage</p>
        <p className='text-[1.125rem] mt-[10px] ml-[30px]'>
          Health insurance helps pay for medications, diagnostic tests, and necessary treatments, making healthcare more affordable.
        </p>
      </div>

      <div className='mx-[5%] mt-[50px] px-[5%] py-[30px] bg-blue-300 shadow-xl hover:shadow-2xl'>
        <p className='text-[1.75rem] md:text-[2rem] font-semibold text-slate-600'>5. Preventive & Wellness Benefits</p>
        <p className='text-[1.125rem] mt-[10px] ml-[30px]'>
          Most plans cover routine check-ups, vaccinations, screenings, and mental health support, promoting early disease detection and overall well-being.
        </p>
      </div>
    </div>
  );
}

export default Insurance;

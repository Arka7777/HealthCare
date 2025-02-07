import React from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io';

const MentalHealth = () => {
  return (
    <div className='w-full pb-[50px]'>
      <div className='sec1 pb-10'>
        <img className='h-[300px] md:h-[400px] w-full object-cover' 
             src='https://www.spadreams.com/blog/wp-content/uploads/sites/3/2020/05/The-importance-of-mental-health-1.png' 
             alt='' />
      </div>

  
      <div className='sec2 py-8 px-6 md:px-16'>
        <p className='text-2xl md:text-3xl font-semibold'>The Significance of Mental Health Awareness in Healthcare</p>
        <p className='mt-4 text-base md:text-lg'>
          Mental health awareness plays a crucial role in healthcare, influencing both patient outcomes and the quality of care provided.
        </p>
        
        <p className='mt-6 text-xl md:text-2xl font-semibold'>Understanding Mental Health Awareness</p>
        <p className='mt-4 text-base md:text-lg'>
          Mental health awareness involves recognizing the importance of mental well-being and understanding the signs, symptoms, and challenges associated with it.
        </p>

        <p className='mt-6 text-lg md:text-xl font-semibold'>This awareness can lead to:</p>
        <ul className='mt-4 space-y-2'>
          <li className='flex items-center gap-2'><IoIosCheckmarkCircle className='text-green-500' /> Enhanced detection of mental health disorders.</li>
          <li className='flex items-center gap-2'><IoIosCheckmarkCircle className='text-green-500' /> Improved access to resources.</li>
          <li className='flex items-center gap-2'><IoIosCheckmarkCircle className='text-green-500' /> Greater support networks for individuals.</li>
        </ul>
      </div>

    
      <div className='sec3 py-8 px-6 md:px-16'>
        <p className='text-xl md:text-2xl font-semibold'>Importance of Mental Health in Healthcare Settings</p>
        <p className='mt-4 text-base md:text-lg'>
          Mental health significantly affects physical health, treatment adherence, and overall quality of life. When healthcare providers address mental health concerns, patient outcomes improve.
        </p>

        <p className='mt-6 text-lg md:text-xl font-semibold'>The benefits of prioritizing mental health awareness include:</p>
        <ul className='mt-4 space-y-2'>
          <li className='flex items-center gap-2'><IoIosCheckmarkCircle className='text-green-500' /> Improved patient outcomes and reduced readmissions.</li>
          <li className='flex items-center gap-2'><IoIosCheckmarkCircle className='text-green-500' /> Enhanced patient satisfaction.</li>
          <li className='flex items-center gap-2'><IoIosCheckmarkCircle className='text-green-500' /> Reduction in healthcare costs.</li>
        </ul>
      </div>

      <div className='sec4 py-6 flex justify-center'>
        <img className='h-[250px] md:h-[350px] w-3/4 md:w-1/2 object-cover' 
             src='https://ifamagazine.com/wp-content/uploads/2021/11/mental-health-g014c1aad3_1920-e1683709978740.jpg' 
             alt='' />
      </div>

      <div className='px-6 md:px-16'>
        <p className='text-lg md:text-xl font-semibold'>Mental Health Matters:</p>
        <ul className='mt-4 space-y-3'>
          <li><strong>1. Improves Quality of Life:</strong> A healthy mind helps you enjoy life and build relationships.</li>
          <li><strong>2. Enhances Productivity:</strong> Good mental health boosts focus, creativity, and decision-making.</li>
          <li><strong>3. Reduces Stress & Anxiety:</strong> Managing mental health prevents overwhelming stress.</li>
          <li><strong>4. Supports Physical Health:</strong> Mental health is linked to heart health and longevity.</li>
          <li><strong>5. Prevents Mental Disorders:</strong> Early intervention can reduce the risk of serious issues.</li>
        </ul>

        <p className='mt-6 text-lg italic'>
          Taking care of your mental health is essential. Exercise, mindfulness, therapy, and socializing contribute to better well-being.
        </p>
      </div>
    </div>
  );
};

export default MentalHealth;
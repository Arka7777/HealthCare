import React from 'react'
import { GiMedicines } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';




export default function Search_Medicines() {
    const [selectedAlphabet, setSelectedAlphabet] = useState("ALL"); 
  
    const alphabets = [
      "ALL", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
      "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    ];

  return (
    <div className='m-auto bg-blue-300 pt-[20px]'>
        <p className='uppercase text-[50px] mb-[30px]  font-medium text-blue-700 flex justify-center gap-[15px] shadow-'>Search Medicines <GiMedicines className='mt-[17px] h-[42px] text-blue-700' /></p>
        <div className='pt-[30px]'>
            <div className='justify-center flex gap-[20px] '>
                  <input type="text" placeholder='Find Medicines by their name' className='w-[600px] h-[40px] px-[10px] rounded-[5px] text-[20px] border-2 border-solid border-black shadow-2xl'  />
                  <a href="" className='bg-slate-400 h-[40px] text-center px-[20px] pt-[4px] text-[20px] border-[2px]  hover:bg-slate-600 hover:text-white  rounded-[5px] shadow-2xl'><FaSearch className='mt-[5px]'/></a>
             </div>
             <p className='text-center mt-[10px] text-[25px] font-serif'>OR</p>
             <div className='justify-center flex gap-[20px] mt-[10px]'>
                  <input type="text" placeholder='Write Diesease name to find the medicine' className='w-[600px] h-[40px] px-[10px] rounded-[5px] text-[20px] border-2 border-solid border-black shadow-xl'  />
                  <a href="" className='bg-slate-400 h-[40px] text-center px-[20px] pt-[4px] text-[20px] border-[2px]  hover:bg-slate-600 hover:text-white  rounded-[5px] shadow-xl'><FaSearch className='mt-[5px]'/></a>
             </div>
             <div className="px-[50px] py-[40px]">
                <hr/>
                 <div className="flex justify-center gap-[27px] text-[40px] shadow-2xl">
                  {alphabets.map((letter) => (
                    <a
                    key={letter}
                      href=""
                      onClick={(e) => {
                      e.preventDefault(); 
                      setSelectedAlphabet(letter); 
                  }}
                  className={`hover:text-gray-500 hover:scale-110 transition-transform duration-300 ${
                  selectedAlphabet === letter ? "text-blue-700 font-bold" : ""
              }`}
            >
              {letter}
            </a>
          ))}
        </div>
        <hr />
      </div>

            <p className='text-center mb-[25px] text-[30px] font-thin animate-pulse'>Choose your Diesease to find the correct medicine</p>

      <div className="pt-[30px]  border-black   pb-[50px] h-full bg-blue-200 bg-cover bg-center" style={{backgroundImage: "url('')"}}>
        {selectedAlphabet === "ALL" && (
          <div className="all text-center px-[100px]">
              <div className='flex gap-[120px]'>

                  <div className='firstcol'>
                      <p className='text-[30px] font-semibold mb-[10px]'>A</p>
                      <a href="" className='hover:text-blue-500'>ADHD (2)</a> <br />
                      <a href="" className='hover:text-blue-500'>ADHD (2)</a> <br />
                      <a href="" className='hover:text-blue-500'>ADHD (2)</a><br />
                      <a href="" className='hover:text-blue-500'>ADHD (2)</a><br />
                      <a href="" className='hover:text-blue-500'>ADHD (2)</a><br />
                      <a href="" className='hover:text-blue-500'>ADHD (2)</a>

                      <p className='text-[30px] font-semibold mt-[10px] mb-[10px]'>B</p>
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a> <br />
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a> <br />
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a><br />
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a><br />
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a>

                      <p className='text-[30px] font-semibold mt-[10px] mb-[10px]'>C</p>
                      <a href="" className='hover:text-blue-500'>Cancer Oncology (3)</a> <br />
                      <a href="" className='hover:text-blue-500'>Cancer Oncology (3)</a> <br />
                      <a href="" className='hover:text-blue-500'>Cancer Oncology (3)</a><br />
                      <a href="" className='hover:text-blue-500'>Cancer Oncology (3)</a>

                      <p className='text-[30px] font-semibold mt-[10px] mb-[10px]'>D</p>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>

                      <p className='text-[30px] font-semibold mt-[10px] mb-[10px]'>E</p>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>

                  </div>


                  <div className='secondcol'>
                      <p className='text-[30px] font-semibold mb-[10px]'>F</p>
                      <a href="" className='hover:text-blue-500'>ADHD (2)</a> <br />
                      <a href="" className='hover:text-blue-500'>ADHD (2)</a> <br />
                      <a href="" className='hover:text-blue-500'>ADHD (2)</a><br />
                      <a href="" className='hover:text-blue-500'>ADHD (2)</a><br />
                      <a href="" className='hover:text-blue-500'>ADHD (2)</a>

                      <p className='text-[30px] font-semibold mt-[10px] mb-[10px]'>G</p>
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a> <br />
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a> <br />
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a><br />
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a><br />
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a><br />
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a><br />
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a>

                      <p className='text-[30px] font-semibold mt-[10px] mb-[10px]'>H</p>
                      <a href="" className='hover:text-blue-500'>Cancer Oncology (3)</a> <br />
                      <a href="" className='hover:text-blue-500'>Cancer Oncology (3)</a> <br />
                      <a href="" className='hover:text-blue-500'>Cancer Oncology (3)</a><br />
                      <a href="" className='hover:text-blue-500'>Cancer Oncology (3)</a>

                      <p className='text-[30px] font-semibold mt-[10px] mb-[10px]'>I</p>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>

                      <p className='text-[30px] font-semibold mt-[10px] mb-[10px]'>J</p>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>
                  </div>
                  
                  
                  <div className='thirdcol'>
                      <p className='text-[30px] font-semibold mb-[10px]'>K</p>
                      <a href="" className='hover:text-blue-500'>ADHD (2)</a> <br />
                      <a href="" className='hover:text-blue-500'>ADHD (2)</a> <br />
                      <a href="" className='hover:text-blue-500'>ADHD (2)</a><br />
                      <a href="" className='hover:text-blue-500'>ADHD (2)</a>

                      <p className='text-[30px] font-semibold mt-[10px] mb-[10px]'>L</p>
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a> <br />
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a>

                      <p className='text-[30px] font-semibold mt-[10px] mb-[10px]'>M</p>
                      <a href="" className='hover:text-blue-500'>Cancer Oncology (3)</a> <br />
                      <a href="" className='hover:text-blue-500'>Cancer Oncology (3)</a> <br />
                      <a href="" className='hover:text-blue-500'>Cancer Oncology (3)</a><br />
                      <a href="" className='hover:text-blue-500'>Cancer Oncology (3)</a>

                      <p className='text-[30px] font-semibold mt-[10px] mb-[10px]'>N</p>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>

                      <p className='text-[30px] font-semibold mt-[10px] mb-[10px]'>O</p>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>

                      <p className='text-[30px] font-semibold mt-[10px] mb-[10px]'>P</p>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>

                  </div>

                  
                  <div className='forthcol'>
                      <p className='text-[30px] font-semibold mb-[10px]'>R</p>
                      <a href="" className='hover:text-blue-500'>ADHD (2)</a> <br />
                      <a href="" className='hover:text-blue-500'>ADHD (2)</a> <br />
                      <a href="" className='hover:text-blue-500'>ADHD (2)</a><br />
                      <a href="" className='hover:text-blue-500'>ADHD (2)</a><br />
                      <a href="" className='hover:text-blue-500'>ADHD (2)</a>

                      <p className='text-[30px] font-semibold mt-[10px] mb-[10px]'>S</p>
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a> <br />
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a> <br />
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a><br />
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a><br />
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a>

                      <p className='text-[30px] font-semibold mt-[10px] mb-[10px]'>T</p>
                      <a href="" className='hover:text-blue-500'>Cancer Oncology (3)</a> <br />
                      <a href="" className='hover:text-blue-500'>Cancer Oncology (3)</a> <br />
                      <a href="" className='hover:text-blue-500'>Cancer Oncology (3)</a><br />
                      <a href="" className='hover:text-blue-500'>Cancer Oncology (3)</a>

                      <p className='text-[30px] font-semibold mt-[10px] mb-[10px]'>U</p>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>

                  </div>

                  <div className='fifthcol'>
                      
                      <p className='text-[30px] font-semibold mt-[10px] mb-[10px]'>V</p>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>

                      <p className='text-[30px] font-semibold mt-[10px] mb-[10px]'>W</p>
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a> <br />
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a> <br />
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a><br />
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a><br />
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a><br />
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a><br />
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a>

                      <p className='text-[30px] font-semibold mt-[10px] mb-[10px]'>X</p>
                      <a href="" className='hover:text-blue-500'>Cancer Oncology (3)</a> <br />
                      <a href="" className='hover:text-blue-500'>Cancer Oncology (3)</a> <br />
                      <a href="" className='hover:text-blue-500'>Cancer Oncology (3)</a><br />
                      <a href="" className='hover:text-blue-500'>Cancer Oncology (3)</a>

                      <p className='text-[30px] font-semibold mt-[10px] mb-[10px]'>Y</p>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>

                  </div>

              </div>
          </div>
        )}


        {selectedAlphabet === "A" && (
          <div className="A  text-xl px-[100px]">
              <p className='text-[30px] font-semibold mt-[20px] mb-[40px] ml-[120px]'>A</p>
              <div className='grid grid-cols-4 justify-items-center'>
                       <a href="" className='hover:text-blue-500'>ADHD (2)</a> 
                      <a href="" className='hover:text-blue-500'>ADHD (2)</a> 
                      <a href="" className='hover:text-blue-500'>ADHD (2)</a>
                      <a href="" className='hover:text-blue-500'>ADHD (2)</a>
                      <a href="" className='hover:text-blue-500'>ADHD (2)</a>
                      <a href="" className='hover:text-blue-500'>ADHD (2)</a>

              </div>
          </div>
        )}


        {selectedAlphabet === "B" && (
          <div className="B text-xl px-[100px]">
            <p className='text-[30px] font-semibold mt-[20px] mb-[40px] ml-[120px]'>B</p>
            <div className='grid grid-cols-3 justify-items-center'>
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a> <br />
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a> <br />
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a><br />
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a><br />
                      <a href="" className='hover:text-blue-500'>Bacterial Infections (5)</a>
            </div>
          </div>
        )}


        {selectedAlphabet === "C" && (
          <div className="C text-xl px-[100px]">
            <p className='text-[30px] font-semibold mt-[20px] mb-[40px] ml-[120px]'>C</p>
              <div className='grid grid-cols-3 justify-items-center'>
                      <a href="" className='hover:text-blue-500'>Cancer Oncology (3)</a> <br />
                      <a href="" className='hover:text-blue-500'>Cancer Oncology (3)</a> <br />
                      <a href="" className='hover:text-blue-500'>Cancer Oncology (3)</a><br />
                      <a href="" className='hover:text-blue-500'>Cancer Oncology (3)</a>
          </div>
        </div>
        )}

        

        {selectedAlphabet === "D" && (
          <div className="D text-xl px-[100px]">
              <p className='text-[30px] font-semibold mt-[20px] mb-[40px] ml-[120px]'>D</p>
                <div className='grid grid-cols-3 justify-items-center'>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>
          </div>
        </div>
        )}

        {selectedAlphabet === "E" && (
          <div className="E text-xl px-[100px]">
            <p className='text-[30px] font-semibold mt-[20px] mb-[40px] ml-[120px]'>E</p>
              <div className='grid grid-cols-3 justify-items-center'>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>
              </div>
          </div>
        )}

        {selectedAlphabet === "F" && (
          <div className="F text-xl px-[100px]">
              <p className='text-[30px] font-semibold mt-[20px] mb-[40px] ml-[120px]'>F</p>
                <div className='grid grid-cols-3 justify-items-center'>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>
              </div>
          </div>
        )}

        {selectedAlphabet === "G" && (
          <div className="G text-xl px-[100px]">
                <p className='text-[30px] font-semibold mt-[20px] mb-[40px] ml-[120px]'>G</p>
                  <div className='grid grid-cols-3 justify-items-center'>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>
              </div>
          </div>
        )}

        {selectedAlphabet === "H" && (
          <div className="H text-xl px-[100px]">
              <p className='text-[30px] font-semibold mt-[20px] mb-[40px] ml-[120px]'>H</p>
                <div className='grid grid-cols-3 justify-items-center'>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>
              </div>
          </div>
        )}

        {selectedAlphabet === "I" && (
          <div className="I text-xl px-[100px]">
              <p className='text-[30px] font-semibold mt-[20px] mb-[40px] ml-[120px]'>I</p>
                <div className='grid grid-cols-3 justify-items-center'>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>
              </div>
          </div>
        )}

        {selectedAlphabet === "J" && (
          <div className="J text-xl px-[100px]">
                <p className='text-[30px] font-semibold mt-[20px] mb-[40px] ml-[120px]'>J</p>
                  <div className='grid grid-cols-3 justify-items-center'>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>
              </div>
          </div>
        )}

        {selectedAlphabet === "K" && (
          <div className="K text-xl px-[100px]">
                <p className='text-[30px] font-semibold mt-[20px] mb-[40px] ml-[120px]'>K</p>
                  <div className='grid grid-cols-3 justify-items-center'>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>
              </div>
          </div>
        )}

        {selectedAlphabet === "L" && (
          <div className="L text-xl px-[100px]">
                <p className='text-[30px] font-semibold mt-[20px] mb-[40px] ml-[120px]'>L</p>
                  <div className='grid grid-cols-3 justify-items-center'>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>
              </div>
          </div>
        )}


        {selectedAlphabet === "M" && (
          <div className="M text-xl px-[100px]">
                <p className='text-[30px] font-semibold mt-[20px] mb-[40px] ml-[120px]'>M</p>
                  <div className='grid grid-cols-3 justify-items-center'>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>
              </div>
          </div>
        )}

        {selectedAlphabet === "N" && (
          <div className="N text-xl px-[100px]">
                <p className='text-[30px] font-semibold mt-[20px] mb-[40px] ml-[120px]'>N</p>
                  <div className='grid grid-cols-3 justify-items-center'>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>
              </div>
          </div>
        )}


        {selectedAlphabet === "O" && (
          <div className="O text-xl px-[100px]">
                <p className='text-[30px] font-semibold mt-[20px] mb-[40px] ml-[120px]'>O</p>
                  <div className='grid grid-cols-3 justify-items-center'>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>
              </div>
          </div>
        )}

        {selectedAlphabet === "P" && (
          <div className="P text-xl px-[100px]">
                <p className='text-[30px] font-semibold mt-[20px] mb-[40px] ml-[120px]'>P</p>
                  <div className='grid grid-cols-3 justify-items-center'>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>
              </div>
          </div>
        )}

        {selectedAlphabet === "Q" && (
          <div className="Q text-xl px-[100px]">
                <p className='text-[30px] font-semibold mt-[20px] mb-[40px] ml-[120px]'>Q</p>
                  <div className='grid grid-cols-3 justify-items-center'>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>
              </div>
          </div>
        )}

        {selectedAlphabet === "R" && (
          <div className="R text-xl px-[100px]">
                <p className='text-[30px] font-semibold mt-[20px] mb-[40px] ml-[120px]'>R</p>
                  <div className='grid grid-cols-3 justify-items-center'>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>
                </div>
          </div>
        )}

        {selectedAlphabet === "S" && (
          <div className="S text-xl px-[100px]">
              <p className='text-[30px] font-semibold mt-[20px] mb-[40px] ml-[120px]'>S</p>
                  <div className='grid grid-cols-3 justify-items-center'>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>
              </div>
          </div>
        )}
        
        {selectedAlphabet === "T" && (
          <div className="T text-xl px-[100px]">
                <p className='text-[30px] font-semibold mt-[20px] mb-[40px] ml-[120px]'>T</p>
                  <div className='grid grid-cols-3 justify-items-center'>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>
              </div>
          </div>
        )}

        {selectedAlphabet === "U" && (
          <div className="U text-xl px-[100px]">
                <p className='text-[30px] font-semibold mt-[20px] mb-[40px] ml-[120px]'>U</p>
                  <div className='grid grid-cols-3 justify-items-center'>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>
              </div>
          </div>
        )}

        {selectedAlphabet === "V" && (
          <div className="V text-xl px-[100px]">
              <p className='text-[30px] font-semibold mt-[20px] mb-[40px] ml-[120px]'>V</p>
                <div className='grid grid-cols-3 justify-items-center'>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>
          </div>
          </div>
        )}

        {selectedAlphabet === "W" && (
          <div className="W text-xl px-[100px]">
              <p className='text-[30px] font-semibold mt-[20px] mb-[40px] ml-[120px]'>W</p>
                <div className='grid grid-cols-3 justify-items-center'>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>
          </div>
          </div>
        )}

        {selectedAlphabet === "X" && (
          <div className="X text-xl px-[100px]">
              <p className='text-[30px] font-semibold mt-[20px] mb-[40px] ml-[120px]'>X</p>
                  <div className='grid grid-cols-3 justify-items-center'>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>
              </div>
          </div>
        )}

      {selectedAlphabet === "Y" && (
          <div className="Y text-xl px-[100px]">
              <p className='text-[30px] font-semibold mt-[20px] mb-[40px] ml-[120px]'>Y</p>
                <div className='grid grid-cols-3 justify-items-center'>
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a> <br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a><br />
                      <a href="" className='hover:text-blue-500'>Depression (7)</a>
                </div>
          </div>
        )}
      

      {selectedAlphabet === "Z" && (
          <div className="Z text-xl px-[100px]">
              <p className='text-[30px] text-center'>NO DISEASE FOUND</p>
               
          </div>
        )}


      </div>

      

       
             
        </div>
    </div>
  )
}

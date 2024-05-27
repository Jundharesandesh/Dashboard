import React, { useEffect, useRef } from 'react';
import { Stepper, Step, Button } from "@material-tailwind/react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import { motion } from "framer-motion";


const Connect1 = () => {
  const videoRef = useRef(null);
  let navigate = useNavigate();
const routeChange = () =>{
  let path = `/MedicineDispenser`;
  navigate(path);
}

  useEffect(() => {
    const openCamera = async () => {
      try {
        // Get the user's camera stream
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });

        // Set the stream as the source for the video element
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    openCamera(); // Call the function to open the camera when the component mounts

    // Cleanup function to stop the camera stream when the component unmounts
    return () => {
      if (videoRef.current) {
        const stream = videoRef.current.srcObject;
        if (stream) {
          const tracks = stream.getTracks();
          tracks.forEach(track => track.stop());
        }
      }
    };
  }, []);

  return (
    <div>
      <h2></h2>
      <video ref={videoRef} autoPlay playsInline width="800" height="900" Class="mr-48 rounded-lg mt-8"></video>
      <div class=" absolute m-6 right-14">
       <motion.div
            className="bo"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
    <h4 onClick={routeChange}  class="bg-sky-900 text-white p-2 rounded-lg text-2xl" >Disconnect</h4>
          </motion.div>



      </div>

    </div>
  );
};

export default Connect1;

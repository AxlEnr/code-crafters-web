import React, { useState, useMemo } from "react";
import { motion, px } from "framer-motion";

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const ContactPage = () => {
    return (
        <>
            <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 flex flex-col justify-center items-center h-lvh px-4 text-center ">
                <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
                Contáctanos
                </h2>
                <div className="w-24 h-1.5 mb-5 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mt-3 rounded-full"></div>
                <p className="text-primary max-w-xl mb-10">Estamos disponibles para dudas, cotizaciones o cualquier consulta que deseen realizar:</p>
                
                <div className="space-y-4 text-lg text-gray-700">
                    <div className="flex items-center justify-center gap-3">
                        <FaEnvelope className="text-secondary" />
                        <span style={{ color: 'white' }}>aacodecrafters@gmail.com</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <FaPhoneAlt className="text-secondary" />
                        <span style={{ color: 'white' }}>+52 775 111 1111</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <FaMapMarkerAlt className="text-secondary" />
                        <span style={{ color: 'white' }}> Tulancingo Hidalgo, México</span>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-6 mt-10 text-2xl text-secondary">
    
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="hover:text-secondary/80 transition" />
                    </a>

                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="hover:text-secondary/80 transition" />
                    </a>

                </div>
            </div>
        </>
    );
};

export default ContactPage;
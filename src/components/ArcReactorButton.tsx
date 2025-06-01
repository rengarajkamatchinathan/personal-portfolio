"use client";

import { useState } from 'react';
import Chatbot from './Chatbot';

export default function ArcReactorButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="w-20 h-20 rounded-full flex items-center justify-center relative transition-transform hover:scale-105"
        >
          {/* Arc Reactor Image */}
          <img src="/bot1.gif" alt="Arc Reactor" className="w-full h-full object-cover rounded-full" />
          
          {/* Centered Text */}
          <h1 className="absolute text-white text-[0.5rem] font-bold text-center">
            S.A.R.A.H
          </h1>
        </button>
      )}
      {open && <Chatbot onClose={() => setOpen(false)} />}
    </div>
  );
}

"use client"
import { useState } from 'react';
import {Trash } from 'lucide-react'; 
import BackToHome from "@/components/BackToHome";
import Footer from "@/components/Footer";


function App() {
  const [Password, setPassword] = useState<string>('');
  const [numberAllowed, setNumberAllowed] = useState<boolean>(false);
  const [length, setLength] = useState<number>(8);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  function GeneratePassword(): void {
    let password = '';
    let idx = 0;
    let characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*_+-=[]{}|;:,.<>?';

    if (numberAllowed) {
      characters += '0123456789';
    }

    for (let i = 0; i < length; i++) {
      idx = Math.floor(Math.random() * characters.length);
      password += characters[idx];
    }
    setPassword(password);
  }

  function handleCopy(): void {
    navigator.clipboard
      .writeText(Password)
      .then(() => {
        console.log('Password copied to clipboard');
        setIsCopied(true);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
        setIsCopied(false);
      });
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }

  return (
    <>
      <div className="flex mx-auto max-w-[500px] flex-col justify-center items-center h-screen bg-white rounded-lg">
         <BackToHome className="mb-12"/>
        <h1 className="text-2xl font-semibold mb-1 w-fit mx-auto">
          Password Generator
        </h1>
        <div className="flex flex-row gap-4">
          <div className="bg-white p-6 text-black rounded-lg">
            {/* LENGTH CONTROL */}
            <div className="flex flex-col gap-2 mb-4 w-full">
              <label
                htmlFor="length"
                className="block text-sm font-medium text-gray-700"
              >
                Length:
              </label>

              <div className="flex items-center gap-3">
                {/* Slider */}
                <input
                  type="range"
                  min={8}
                  max={32}
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-500"
                />

                {/* Number Input */}
                <input
                  type="number"
                  min={8}
                  max={32}
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  className="w-14 text-center px-3 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-200 no-spinner"
                />
              </div>
            </div>

            {/* ALLOW NUMBERS */}
            <div className="flex flex-col justify-between mb-4 w-full">
              <label className="block text-sm font-medium text-gray-700">
                Allow Numbers:
              </label>

              <div className="flex flex-row gap-6 mt-4">
                {/* No Button */}
                <button
                  type="button"
                  onClick={() => setNumberAllowed(false)}
                  className={`px-4 py-1 rounded-xl border transition ${
                    !numberAllowed
                      ? 'bg-gray-400 text-black border-gray-300'
                      : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  No
                </button>

                {/* Yes Button */}
                <button
                  type="button"
                  onClick={() => setNumberAllowed(true)}
                  className={`px-4 py-1 rounded-xl border transition ${
                    numberAllowed
                      ? 'bg-gray-400 text-black border-gray-300'
                      : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  Yes
                </button>
              </div>
            </div>

            {/* GENERATE PASSWORD BUTTON AND CLEAR BUTTON */}
            <div className="flex items-center justify-center gap-4 mb-3 mt-8">
              <button
                onClick={GeneratePassword}
                className="rounded-md block text-sm font-medium text-gray-700 py-2 px-3 bg-neutral-200 hover:bg-neutral-300 transition-colors duration-100 ease"
              >
                Generate Password
              </button>
              <button
                onClick={() => setPassword('')}
                className="bg-transparent border-0 p-0 m-0 cursor-pointer"
                aria-label="Clear Password"
              >
                <Trash className='w-5 h-5'  /> 
              </button>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-300 w-full mb-2" />

        <div className="mt-2 mb-2">
          <h2 className="text-xl font-semibold text-gray-800">Generated:</h2>

          <div
            onClick={handleCopy}
            className="relative border border-gray-300 rounded-lg p-4 bg-gray-50 min-h-[100px] w-[400px] cursor-pointer"
          >
            {isCopied && (
              <div className="absolute top-2 right-3 text-green-500 text-sm font-semibold">
                Copied!
              </div>
            )}

            <div className="text-sm text-gray-800 font-mono break-all">
              {Password || ''}
            </div>
          </div>
        </div>
        <Footer/> 
      </div>
    </>
  );
}

export default App;

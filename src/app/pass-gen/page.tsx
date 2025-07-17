"use client"
import { useState } from 'react';
import {Trash } from 'lucide-react'; 
import BackToHome from "@/components/BackToHome";
import Footer from "@/components/Footer";
import CopyBlock from "@/components/CopyBlock";
import { buttonStyles } from '@/styles/styles';

function App() {
  const [ password, setPassword] = useState<string>('');
  const [numberAllowed, setNumberAllowed] = useState<boolean>(true);
  const [length, setLength] = useState<number>(8);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [specialCharsAllowed, setSpecialCharsAllowed] = useState<boolean>(true);
  const [uppercaseAllowed, setUppercaseAllowed] = useState<boolean>(true);

  function GeneratePassword(): void {
    let password = '';
    let idx = 0;
    let characters = 'abcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) {
      characters += '0123456789';
    }

    if (specialCharsAllowed){
      characters += '!@#$%^&*()_+[]{}|;:,.<>?';
    }

    if (uppercaseAllowed) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    for (let i = 0; i < length; i++) {
      idx = Math.floor(Math.random() * characters.length);
      password += characters[idx];
    }
    setPassword(password);
  }

  function handleCopy(): void {
    navigator.clipboard
      .writeText(password)
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
    <div className="p-4 flex flex-col min-h-screen items-center justify-between">
        <div className="flex flex-col items-center justify-center max-w-[500px] w-full gap-3 mt-36">
            <BackToHome className="md:ml-12 mb-12"/>
            <h1 className="text-2xl font-bold mb-2">Password Generator</h1>
            <div className="flex flex-col w-fit items-baseline">
                <label htmlFor="sentenceCount"
                    className="block text-sm font-medium text-gray-700"
                >
                    Password Length
                </label>
                <div className="w-fit flex flex-row gap-2 items-center">
                    <input type="range" min={8} max={32} value={length} 
                        onChange={(e) => setLength(Number(e.target.value))}
                        className="flex-1 h-2 max-w-2xs bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <input type="number" min={8} max={32} value={length} 
                        onChange={(e) => setLength(Number(e.target.value))}
                        className="w-12 text-center px-3 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-200 no-spinner" 
                    />
                </div>
                <div className='flex flex-col mt-4 p-3 rounded-md border-2 border-neutral-200 gap-1 w-full'>
                  
                  <label className="flex items-center justify-between gap-2 w-full">
                    <span className="font-medium">Special Characters</span>
                    <input
                        type="checkbox"
                        checked={specialCharsAllowed}
                        onChange={(e) => setSpecialCharsAllowed(e.target.checked)}
                    />
                </label>
                <label className="flex items-center justify-between gap-2 w-full">
                  <span className="font-medium">Numbers</span>
                    <input
                        type="checkbox"
                        checked={numberAllowed}
                        className='form-checkbox checked:text-green-500 border-gray-300 bg-white checked:border-green-500'
                        onChange={(e) => setNumberAllowed(e.target.checked)}
                    />
                </label>
                <label className="flex items-center justify-between gap-2 w-full">
                  <span className="font-medium">Uppercase</span>
                    <input
                        type="checkbox"
                        checked={uppercaseAllowed}
                        onChange={(e) => setUppercaseAllowed(e.target.checked)}
                    />
                </label>

                <button onClick={GeneratePassword}
                    className={`${buttonStyles.medium} ${buttonStyles.primary} mt-4`}
                >
                    Generate Password
                </button>

                </div>
            </div>
            
            {password && (
                <CopyBlock isCopied={isCopied} content={password} handleCopy={handleCopy} />
            )}
        </div>

        <Footer/>
    </div>
  );
}

export default App;

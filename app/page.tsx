"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import pp from '../public/myImageLol.jpg'
import ThemeToggle from '../components/ui/theme-toggle';
import {motion} from "motion/react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">

        <motion.header 
          initial ={{opacity : 0 , x :-100 }}
          animate ={{opacity : 1 , x : 0}}
          transition={{duration : 0.8}}
        className="flex items-ceter justify-between mb-12">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image src={pp} alt="Profile Picture" className="cursor-pointer transition-all duration-300 hover:scale-110"></Image>
          </div>
          <ThemeToggle/>
        </motion.header>

      </div>
    </div>
  );
}

"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import pp from '../public/myImageLol.jpg'
import ThemeToggle from '../components/ui/theme-toggle';
import {motion} from "motion/react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";




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
      
      
        <main className="space-y-1">

          <section className="space-y-10">

          <motion.div
          initial={{opacity : 0 , x : 100}}
          animate={{opacity : 1 , x : 0}}
          transition={{duration : 0.8}}
          className="space-y-1">
            
            <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent">Vansh  Waldeo</h1>
            
            <p className="text-gray-600 dark:text-gray-400">Full Stack Web-Developer | Solid Foundation in MERN Stack</p>
            <p className="text-gray-600 dark:text-gray-400">Pune,India</p>
          </motion.div>

          <motion.div
          initial={{opacity : 0 , x : -100}}
          animate={{opacity : 1 , x : 0}}
          transition={{duration : 0.8}}
          className="space-y-3">
            <h2 className="text-lg font-semibold">Engineering Scalable and Future-Ready Solutions</h2>
            <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
              I'm a passionate{" "}
              <span className="text-black dark:text-white">Full Stack Developer</span> with solid foundation in the {" "} <span className="text-black dark:text-white">MERN Stack</span>
              , and a growing interest in Modern Technologies and {" "} <span className="text-black dark:text-white">Generative AI</span>. My programming journey began with C++ back in first year of my college , 
              <span className="text-black dark:text-white">
                Python , Kubernates , and microservices architecture
              </span>
              .
            </p>
            <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
              Beyond technical architecture , I am passionate about Devops practices and building resilient systems that can scale effectiverly while maintaining high availablity performance.
            </p>

          </motion.div>
         
          <motion.div
          initial={{opacity : 0 , x : 50}}
          animate={{opacity : 1 , x : 0}}
          transition={{duration : 0.8}}
          className="flex items-center gap-3">
            <Button className="rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 text-white transition-transform hover:scale-105">Resume</Button>


            <Link href="https://github.com/VanshKing30/port" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <FaGithub className="w-6 h-6"/>
            </Link>

            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <FaLinkedin className="w-6 h-6"/>
            </Link>

            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <FaTwitter className="w-6 h-6"/>
            </Link>

            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <SiLeetcode className="w-6 h-6"/>
            </Link>
          </motion.div>


          </section>

          <motion.section
           initial={{opacity : 0 , y : 100}}
           animate={{opacity : 1 , y : 0}}
           transition={{duration : 0.8}}
           className="space-y-8 ">
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block mt-9">Experience</h2>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">July , 2024 - Present</p>
                  <p className="font-medium">System Enginner</p>
                  <p className="text-blue-600 dark:text-blue-400">Company X</p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repudiandae, ratione rem omnis sapiente cupiditate minus ex, impedit deserunt sint consectetur ipsam neque similique nam amet deleniti non fuga aspernatur dolorem. Molestias a esse laborum mollitia! Vitae debitis recusandae praesentium, hic iusto omnis voluptatibus itaque dolore doloribus sunt earum. Aliquid.
              </p>
            </div>

          </motion.section>

          <motion.section
             initial={{opacity : 0 , y : 100}}
             animate={{opacity : 1 , y : 0}}
             transition={{duration : 0.8}}
             className="space-y-8">

              <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Education</h2>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400">May , 2021-2025</p>
                    <p className="font-medium">B.Tech in Computer Science & Engineering</p>
                    <p className="text-blue-600 dark:text-gray-400">Padmabooshan Vasantdada Patil Institute of Technology , Bavdhan , Pune </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400"></p>
              </div>
          </motion.section>


          <motion.section
          initial={{opacity : 0 , y : 100}}
          animate={{opacity : 1 , y : 0}}
          transition={{duration : 0.8}}
          className="space-y-8">

              <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Projects</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image src={pp} alt="project 1" className="rounded-lg mb-4"/>
                      <div className="flex-items-center justify-between">
                        <div>
                          <h3 className="font-medium">OnlyChats</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">ReactJs , Nodejs , WebSockets ,ExpressJs ,  TailwindCss ,</p>
                        </div>
                        <Button variant="ghost" size="icon">Live</Button>
                      </div>
                    
                  </CardContent>
                </Card>

                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image src={pp} alt="project 1" className="rounded-lg mb-4"/>
                      <div className="flex-items-center justify-between">
                        <div>
                          <h3 className="font-medium">Project 1</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Next.js , MySQL , Drizzele</p>
                        </div>
                        <Button variant="ghost" size="icon">+</Button>
                      </div>
                    
                  </CardContent>
                </Card>

                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image src={pp} alt="project 1" className="rounded-lg mb-4"/>
                      <div className="flex-items-center justify-between">
                        <div>
                          <h3 className="font-medium">Project 1</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Next.js , MySQL , Drizzele</p>
                        </div>
                        <Button variant="ghost" size="icon">+</Button>
                      </div>
                    
                  </CardContent>
                </Card>

                
              </div>
                          
            
            
            
            
            
            <p className="text-gray-500">Made with ❤️ by Vansh</p>
            </motion.section>   


          
          
        </main>

      </div>
    
    </div>
  );
}

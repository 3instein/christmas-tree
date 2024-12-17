'use client'

import { Mountains_of_Christmas } from "next/font/google";
import ChristmasTree from "./ChristmasTree";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

const MoC = Mountains_of_Christmas({ weight: "400", subsets: ["latin"] });

const ChristmasOpening = () => {
    const [fade, setFade] = useState(false); // state to trigger fade to white

    // Split the text into two parts: "Merry" and "Christmas"
    const part1 = "Merry";
    const part2 = "Christmas";

    // Function to split text into individual letters
    const splitText = (text) => text.split("");

    // Trigger fade after 4 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setFade(true);
        }, 4000); // 4 seconds

        return () => clearTimeout(timer); // Clear the timer on cleanup
    }, []);

    return (
        <motion.div
            className={`flex items-center justify-center min-h-screen ${fade ? 'bg-white' : ''}`}
            initial={{ opacity: 1 }}
            animate={{ opacity: fade ? 0 : 1 }} // Fade out the content when fade is true
            transition={{ duration: 2 }}
        >
            <div className="flex items-center justify-center space-x-10">
                {/* Animate "Merry" */}
                <div className="flex">
                    {splitText(part1).map((letter, index) => (
                        <motion.span
                            key={index}
                            className={`${MoC.className} text-9xl font-bold`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: index * 0.05,
                                duration: 0.5
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>

                {/* Animate "Christmas" */}
                <div className="flex">
                    {splitText(part2).map((letter, index) => (
                        <motion.span
                            key={index + part1.length} // Ensure unique key for the second part
                            className={`${MoC.className} text-9xl font-bold`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: (index + part1.length) * 0.05,
                                duration: 0.5
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>

                {/* Christmas Tree */}
                <ChristmasTree />
            </div>
        </motion.div>
    );
};

export default ChristmasOpening;

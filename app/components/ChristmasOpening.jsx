'use client'

import { Mountains_of_Christmas } from "next/font/google";
import ChristmasTree from "./ChristmasTree";
import { motion } from "motion/react";

const MoC = Mountains_of_Christmas({ weight: "400", subsets: ["latin"] });
const ChristmasOpening = () => {
    // Split the text into two parts: "Merry" and "Christmas"
    const part1 = "Merry";
    const part2 = "Christmas";

    // Function to split text into individual letters
    const splitText = (text) => text.split("");
    return (
        <>
            <div className="flex">
                {/* Animate "Merry" */}
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

                {/* Add a gap between "Merry" and "Christmas" */}
                <motion.span
                    className="text-9xl font-bold"
                    style={{ width: '20px' }}  // Adjust the gap as needed
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: part1.length * 0.05, duration: 0.5 }}
                >
                    &nbsp;
                </motion.span>

                {/* Animate "Christmas" */}
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
            <ChristmasTree />
        </>
    )
}

export default ChristmasOpening;
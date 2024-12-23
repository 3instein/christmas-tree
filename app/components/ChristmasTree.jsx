import { motion } from "motion/react";

const ChristmasTree = () => {
    return (
        <div className="flex flex-col items-center relative">
            {/* Star */}
            <motion.div
                className="absolute top-[-60px]"
                animate={{
                    opacity: [1, 0.5, 1],  // Shine effect (opacity pulsing)
                    scale: [1, 1.2, 1],    // Shine effect (scale pulsing)
                    rotate: [0, 360]       // Continuous rotation
                }}
                transition={{
                    duration: 1,            // Faster duration for the pulse
                    repeat: Infinity,       // Infinite repeat
                    repeatType: "loop",     // Loop the animation
                    ease: "easeInOut"       // Smooth easing
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="gold"
                    width="40"
                    height="40"
                    className="rotate-45"
                >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            </motion.div>

            {/* Tree Top */}
            <motion.div
                className="w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-green-600 relative"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}  // Shortened duration and delay
            >
                {/* Top Decorations */}
                <motion.span
                    className="block w-4 h-4 bg-red-500 rounded-full absolute left-[5px] top-[30px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}  // Faster decoration animation
                ></motion.span>
                <motion.span
                    className="block w-4 h-4 bg-yellow-500 rounded-full absolute left-[-10px] top-[50px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}  // Faster decoration animation
                ></motion.span>
            </motion.div>

            {/* Tree Middle */}
            <motion.div
                className="w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[120px] border-b-green-500 relative"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}  // Shortened duration and delay
            >
                {/* Middle Decorations */}
                <motion.span
                    className="block w-4 h-4 bg-blue-500 rounded-full absolute left-[5px] top-[30px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 }}  // Faster decoration animation
                ></motion.span>
                <motion.span
                    className="block w-4 h-4 bg-purple-500 rounded-full absolute left-[20px] top-[80px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1 }}  // Faster decoration animation
                ></motion.span>
                <motion.span
                    className="block w-4 h-4 bg-orange-600 rounded-full absolute left-[-20px] top-[100px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.2 }}  // Faster decoration animation
                ></motion.span>
            </motion.div>

            {/* Tree Bottom */}
            <motion.div
                className="w-0 h-0 border-l-[70px] border-l-transparent border-r-[70px] border-r-transparent border-b-[140px] border-b-green-400 relative"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 1.4 }}  // Shortened duration and delay
            >
                {/* Bottom Decorations */}
                <motion.span
                    className="block w-4 h-4 bg-red-500 rounded-full absolute left-[5px] top-[40px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.6 }}  // Faster decoration animation
                ></motion.span>
                <motion.span
                    className="block w-4 h-4 bg-yellow-500 rounded-full absolute left-[-30px] top-[55px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.8 }}  // Faster decoration animation
                ></motion.span>
                <motion.span
                    className="block w-4 h-4 bg-blue-500 rounded-full absolute left-[30px] top-[80px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 2 }}  // Faster decoration animation
                ></motion.span>
            </motion.div>

            {/* Trunk */}
            <motion.div
                className="w-16 h-20 bg-amber-700 mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 2.2 }}  // Shortened duration and delay
            ></motion.div>
        </div>
    );
};

export default ChristmasTree;

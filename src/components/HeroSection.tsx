import { RotatingMask } from './RotatingMask';
import { motion } from 'framer-motion';
import { VerticalLoop } from './VerticalLoop';

// SVG Paths from design
const MASK_1_PATH = "M76.464 3.527L77.598 5.082C86.613 17.341 101.027 24.316 116.189 23.666L118.112 23.584C123.929 23.334 128.513 28.925 126.767 34.550L126.259 36.292C122.251 51.047 125.828 66.602 135.79 78.051L137.053 79.503C140.874 83.895 139.313 90.737 133.964 93.122L132.503 93.796C118.253 99.789 108.231 112.629 105.491 127.284L105.247 129.227C104.335 134.903 97.769 137.982 92.637 135.199L90.940 134.291C77.561 127.127 61.486 127.127 48.108 134.291L46.411 135.200C41.591 137.982 34.956 134.903 33.905 129.227L33.731 127.284C30.817 112.629 20.794 99.789 6.852 93.796L5.084 93.122C-0.000 90.737 -1.827 83.895 2.190 79.503L3.258 78.051C13.374 66.602 16.796 51.047 12.789 36.292L12.281 34.550C10.744 28.925 15.119 23.334 21.056 23.584L22.858 23.666C38.020 24.316 52.503 17.341 61.449 5.082L62.583 3.527C66.015 -1.176 73.032 -1.176 76.464 3.527Z";

const MASK_2_PATH = "M82.3839 5.70893L85.7375 13.0569C86.6568 15.0715 89.216 15.7021 90.9668 14.3453L97.3526 9.39649C103.969 4.48877 113.549 9.29524 113.085 17.6498L112.638 25.7137C112.516 27.9244 114.804 29.6715 116.67 29.2833L124.625 27.8674C132.867 26.4009 139.013 35.3011 134.718 42.4829L130.573 49.4156C129.437 51.6247 130.371 53.7796 132.483 54.4488L140.185 57.1415C148.165 59.4199 149.469 70.1554 142.327 74.5202L135.433 78.7331C133.543 79.8883 133.473 82.5032 134.784 84.0769L140.469 89.8165C146.358 95.7626 142.522 105.874 134.168 106.422L126.105 106.95C123.894 107.159 122.397 109.263 123.045 111.38L125.41 119.103C127.861 127.104 119.762 134.275 112.111 130.88L104.725 127.602C102.701 126.703 100.367 127.927 99.9569 130.103L98.4601 138.04C96.9454 146.262 86.4039 148.851 81.2082 142.29L76.4224 135.958C74.8175 134.48 72.498 134.48 70.8071 135.958L65.7916 142.29C60.5958 148.851 50.0902 146.262 48.5396 138.04L47.0429 130.103C46.6325 127.927 44.6328 126.703 42.3317 127.602L34.889 130.88C27.2377 134.275 19.3758 127.104 21.5893 119.103L24.2414 111.38C24.6027 109.263 23.1056 107.159 20.8945 106.95L12.8317 106.422C4.47811 105.874 0.641503 95.7626 6.53081 89.8165L12.2159 84.0769C13.7745 82.5032 13.4566 79.8883 11.6348 78.7331L4.67273 74.5202C-2.46886 70.1554 -1.16473 59.4199 6.81437 57.1415L14.5167 54.4488C16.6284 53.7796 17.7567 51.6247 16.4266 49.4156L12.2813 42.4829C8.13724 35.3011 14.133 26.4009 22.3745 27.8674L30.5706 29.2833C32.5112 29.6715 34.4838 27.9244 34.3613 25.7137L34.1081 17.6498C33.4508 9.29524 43.0312 4.48877 49.6471 9.39649L56.0329 14.3453C57.7837 15.7021 60.3429 15.0715 61.2622 13.0569L64.7451 5.70893C68.0899 -1.90298 78.9098 -1.90298 82.3839 5.70893Z";

const MASK_3_PATH = "M88.8813 6.94752L99.172 23.1836C104.063 30.3785 111.314 35.6415 119.674 38.065L138.541 44.0295C149.307 46.6617 153.53 59.8596 146.657 68.496L134.612 84.0032C129.276 90.874 126.508 99.714 126.782 108.417L127.402 127.7C127.757 138.896 117.339 146.921 106.154 143.126L87.6709 136.473C79.4803 133.526 70.5192 133.526 62.3286 136.473L43.8459 143.126C33.2979 146.921 22.7574 138.896 22.5971 127.7L23.2172 108.417C24.0622 99.714 20.7231 90.874 15.387 84.0032L3.34274 68.496C-3.52937 59.8596 0.692071 46.6617 11.4588 44.0295L30.3254 38.065C38.685 35.6415 45.9362 30.3785 51.3643 23.1836L61.8675 6.94752C68.2898 -2.31584 81.8327 -2.31584 88.8813 6.94752Z";

export const HeroSection = () => {
    return (
        <div className="w-full h-screen bg-[#6b4c93] overflow-hidden flex items-center justify-center">
            {/* Tablet-specific container matching the design snippet's relative positioning */}
            <div className="w-[667px] h-[384px] relative bg-black/10 rounded-xl outline-dashed outline-1 outline-white/20 overflow-visible">

                {/* Decorative Tagline */}
                <motion.div
                    className="left-[53px] top-[34px] absolute justify-start text-[#8AC926] text-xl font-extrabold font-['Inter']"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    MORE THAN JUST FUN!
                </motion.div>

                {/* Title: ENJOY APPS */}
                <motion.div
                    className="left-[53px] top-[66px] absolute justify-start text-[#FFCA3A] text-4xl font-extrabold font-['Ojuju'] leading-9"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    ENJOY<br />APPS
                </motion.div>

                {/* Title: 25+ */}
                <motion.div
                    className="left-[179px] top-[58px] absolute justify-start text-[#FFCA3A] text-8xl font-extrabold font-['Ojuju'] leading-[86px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    25+
                </motion.div>

                {/* Description Text */}
                <motion.div
                    className="w-80 left-[53px] top-[172px] absolute justify-start text-slate-300 text-sm font-normal font-['Inter'] leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Unlock a world of creative and educational apps — all in one place! Explore dinosaurs, fairy tales, racing, animals, and more. Endless fun for boys and girls!
                </motion.div>

                {/* CTA Button */}
                <motion.button
                    className="w-72 h-14 left-[53px] top-[281px] absolute bg-[#FF595E] rounded-xl shadow-[0px_4px_0px_0px_#C24145] ring-3 ring-offset-0 ring-rose-300 hover:scale-105 active:scale-95 transition-transform"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="text-rose-50 text-3xl font-bold font-['Ojuju'] leading-8">Continue</div>
                </motion.button>

                {/* 
            VERTICAL SCROLLING CONTAINER
            Positioned to match the right side area.
            Height: Full height of the card (384px).
            Clips internal content at the card's boundaries.
        */}
                <div className="absolute left-[430px] top-0 h-full w-[200px] overflow-hidden pointer-events-none rounded-xl">
                    {/* 
                Vertical Loop Component moves content upwards.
            */}
                    <VerticalLoop speed={30} className="w-full">
                        {/* 
                   Seamless Loop Logic:
                   Gap between items is gap-2 (8px).
                   To maintain this spacing between the last item of Set 1 and first item of Set 2,
                   the sum of bottom padding of Set 1 and top padding of Set 2 must equal 8px.
                   So we use py-1 (4px top + 4px bottom = 8px).
                   We remove fixed height to allow auto-calculation.
                */}
                        <div className="flex flex-col gap-2 py-1">

                            {/* Mask 1: Clockwise */}
                            <div className="relative left-[10px] top-[10px]">
                                <div className="w-[140px] h-[137px] relative">
                                    <RotatingMask
                                        imageSrc={`${import.meta.env.BASE_URL}img/img_02.png`}
                                        svgPath={MASK_1_PATH}
                                        width={140}
                                        height={137}
                                        duration={25}
                                        direction="clockwise"
                                        className="relative"
                                    />
                                </div>
                            </div>

                            {/* Mask 2: Counter-Clockwise */}
                            <div className="relative left-[11px] top-[15px]">
                                <div className="w-[147px] h-[146px] relative">
                                    <RotatingMask
                                        imageSrc={`${import.meta.env.BASE_URL}img/img_03.png`}
                                        svgPath={MASK_2_PATH}
                                        width={147}
                                        height={146}
                                        duration={30}
                                        delay={2}
                                        direction="counter-clockwise"
                                        className="relative"
                                    />
                                </div>
                            </div>

                            {/* Mask 3: Clockwise */}
                            <div className="relative left-[9px] top-[20px]">
                                <div className="w-[150px] h-[145px] relative">
                                    <RotatingMask
                                        imageSrc={`${import.meta.env.BASE_URL}img/img_01.png`}
                                        svgPath={MASK_3_PATH}
                                        width={150}
                                        height={145}
                                        duration={20}
                                        delay={1}
                                        direction="clockwise"
                                        className="relative overflow-visible"
                                    />
                                </div>
                            </div>

                        </div>
                    </VerticalLoop>

                    {/* Gradient Fade / Clipping Indicators (Optional, purely visual based on screenshot red lines - hidden in design but logic implies clipping) */}
                    {/* The container overflow-hidden handles the clipping requested. */}
                </div>


                {/* Decorative Elements - Triangles/Shapes - moving at 2x speed */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl">
                    <VerticalLoop speed={60} className="w-full h-full" loopHeight={600}>
                        {/* Container needs height to scroll. They need to be spaced out to loop correctly. 
                     We can put them in a container of similar height to the main loop (e.g. 600px) so they loop clean.
                 */}
                        <div className="h-[600px] w-full relative">
                            <motion.div
                                className="absolute left-[380px] top-[120px] w-[30px] h-[30px] flex items-center justify-center origin-center"
                                initial={{ rotate: 30 }}
                                animate={{ rotate: 390 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            >
                                <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 0L29.435 25.5H0.565L15 0Z" fill="#FFCA3A" />
                                </svg>
                            </motion.div>
                            <motion.div
                                className="absolute right-[50px] top-[180px] w-6 h-6 rounded-full bg-[#8AC926]"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>
                    </VerticalLoop>
                </div>

            </div>
        </div>
    );
};

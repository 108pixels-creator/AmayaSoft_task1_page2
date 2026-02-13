import { motion } from 'framer-motion';
import { type ReactNode, useEffect, useState, useRef } from 'react';

interface VerticalLoopProps {
    children: ReactNode;
    speed?: number; // pixels per second
    className?: string; // for width/height/position
    loopHeight?: number; // Optional: hardcoded height for perfect looping
}

export const VerticalLoop = ({ children, speed = 50, className = "", loopHeight }: VerticalLoopProps) => {
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (loopHeight) {
            setContentHeight(loopHeight);
        } else if (contentRef.current) {
            setContentHeight(contentRef.current.offsetHeight);
        }
    }, [children, loopHeight]);

    // Duration = distance / speed
    const duration = contentHeight > 0 ? contentHeight / speed : 10;

    return (
        <div className={`overflow-hidden relative ${className}`}>
            <motion.div
                className="flex flex-col"
                animate={{ y: [0, -contentHeight] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: duration,
                }}
            // We render children twice: [Set 1][Set 2]
            // Animation moves from 0 to -height of Set 1.
            // At end, it jumps back to 0 (which looks identical to start of Set 2).
            >
                <div ref={contentRef} className="flex flex-col shrink-0">
                    {children}
                </div>
                <div className="flex flex-col shrink-0">
                    {children}
                </div>
            </motion.div>
        </div>
    );
};

import { motion } from 'framer-motion';

interface RotatingMaskProps {
    imageSrc: string;
    svgPath: string;
    width: number;
    height: number;
    className?: string; // Positioning classes
    duration?: number;
    delay?: number;
    direction?: 'clockwise' | 'counter-clockwise';
}

export const RotatingMask = ({
    imageSrc,
    svgPath,
    width,
    height,
    className = '',
    duration = 20,
    delay = 0,
    direction = 'clockwise',
}: RotatingMaskProps) => {
    const rotateTo = direction === 'clockwise' ? 360 : -360;
    // To keep image static, it needs to rotate opposite to the container.
    // If container rotates 360 -> image rotates -360.
    // If container rotates -360 -> image rotates 360.
    const imageRotateTo = -rotateTo;

    return (
        <div className={`absolute ${className}`} style={{ width, height }}>
            <motion.div
                className="relative w-full h-full overflow-hidden flex items-center justify-center origin-center"
                initial={{ rotate: 0 }}
                animate={{ rotate: rotateTo }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: duration,
                    delay: delay,
                }}
                style={{
                    clipPath: `path('${svgPath}')`
                }}
            >
                <motion.img
                    src={imageSrc}
                    alt="Masked content"
                    // Reduced scale from 150% to roughly 110-120% based on feedback
                    className="absolute w-[115%] h-[115%] max-w-none object-cover origin-center"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: imageRotateTo }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: duration,
                        delay: delay,
                    }}
                />
            </motion.div>
        </div>
    );
};

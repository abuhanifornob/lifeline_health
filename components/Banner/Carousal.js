
import React from "react";
import image1 from "../../public/banner2.jpg"
import image2 from "../../public/banner3.jpg"
import image3 from "../../public/bannner1.jpeg"
import ss from "../../styles/Carousal.module.css"
import Image from "next/image";
const Carousal = () => {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
    const colors = [image1, image2, image1, image3];
    const delay = 2500;
    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);
    return (
        <div className={`${ss.slideshow} w-full h-86 mt-3`} data-aos="zoom-in"
            data-aos-offset="500">
            <div
                className={ss.slideshowSlider}
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {colors.map((backgroundColor, index) => (
                    <Image
                        className={`${ss.slide} `}
                        key={index}
                        src={backgroundColor}
                        height={200}
                        width={800}
                    ></Image>
                ))}
            </div>

            <div className={ss.slideshowDots}>
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`${ss.slideshowDot}${index === idx ? " active bg-blue-500" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousal;
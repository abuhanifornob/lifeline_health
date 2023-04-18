import Image from "next/image";

import banner2 from "../../public/banner2.jpg";
import banner3 from "../../public/banner3.jpg";
import banner1 from "../../public/bannner1.jpeg";

const Banner = () => {
    return (
        <>
            <div className="carousel max-w-screen-xl mx-auto rounded-md mt-1">
                <div id="slide1" className="carousel-item relative w-full">
                    <Image height={1000} width={1840} src={banner1} className="w-full h-[70vh] opacity-70" />
                    <div className="absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 top-[50%]">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <Image height={800} width={1200} src={banner2} className="w-full h-[70vh] opacity-70" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[50%]">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <Image height={800} width={1200} src={banner3} className="w-full h-[70vh] opacity-70" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[50%]">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <Image height={800} width={1200} src={banner1} className="w-full h-[70vh] opacity-70" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[50%]">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;

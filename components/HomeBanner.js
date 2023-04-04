import Image from 'next/image';
import Link from 'next/link';
import AnimatedText from 'react-animated-text-content';
import bannewrlogo from "../public/bannerlogo1.png";
import styles from "../styles/Navbar.module.css"

const HomeBanner = () => {
    return (
        
      <div className=" max-w-screen-xl mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 content-center min-h-screen">
        <div className=" self-center">
          
              <AnimatedText
                type="words" // animate words or chars
                animation={{
                  x: '200px',
                  y: '-20px',
                  scale: 1.1,
                  ease: 'ease-in-out',
                }}
                animationType="lights"
                interval={0.06}
                duration={0.8}
                tag="p"
                className={`animated-paragraph text-center lg:text-start text-5xl font-bold flex text-blue-500 mb-4`}
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
              >
                Lifeline Health
              </AnimatedText>

              <h1 className="text-4xl font-bold   text-justify">"Health is Wealth" The Complete Health Solution.We provide <span className="text-blue-500">any</span>  kind of <span className="text-blue-500">Health</span> solution </h1> <br/>
              <Link href={'/'} className="btn btn-primary ">Get Starte</Link>
           
        

        </div>
        <div className="place-self-center">
          <Image src={bannewrlogo} alt="health logo" width={1000} className={styles.animate}/>
        </div>
      </div>
    </div>
    );
};

export default HomeBanner;
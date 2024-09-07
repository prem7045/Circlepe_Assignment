import Image from "next/image";
import localFont from "next/font/local";
import { useState, useEffect, useRef } from 'react';
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [currentDiv, setCurrentDiv] = useState(0);
  const intervalRef = useRef(null); // Ref to store the interval ID

  // Function to reset the interval
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentDiv((prevDiv) => (prevDiv + 1) % 6);
    }, 2000); // 2000 milliseconds = 2 seconds
  };

  // Function to handle clicks and reset the interval
  const handleDocumentClick = () => {
    resetInterval();
    setCurrentDiv((prevDiv) => (prevDiv + 1) % 6);
  };

  // Function to handle keydown events and reset the interval
  const handleKeyDown = (event) => {
    resetInterval();
    if (event.key === 'ArrowRight') {
      setCurrentDiv((prevDiv) => (prevDiv + 1) % 6);
    } else if (event.key === 'ArrowLeft') {
      setCurrentDiv((prevDiv) => (prevDiv - 1 + 6) % 6);
    }
  };

  // Set up the automatic slide change every 2 seconds and add event listeners
  useEffect(() => {
    resetInterval();

    // Add event listeners
    document.addEventListener('click', handleDocumentClick);
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listeners and interval on component unmount
    return () => {
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(intervalRef.current);
    };
  }, []);

  
  return (
    
    <div
    id="main"
        >
    <Head>
        <title>Circlepe Assignmaent</title>
      </Head>

    <div id="slide1" style={{visibility: currentDiv === 0 ? 'visible' : 'hidden',opacity: currentDiv === 0 ? 1 : 0 }}>
      <div className="intro" > 
        
        <div className="ellipse1"></div>
        <div className="rectangle">
          
        </div>
        <div className="progress">
            <div className="progress-bar" style={{height:'22px'}}></div>
            <div className="progress-circle"></div>
          </div>
        <div className="discription1">
          <h1>How does it <span>Work</span> <span>?</span></h1>
           
          <div className="line"></div>
          
          <p>We make it possible in a quick and easy few steps process, takes max 5 mins</p>
        </div>
        
        <Image
          className="slide1-Img"
          src="/slide1.svg"
          alt="Next.js logo"
          width={211}
          height={1079.29} 
        />
        
      </div>
    </div>


    <div id="slide2" style={{visibility: currentDiv === 1? 'visible' : 'hidden' ,opacity: currentDiv === 1 ? 1 : 0}}>
      <div className="intro" > 
        
        <div className="ellipse2"></div>
        <div className="rectangle">
          
        </div>
        <div className="progress">
            <div className="progress-bar" style={{height:'75px'}}></div>
            <div className="progress-circle"></div>
          </div>
        <div className="discription">
          <h1>Step <span>1</span></h1>
           
          <div className="line"></div>
          
          <ul className="slide3-step" >
            <li className="onstep">Tenant selects the property</li>
            <li>Tenant selects flexible rent tenure & corresponding amount</li>
          </ul>
        </div>
        
        <Image
          className="slide2-Img"
          src="/slide2.svg"
          alt="Next.js logo"
          width={211}
          height={1079.29} 
        />

        <Image
          className="arrow1"
          src="/arrow1.svg"
          alt="Next.js logo"
          width={100}
          height={100} 
        />
        
      </div>
    </div>


    <div id="slide3"  style={{visibility: currentDiv === 2 ? 'visible' : 'hidden',opacity: currentDiv === 2 ? 1 : 0 }}>
      <div className="intro" > 
        
        <div className="ellipse3"></div>
        <div className="rectangle"></div>
        <div className="progress">
            <div className="progress-bar" style={{height:'75px'}}></div>
            <div className="progress-circle"></div>
          </div>
        <div className="discription">
          <h1>Step <span>1</span></h1>
           
          <div className="line"></div>
          
          <ul className="slide3-step">
            <li >Tenant selects the property</li>
            <li className="onstep">Tenant selects flexible rent tenure & corresponding amount</li>
          </ul>
        </div>
        
        <Image
          className="slide3-Img"
          src="/slide3.svg"
          alt="Next.js logo"
          width={211}
          height={1079.29} 
        />

        <Image
          className="arrow2"
          src="/arrow2.svg"
          alt="Next.js logo"
          width={100}
          height={100} 
        />
        
      </div>
    </div>


    <div id="slide4" style={{visibility: currentDiv === 3 ? 'visible' : 'hidden' ,opacity: currentDiv === 3 ? 1 : 0}}>
      <div className="intro" > 
        
        <div className="ellipse4"></div>
        <div className="rectangle"></div>
        <div className="progress">
            <div className="progress-bar"style={{height:'123px'}}></div>
            <div className="progress-circle"></div>
          </div>
        <div className="discription">
          <h1>Step <span>2</span></h1>
           
          <div className="line"></div>
          
          <ul className="slide4-step">
            <li className="onstep1">Tenant selects Pay with Circle enabling :</li>
            <li >Zero security deposit move-in </li>
            <li >Reduced rent offer </li>
            <li >3 months salary cover</li>
          </ul>
        </div>
        
        <Image
          className="slide4-Img"
          src="/slide4.svg"
          alt="Next.js logo"
          width={211}
          height={1079.29} 
        />

        <Image
          className="arrow2"
          src="/arrow2.svg"
          alt="Next.js logo"
          width={100}
          height={100} 
        />
        
      </div>
    </div>



    <div id="slide5" style={{visibility: currentDiv === 4 ? 'visible' : 'hidden' ,opacity: currentDiv === 4 ? 1 : 0}}>
      <div className="intro" > 
        
        <div className="ellipse5"></div>
        <div className="rectangle"></div>
        <div className="progress">
            <div className="progress-bar" style={{height:'199px'}}></div>
            <div className="progress-circle"></div>
          </div>
        <div className="discription" id="dis5">
          <h1>Step <span>3</span></h1>
           
          <div className="line"></div>
          
          <ul className="slide4-step">
            <li className="onstep5">Smooth Onboarding for the Tenant begins</li>
          </ul>
        </div>
        
        <Image
          className="slide5-Img"
          src="/slide5.svg"
          alt="Next.js logo"
          width={211}
          height={1079.29} 
        />

        <Image
          className="arrow3"
          src="/arrow3.svg"
          alt="Next.js logo"
          width={100}
          height={100} 
        />
        
      </div>
    </div>


    <div id="slide6" style={{visibility: currentDiv === 5? 'visible' : 'hidden',opacity: currentDiv === 5 ? 1 : 0 }}>
      <div className="intro" > 
        
        <div className="ellipse6"></div>
        <div className="rectangle"></div>
        <div className="progress">
        <div className="progress-bar" style={{height:'277px' ,background:  'rgba(132, 241, 94, 1)'}}></div>
            <div className="progress-circle" id="circle"></div>
          </div>
        <div className="discription" id="dis6">
          <h1>Step <span>4</span></h1>
           
          <div className="line"></div>
          
          <ul className="slide6-step">
            
            
          </ul>
          <ul className="slide6-step">
            <li className="onstep" >Tenant gets approved to move-in :</li>
            <ul>
              <li >Gets Zero-security deposit approval</li>
              <li >Zero cost EMI = Monthly Rent</li>
            </ul>
            
          </ul>
        </div>
        
        <Image
          className="slide6-Img"
          src="/slide6.svg"
          alt="Next.js logo"
          width={211}
          height={1079.29} 
        />

        <Image
          className="arrow6"
          src="/arrow6.svg"
          alt="Next.js logo"
          width={100}
          height={100} 
        />
        
      </div>
    </div>


    </div>
  );
}

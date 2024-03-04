'use client'
import { IoIosArrowUp } from "react-icons/io";
export default function ScrollToTop() {
  return (
    <div>
        <a id="button" className=" flex
        justify-center items-center mx-auto my-auto group !rounded-full bg-white !bg-opacity-30  backdrop-blur-xl"><IoIosArrowUp className="mx-auto my-auto w-20 h-20  group-hover:text-white transition-all fade-in-out" /></a>
        <style jsx>
            {`
                #button {
                    display: inline-block;
                    width: 50px;
                    height: 50px;
                    text-align: center;
                    border-radius: 4px;
                    position: fixed;
                    bottom: 10px;
                    right: 10px;
                    transition: background-color .3s, 
                      opacity .5s, visibility .5s;
                    opacity: 0;
                    visibility: hidden;
                    z-index: 1000;
                  }
                  #button::after {
                    content: "";
                    font-family: FontAwesome;
                    font-weight: normal;
                    font-style: normal;
                    font-size: 2em;
                    line-height: 50px;
                    color: #fff;
                  }
                  #button:hover {
                    cursor: pointer;
                    background-color: #333;
                  }
                  #button:active {
                    background-color: #555;
                  }
                  #button.show {
                    opacity: 1;
                    visibility: visible;
                  }
                  
                  /* Styles for the content section */
                  
                  .content {
                    width: 77%;
                    margin: 50px auto;
                    font-family: 'Merriweather', serif;
                    font-size: 17px;
                    color: #6c767a;
                    line-height: 1.9;
                  }
                  @media (min-width: 500px) {
                    .content {
                      width: 43%;
                    }
                    #button {
                      margin: 30px;
                    }
                  }
                  .content h1 {
                    margin-bottom: -10px;
                    color: #03a9f4;
                    line-height: 1.5;
                  }
                  .content h3 {
                    font-style: italic;
                    color: #96a2a7;
                  }
            `}
        </style>
    </div>
  )
}

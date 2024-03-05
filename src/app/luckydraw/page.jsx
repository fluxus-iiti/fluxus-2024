'use client'
import { useEffect, useState } from 'react';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { db } from '../firebase/config'
const FirestoreExample = () => {
    const [id, setId] = useState(null);
    const [message, setMessage] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading,setloading] = useState(false)
    const submitPhoneNumber = async () => {
        setloading(true)
        try {
            const phoneQuery = query(collection(db, 'users'), where('phoneNumbers', '==', phoneNumber));
            const querySnapshot = await getDocs(phoneQuery);

            if (!querySnapshot.empty) {

                const existingPhoneNumber = querySnapshot.docs[0];
                setId(existingPhoneNumber.id);
                setMessage(`Lucky Draw With The Given Phone Number Already Exists`);
                setloading(false)
            } else {

                const docRef = await addDoc(collection(db, 'users'), {
                    phoneNumbers: phoneNumber
                });
                setId(docRef.id);
                setMessage('Lucky Draw Submitted');
                setloading(false)
            }
        } catch (error) {
            console.error('Error adding phone number: ', error);
            setMessage('Error adding phone number. Please try again.');
            setloading(false)
        }
    };

    return (
        <div className=' !overflow-hidden mx-10'>
             <h1 className='lg:text-6xl text-4xl font-bold text-center my-20'>Lucky Draw</h1>
            <div className="bg"></div>

            <div className="star-field">
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
            </div>
            <div

                className=" relative inline-block text-3xl group  w-full h-screen !overflow-hidden"
            >
                <span className="backdrop-blur-2xl relative z-10 block px-5 py-3 n font-medium leading-tight transition-colors duration-300 ease-out border-2 border-gray-300 rounded-2xl group-hover:text-white !overflow-hidden">
                   
                    
                    <span className=" backdrop-blur-2xl text-white font-BlackHanSans relative flex justify-center items-center !overflow-hidden">
                        
                        <div className='flex flex-col text-center m-20'>
                        <h1 className='font-bold'>Enter Your Phone Number</h1>
                            <input
                                type='phone'
                                className='my-10  p-4  outline-none rounded-md border-2 bg-transparent text-white font-bold text-3xl'
                                value={phoneNumber}
                                placeholder='Phone Number'
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            <button disabled={loading} className='backdrop-blur-2xl bg-transparent   w-fit rounded-md mx-auto p-2 border-2 hover:bg-white hover:bg-opacity-30 transition-all fade-in-out' onClick={submitPhoneNumber}>{loading?"Loading...":"Submit"}</button>
                        </div>
                    </span> 
                    <div className='text-center '>{message}</div>
                    {id && (
                        <div className='text-center'>Lucky Draw Number : <span className='text-red-500'>{id}</span></div>
                    )}
                    
                </span>

            </div>


            <style jsx>
                {`
          .mainBackdrop {
            backdrop-filter: blur(10px);
          }
          .formButton {
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
            border: 1px solid #fff;
          }
          .formButton:hover {
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
            border: 1px solid #fff;
            background-color: #fff;
          }
          .bg {
            background: url(./images/accommodation/bg.jpeg) no-repeat;
            background-size: cover;
            height: 100%;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: -3;
          }
          .bg:before {
            content: "";
            width: 100%;
            height: 100%;
            background: #000;
            position: fixed;
            z-index: -1;
            top: 0;
            left: 0;
            opacity: 0.3;
          }
          @keyframes sf-fly-by-1 {
            from {
              transform: translateZ(-600px);
              opacity: 0.5;
            }
            to {
              transform: translateZ(0);
              opacity: 0.5;
            }
          }
          @keyframes sf-fly-by-2 {
            from {
              transform: translateZ(-1200px);
              opacity: 0.5;
            }
            to {
              transform: translateZ(-600px);
              opacity: 0.5;
            }
          }
          @keyframes sf-fly-by-3 {
            from {
              transform: translateZ(-1800px);
              opacity: 0.5;
            }
            to {
              transform: translateZ(-1200px);
              opacity: 0.5;
            }
          }
          .star-field {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            perspective: 600px;
            -webkit-perspective: 600px;
            z-index: -1;
          }
          .star-field .layer {
            box-shadow: -411px -476px #cccccc, 777px -407px #d4d4d4,
              -387px -477px #fcfcfc, -91px -235px #d4d4d4, 491px -460px #f7f7f7,
              892px -128px #f7f7f7, 758px -277px #ededed, 596px 378px #cccccc,
              647px 423px whitesmoke, 183px 389px #c7c7c7, 524px -237px #f0f0f0,
              679px -535px #e3e3e3, 158px 399px #ededed, 157px 249px #ededed,
              81px -450px #ebebeb, 719px -360px #c2c2c2, -499px 473px #e8e8e8,
              -158px -349px #d4d4d4, 870px -134px #cfcfcf, 446px 404px #c2c2c2,
              440px 490px #d4d4d4, 414px 507px #e6e6e6, -12px 246px #fcfcfc,
              -384px 369px #e3e3e3, 641px -413px #fcfcfc, 822px 516px #dbdbdb,
              449px 132px #c2c2c2, 727px 146px #f7f7f7, -315px -488px #e6e6e6,
              952px -70px #e3e3e3, -869px -29px #dbdbdb, 502px 80px #dedede,
              764px 342px #e0e0e0, -150px -380px #dbdbdb, 654px -426px #e3e3e3,
              -325px -263px #c2c2c2, 755px -447px #c7c7c7, 729px -177px #c2c2c2,
              -682px -391px #e6e6e6, 554px -176px #ededed, -85px -428px #d9d9d9,
              714px 55px #e8e8e8, 359px -285px #cfcfcf, -362px -508px #dedede,
              468px -265px #fcfcfc, 74px -500px #c7c7c7, -514px 383px #dbdbdb,
              730px -92px #cfcfcf, -112px 287px #c9c9c9, -853px 79px #d6d6d6,
              828px 475px #d6d6d6, -681px 13px #fafafa, -176px 209px #f0f0f0,
              758px 457px #fafafa, -383px -454px #ededed, 813px 179px #d1d1d1,
              608px 98px whitesmoke, -860px -65px #c4c4c4, -572px 272px #f7f7f7,
              459px 533px #fcfcfc, 624px -481px #e6e6e6, 790px 477px #dedede,
              731px -403px #ededed, 70px -534px #cccccc, -23px 510px #cfcfcf,
              -652px -237px whitesmoke, -690px 367px #d1d1d1,
              810px 536px #d1d1d1, 774px 293px #c9c9c9, -362px 97px #c2c2c2,
              563px 47px #dedede, 313px 475px #e0e0e0, 839px -491px #e3e3e3,
              -217px 377px #d4d4d4, -581px 239px #c2c2c2, -857px 72px #cccccc,
              -23px 340px #dedede, -837px 246px white, 170px -502px #cfcfcf,
              822px -443px #e0e0e0, 795px 497px #e0e0e0, -814px -337px #cfcfcf,
              206px -339px #f2f2f2, -779px 108px #e6e6e6, 808px 2px #d4d4d4,
              665px 41px #d4d4d4, -564px 64px #cccccc, -380px 74px #cfcfcf,
              -369px -60px #f7f7f7, 47px -495px #e3e3e3, -383px 368px #f7f7f7,
              419px 288px #d1d1d1, -598px -50px #c2c2c2, -833px 187px #c4c4c4,
              378px 325px whitesmoke, -703px 375px #d6d6d6, 392px 520px #d9d9d9,
              -492px -60px #c4c4c4, 759px 288px #ebebeb, 98px -412px #c4c4c4,
              -911px -277px #c9c9c9;
            transform-style: preserve-3d;
            position: absolute;
            top: 50%;
            left: 50%;
            height: 4px;
            width: 4px;
            border-radius: 2px;
          }
          .star-field .layer:nth-child(1) {
            animation: sf-fly-by-1 5s linear infinite;
          }
          .star-field .layer:nth-child(2) {
            animation: sf-fly-by-2 5s linear infinite;
          }
          .star-field .layer:nth-child(3) {
            animation: sf-fly-by-3 5s linear infinite;
          }
        `}
            </style>
        </div>
    );
};

export default FirestoreExample;

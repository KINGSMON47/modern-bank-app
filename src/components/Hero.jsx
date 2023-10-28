import React from 'react';
import style from "../style";
import {discount, robot} from "../assets"
import GetStarted from "./GetStarted.jsx";
import styles from "../style";


const Hero = () =>
    (
        <section className={`flex md:flex-row flex-col ${style.paddingY}`}>
            <div className={`flex-1 ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}>
                    <img src={discount} alt="discount" className={`w-[32px] h-[32px]`}/>
                    <p className={`${style.paragraph} ml-2`}>
                        <span className={`text-white`}>20%</span> Discount For {" "}
                        <span className={`text-white`}> 1 Mounth</span> Account
                    </p>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white
    ss:leading-[100px] leading-[75px]">
                        The Next <br className="sm:block hidden"/>
                        {" "}
                        <span className="text-gradient">Generation
        </span>
                        <br/>
                        {" "}
                    </h1>
                    <div className="ss:flex hidden md:mr-4 mr-0">
                        <GetStarted/>
                    </div>
                </div>
                <h1 className={`font-poppins font-semibold ss:text-[68px] text-[52px] text-white
    ss:leading-[100px] leading-[75px] w-full`}>
                    Payment Method
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Our team of experts uses a methodology to identify
                    the credit cards most likely to fit your needs.
                    We examine annual percentage rates, annual fees.
                </p>
            </div>
            <div className={``}>
                <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
                <div className="absolute z-[0] top-0 pink__gradient w-[40%] h-[37%]" />
                <div className="absolute z-[1] rounded-full bottom-40 white__gradient w-[80%] h-[80%]" />
                <div className="absolute z-[0] bottom-20 right-20 blue__gradient w-[50%] h-[50%]" />
            </div>

            <div className={`ss:hidden ${styles.flexStart}`}>
                <GetStarted/>
            </div>
        </section>
    )


export default Hero;

import React from 'react';
import style from "../style";
import {discount,robot}  from "../assets"

const Hero = () =>
    (
        <section className={`flex md:flex-row flex-col ${style.paddingY}`}>
            <div className={`flex-1 ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`} >
                <div className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}>
                    <img src={discount} alt="discount" className={`w-[32px] h-[32px]`}/>
                    <p className={`${style.paragraph} ml-2`}>
                        <span className={`text-white`}>20%</span> Discount For {" "}
                        <span className={`text-white`}> 1 Mounth</span> Account
                    </p>
                </div>

            </div>

        </section>
    )


export default Hero;

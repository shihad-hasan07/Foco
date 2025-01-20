import React from 'react';
import StyledWrapper from './btnstyle/StyledWrapper'

const SliderDetails = ({ name, details, img }) => {

    return (
        <div>
            <div className="h-[350px] sm:h-[350px] md:h-[500px] bg-black lg:h-[550px]
                xl:h-[600px]">
                <img src={img} className="w-full h-full opacity-70 object-cover" alt="" />
            </div>
            <div className="absolute bottom-7 sm:bottom-9 md:bottom-16 ml-5 sm:ml-7 md:ml-10">

                <p className="text-2xl sm:text-4xl mb-1 sm:mb-3 text-white font-semibold">{name}</p>
                <p className="text-white sm:text-lg opacity-80 mb-1 sm:mb-3 w-80 sm:w-3/4">{details}</p>

                {/* <a href='#' ><button className="hover:bg-yellow-200 hover:text-black text-white border 
                    rounded-xl px-4 py-2 text-base sm:text-xl">Explore more</button></a> */}

                <StyledWrapper>
                    <button className="btn-53">
                        <div className="original">Explore</div>
                        <div className="letters">
                            <span>{name[0]}</span>
                            <span>{name[1]}</span>
                            <span>{name[2]}</span>
                            <span>{name[3]}</span>
                            <span>{name[4]}</span>
                            <span>{name[5]}</span>
                        </div>
                    </button>
                </StyledWrapper>
            </div>
        </div>
    );
};

export default SliderDetails;
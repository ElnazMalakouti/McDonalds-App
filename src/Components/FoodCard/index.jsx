import {FaPlus} from "react-icons/fa"
import {FaMinus} from "react-icons/fa"

const FoodCard = () => {
    return(
        <div className="w-[25%] bg-white rounded flex flex-row gap-3 text-black"> 
            <div className="w-[35%]">
                <img className="w-full h-[6.5rem]" alt="" src="https://restaurant-164lv2uu1-omidfa123.vercel.app/Assets/img/hamburger.png"/>
            </div>       

            <div className="w-[65%] flex gap-2 justify-center items-start flex-col font-[vazir] pl-2">
                <p className="font-[vazirBold]">همبرگر مخصوص</p>
                <p className="text-start font-[vazirdig]">تومان 10000</p>

                <div className="w-full flex justify-between">                    
                    <div className="flex flex-row">
                        <button className="text-[13px] rounded-[0rem .5rem .5rem 0rem] bg-[#9E1010] w-[1.5rem] flex justify-center items-center text-white"><><FaPlus/></></button>
                        <span className="pl-2 pr-2 bg-[#f0f8ff] font-[vazirdig] ">0</span>
                        <button className="text-[13px] bg-[#9E1010] w-[1.5rem] flex justify-center items-center text-white"><><FaMinus/></></button>
                    </div>
                    <div className="font-[vazirdig] flex gap-1">
                        <span>0</span>
                        <span>تومان</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default FoodCard
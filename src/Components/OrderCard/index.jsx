import {MdDone} from "react-icons/md"
import Button from '../Button'

const OrderCard = () => {
    return(
        <div className="w-[27%] h-[45%] p-5 bg-[#F0F8FF] rounded-[1rem] font-[vazirdig] text-black flex flex-col">

            <div className="w-full h-[30%] gap-3 items-center flex flex-col">
                <div className="w-full flex flex-row justify-between">
                    <p>جمع کل سفارشات:</p>
                    <p>0<span> تومان</span></p>
                </div>

                <div className="w-full flex flex-row justify-between">
                    <p>حق سرویس و کارمزد:</p>
                    <p>0<span> تومان</span></p>
                </div>

                <div className="w-full flex flex-row justify-between">
                    <p>تخفیف:</p>
                    <p>0<span> درصد</span></p>
                </div>                
            </div>

            <div className="w-full flex flex-row justify-center items-center mt-2">
                <input className="w-[88%] h-[2.5rem] p-2 text-[15px] outline-none" placeholder="کد تخفیف"/>
                <button className="w-[12%] h-[2.5rem] bg-[#9E1010] rounded-tl-[.25rem] rounded-bl-[.25rem] text-white flex justify-center items-center text-[22px]"><><MdDone/></></button>
            </div>

            <div className="w-full flex flex-row justify-between bg-[#FFC72C] mt-[3rem] p-[.3rem] font-[vazirdig] font-bold">
                <p>مبلغ قابل پرداخت:</p>
                <p>0<span> تومان</span></p>
            </div>

            <div className="w-full mt-4">
                <Button>ثبت سفارش</Button>
            </div>
        </div>
    )
}

export default OrderCard
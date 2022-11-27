import { MdDone } from "react-icons/md"
import Button from '../Button'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import HyperModal from "react-hyper-modal"
import { submitOrder } from "../../redux/reducers/orderReducer/orderReducer"

const OrderCard = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const dispatch = useDispatch()

    const orderlist = useSelector((state) => state.order.orderList)
    const foodlist = useSelector((state) => state.food.foodList)

    const [totalPrice, setTotalPrice] = useState(0)
    const [discount, setDiscount] = useState({ discountCode: "", percent: 0 })
    const [discountError, setDiscountError] = useState("")
    const [discountValid , setDiscountValid] = useState("")

    useEffect(() => {
        setTotalPrice(
            orderlist.reduce((sum, current) => {
                const temp = foodlist.find(item => item.id === current.foodId)
                console.log({ temp, current })
                if (temp) {
                    const totalPrice = temp.price * current.count
                    return sum + totalPrice
                }
                return sum
            }, 0)
        )
    }, [orderlist])

    const discountCodes = [
        {
            code: "Gold",
            percent: 80
        },
        {
            code: "Silver",
            percent: 50
        },
        {
            code: "Bronz",
            percent: 30
        }
    ]

    const discountCalculator = () => {
        const temp = discountCodes.find(item => item.code === discount.discountCode)
        if (temp) {
            setDiscount({
                ...discount,
                percent: (temp.percent * totalPrice) / 100
            })
            setDiscountValid("کد تخفیف ثبت شد")
            setDiscountError("")
        } else {
            setDiscount({
                ...discount,
                percent: 0
            })
            setDiscountError("کد تخفیف وارد شده نامعتبر است!")
            setDiscountValid("")
        }
    }

    useEffect(()=>{
        setDiscountError("")
        setDiscountValid("")
    },[discount.discountCode])

    return (
        <>
            <HyperModal isOpen={isModalOpen} requestClose={() => setIsModalOpen(false)}>
                <div className="w-full h-full flex flex-col justify-between items-center pt-[3rem] pb-[2rem]">
                    <p className="font-[vazirbold]">سفارش شما با موفقیت ثبت شد.</p>
                    <div className="w-[40%]">
                        <Button onClick={() => setIsModalOpen(false)}>بستن</Button>
                    </div>
                </div>
            </HyperModal>
            <div className="w-[27%] h-[45%] p-5 bg-[#F0F8FF] rounded-[1rem] font-[vazirdig] text-black flex flex-col">

                <div className="w-full h-[30%] gap-3 items-center flex flex-col">
                    <div className="w-full flex flex-row justify-between">
                        <p>جمع کل سفارشات:</p>
                        <p>
                            {totalPrice}
                            <span> تومان</span>
                        </p>
                    </div>

                    <div className="w-full flex flex-row justify-between">
                        <p>حق سرویس و کارمزد:</p>
                        <p>
                            {(9 * totalPrice) / 100}
                            <span> تومان</span>
                        </p>
                    </div>

                    <div className="w-full flex flex-row justify-between">
                        <p>تخفیف:</p>
                        <p>
                            {(totalPrice) > 0 ? (discount.percent) : 0}
                            <span> تومان</span>
                        </p>
                    </div>
                </div>

                <div className="w-full flex flex-col">
                    <div className="w-full flex flex-row justify-center items-center mt-2">
                        <input value={discount.discountCode} onChange={e => setDiscount({ ...discount, discountCode: e.target.value })} className="w-[88%] h-[2.5rem] p-2 text-[15px] outline-none" placeholder="کد تخفیف" />
                        <button onClick={discountCalculator} className="w-[12%] h-[2.5rem] bg-[#9E1010] rounded-tl-[.25rem] rounded-bl-[.25rem] text-white flex justify-center items-center text-[22px]"><><MdDone /></></button>
                    </div>
                    <small className={discountError ? "min-h-[25px] pt-[5px] text-red-500 text-[12px]" : "min-h-[25px] pt-[5px] text-green-500 text-[12px]"}>
                        {
                            discountError ? discountError : discountValid
                        }
                    </small>
                    {/* <small className="min-h-[20px] text-red-500 text-[12px]">{discountError}</small>
                    <small className="min-h-[20px] text-green-500 text-[12px]">{discountValid}</small> */}
                </div>

                <div className="w-full flex flex-row justify-between bg-[#FFC72C] mt-[2rem] p-[.3rem] font-[vazirdig] font-bold">
                    <p>مبلغ قابل پرداخت:</p>
                    <p>
                        {((totalPrice + ((9 * totalPrice) / 100)) - discount.percent) > 0 ? ((totalPrice + ((9 * totalPrice) / 100)) - discount.percent) : 0}
                        <span> تومان</span>
                    </p>
                </div>

                <div className="w-full mt-4">
                    <Button disabled={orderlist.length === 0 ? true : false} onClick={() => {
                        dispatch(submitOrder())
                        setDiscount({ ...discount, discountCode: "" })
                        setIsModalOpen(true)
                        setDiscountError("")
                        setDiscountValid("")
                    }}>
                        ثبت سفارش
                    </Button>
                </div>
            </div>
        </>
    )
}

export default OrderCard
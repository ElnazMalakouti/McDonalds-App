import FoodCard from '../FoodCard';
import { useSelector } from 'react-redux';


const FoodsMenu = () => {

    const foodlist = useSelector((state) => state.food.foodList)

    return (
        <div className="w-[58%] max-h-[84vh] flex flex-col rounded-[1rem] bg-[#F0F8FF] justify-center items-center gap-3">
            <div className="w-full flex justify-center items-center border-b shadow-md p-3">
                <p className="text-black-500 text-[30px] font-[vazirdig] font-bold">رستوران مک دونالد شعبه اصفهان</p>
            </div>
            <div className="w-full p-2 gap-4 overflow-auto scrollbar dir-ltr scrollbar-thumb-gray-400 flex flex-row flex-wrap justify-center items-center">
                {foodlist.map(item => {
                    return <div key={item.id} className='w-[45%] dir-rtl'>
                        <FoodCard                        
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        picture={item.picture}
                    />
                    </div>
                })}
            </div>
            <div className='w-full h-[1.2rem]'></div>
        </div>
    )
}

export default FoodsMenu
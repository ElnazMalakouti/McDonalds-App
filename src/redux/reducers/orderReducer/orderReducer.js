import { createSlice } from "@reduxjs/toolkit";

const init = {
    orderList : [        
    ]
}

const orderReducer = createSlice({
    name : 'orderReducer' , 
    initialState : init ,
    reducers : {
        addFoodOrder : (state,action) => {
            const temp = state.orderList.find(item => item.foodId === action.payload)

            if(temp){
                temp.count = temp.count + 1
            }else{
                state.orderList.push({
                    foodId : action.payload,
                    count : 1
                })                
            }
        },
        removeFoodOrder : (state,action) => {
            const temp = state.orderList.find(item => item.foodId === action.payload)

            if(temp){
                if(temp.count < 2){
                    state.orderList = state.orderList.filter(item => item.foodId !== action.payload)
                }else{
                    temp.count = temp.count - 1
                }
            }
        },
        submitOrder : (state,action) => {
            state.orderList = []
        }
    }
})

export const {addFoodOrder,removeFoodOrder,submitOrder} = orderReducer.actions
export default orderReducer.reducer
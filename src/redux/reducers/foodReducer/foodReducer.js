import { createSlice } from "@reduxjs/toolkit";

const init = {
    foodList : [
        {
            id : 1,
            name : "همبرگر معمولی",
            price : 8000,
            picture : "https://restaurant-164lv2uu1-omidfa123.vercel.app/Assets/img/hamburger.png"
        },
        {
            id :2,
            name : "همبرگر مخصوص" ,
            price : 10000,
            picture : "https://restaurant-164lv2uu1-omidfa123.vercel.app/Assets/img/hamburger.png"
        },
        {
            id : 3,
            name : "همبرگر معمولی با قارچ و پنیر" ,
            price : 10000,
            picture : "https://restaurant-164lv2uu1-omidfa123.vercel.app/Assets/img/hamburger.png"
        },
        {
            id : 4,
            name : "همبرگر مخصوص با قارچ و پنیر" ,
            price : 20000,
            picture : "https://restaurant-164lv2uu1-omidfa123.vercel.app/Assets/img/hamburger.png"
        },
        {
            id : 5,
            name : "سیب زمینی سرخ کرده ویژه" ,
            price : 25000,
            picture : "https://restaurant-164lv2uu1-omidfa123.vercel.app/Assets/img/french_fries.png"
        },
        {
            id : 6,
            name : "سیب زمینی سرخ کرده" ,
            price : 10000,
            picture : "https://restaurant-164lv2uu1-omidfa123.vercel.app/Assets/img/french_fries.png"
        },
        {
            id : 7,
            name : "نوشابه رژیمی" ,
            price : 6000,
            picture : "https://restaurant-164lv2uu1-omidfa123.vercel.app/Assets/img/soda.png"
        },
        {
            id : 8,
            name : "نوشابه" ,
            price : 5000,
            picture : "https://restaurant-164lv2uu1-omidfa123.vercel.app/Assets/img/soda.png"
        },
        {
            id : 9,
            name : "سالاد فصل" ,
            price : 8000,
            picture : "https://restaurant-164lv2uu1-omidfa123.vercel.app/Assets/img/salad.png"
        },
        {
            id : 10,
            name : "سالاد سزار" ,
            price : 25000,
            picture : "https://restaurant-164lv2uu1-omidfa123.vercel.app/Assets/img/ceasar.png"
        },
    ]
}

const foodReducer = createSlice({
    name : 'foodReducer',
    initialState : init,
    reducers : {
        
    }
})

export default foodReducer.reducer
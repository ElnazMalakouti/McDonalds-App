const Button = ({children, ...props}) => {
    return(
        <button className="w-[100%] h-[55px] bg-[#9E1010] text-white rounded-[.25rem] font-[vazirbold] disabled:bg-gray-300 disabled:text-gray-500" {...props} >
            {children}
        </button>
    )
}

export default Button
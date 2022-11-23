const Button = ({children, ...props}) => {
    return(
        <button className="w-[300px] h-[60px] bg-[#9E1010] text-white rounded-[.25rem] font-[vazirbold]">
            {children}
        </button>
    )
}

export default Button
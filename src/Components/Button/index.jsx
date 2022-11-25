const Button = ({children, ...props}) => {
    return(
        <button className="w-[330px] h-[55px] bg-[#9E1010] text-white rounded-[.25rem] font-[vazirbold]">
            {children}
        </button>
    )
}

export default Button
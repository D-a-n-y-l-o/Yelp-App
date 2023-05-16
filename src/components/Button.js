export const Button = ({ className, type='submit', text }) => {
    return(
        <button
            type={type}
            className={className}
        >{text}</button>
    )
}
export const Input = ({ name, className, placeholder, type='text', value, onChange, onBlur, label }) => {
    
    const labelToProperSpelling = (name) => {
        if(name === 'confirm'){
            const result = name.charAt(0).toUpperCase() + name.slice(1) + ' password';
            return result;
        }
        const result = name.charAt(0).toUpperCase() + name.slice(1);
        return result;
    }
    
    return(
        <>
            <p className={label}>{labelToProperSpelling(name)}</p>
            <input
                name={name}
                className={className}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </>
    )
}
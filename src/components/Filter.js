export const Filter = ({ className, image, title, onClick }) => {
    return(
        <div className={className} onClick={onClick}>
            <img className='filter-icon' src={image} alt={title} />
            <p className='filter-title'>{title}</p>
        </div>
    )
}
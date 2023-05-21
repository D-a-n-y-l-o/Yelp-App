import thumb from '../assets/articles/thumb.png';


export const Article = ({ icon, title, color, image1, image2 }) => {
    
    return(
        <div className='article'>
            <div className={`article-icon article-${color}`}>
                <img className='article-icon-image' src={icon} alt='icon' />
            </div>
            <div className='article-content'>
                <p className='article-title' >{title}</p>
                <div className='article-emojis' >
                    <img className='article-emoji-one' src={image1} alt='userLogo'/>
                    <img className='article-emoji-two' src={image2} alt='userLogo'/>
                    <div className='article-likes' >
                        <img src={thumb} alt='thumb'/>
                        <p className='article-likes-amount' >28+</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
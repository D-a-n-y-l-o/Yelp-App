import { Sales } from './Sales';
import { Articles } from './Articles';

export const SalesAndArticles = () => {
    return(
        <div className='sales-articles-container' >
            <Sales />
            <Articles />
        </div>
    )
}
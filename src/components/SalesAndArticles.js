import { memo } from 'react';

import { Sales } from './Sales';
import { Articles } from './Articles';

const SalesAndArticles = () => {
    return(
        <div className='sales-articles-container' >
            <Sales />
            <Articles />
        </div>
    )
}

export default memo(SalesAndArticles);
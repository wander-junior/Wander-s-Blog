import * as React from 'react';
import SmallAbout from '../SmallAbout';

export default function BlogDetails({ lang }) {
    return (
        <aside>
            <SmallAbout lang={lang}/>
        </aside>
    )
}

import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={288}
            height={457}
            viewBox="0 0 288 457"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"

        >
            <circle cx="130" cy="130" r="130" />
            <rect x="0" y="281" rx="10" ry="10" width="265" height="23" />
            <rect x="0" y="319" rx="10" ry="10" width="268" height="60" />
            <rect x="0" y="393" rx="19" ry="19" width="93" height="35" />
            <rect x="124" y="392" rx="30" ry="30" width="143" height="49" />
            <rect x="203" y="409" rx="0" ry="0" width="14" height="8" />
        </ContentLoader>
    )
}

export default LoadingBlock

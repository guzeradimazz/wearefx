import React from 'react'

const TextBlock = ({text}) => {
    return (
        <div className="text-block">
            <div>
                <p>
                    {text}
                </p>
                <p>Approach</p>
            </div>
        </div>
    )
}

export default TextBlock

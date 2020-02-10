import React from 'react'
import { css } from 'emotion'

const Info = () => {
	return (
        <div className={divStyle}>
            <p>Added Info from Plugin</p>
        </div>			
	)
}

const divStyle = css({ 
    border: `2px solid green`
})

export { Info }
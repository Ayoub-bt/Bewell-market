import React from 'react'
import { Tooltip, IconButton } from '@material-ui/core'

export default ({ children, onClick, tip, btnClassName, tipPlacement, tipClassName }) => (
    <Tooltip title={tip} className={tipClassName} placement={tipPlacement}>
        <IconButton onClick={onClick} className={btnClassName}>
            {children}
        </IconButton>
    </Tooltip>
)
import { Tooltip, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export const MuiTooltip = () => {
    return(
        <Tooltip
            title='Deletar'
            placement='right'
            arrow
            enterDelay={500}
            leaveDelay={200}
        >
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </Tooltip>    
    )
}
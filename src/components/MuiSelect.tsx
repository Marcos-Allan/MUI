import { Box, TextField, MenuItem } from '@mui/material'
import { useState } from 'react'

export const MuiSelect = () => {
    const [countryes, setCountryes] = useState<string[]>([])
    console.log({countryes})
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setCountryes(typeof value === 'string' ? value.split(',') : value)
    }

    return(
        <Box width="250px">
            <TextField
                label='select country'
                select
                value={countryes}
                onChange={handleChange}
                fullWidth
                SelectProps={{
                    multiple: true
                }}
                size='small'
                color='secondary'
                helperText='Please select your country'
                error
            >
                <MenuItem value="IN">India</MenuItem>
                <MenuItem value="US">USA</MenuItem>
                <MenuItem value="AU">Australia</MenuItem>
            </TextField>
        </Box>    
    )
}
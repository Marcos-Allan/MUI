import { Stack, Rating } from '@mui/material'
import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export const MuiRating = () => {

    const [value, setValue] = useState<number | null>(4)
    console.log({ value })
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue)   
    }

    return(
        <Stack spacing={2}>
            <p>Oi</p>
            <Rating
                value={value}
                onChange={handleChange}
                precision={0.5}
                size='large'
                icon={<FavoriteIcon fontSize='inherit' color='error' />}
                emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
                highlightSelectedOnly
            />
        </Stack>    
    )
}
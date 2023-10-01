import { Stack, Avatar, AvatarGroup } from '@mui/material'

export const MuiAvatar = () => {
    return(
        <Stack spacing={4}>
            <Stack direction='row' spacing={1}>
                <Avatar sx={{ bgcolor: 'primary.light'}}>BK</Avatar>
                <Avatar sx={{ bgcolor: 'success.light'}}>CK</Avatar>
            </Stack>
            <Stack direction='row' spacing={1}>
                <AvatarGroup max={4}>
                    <Avatar sx={{ bgcolor: 'primary.light'}}>BK</Avatar>
                    <Avatar sx={{ bgcolor: 'success.light'}}>CK</Avatar>
                    <Avatar src='https://randomuser.me/api/portraits/women/79.jpg' alt='Jane Doe' />
                    <Avatar src='https://randomuser.me/api/portraits/women/51.jpg' alt='John Doe' />
                    <Avatar src='https://randomuser.me/api/portraits/women/45.jpg' alt='John Doe' />
                </AvatarGroup>
            </Stack>
            <Stack direction='row' spacing={1}>
                <Avatar variant='square' sx={{ bgcolor: 'primary.light', width: 48, height: 48 }}>BK</Avatar>
                <Avatar variant='rounded' sx={{ bgcolor: 'success.light', width: 48, height: 48 }}>CK</Avatar>
            </Stack>
        </Stack>    
    )
}
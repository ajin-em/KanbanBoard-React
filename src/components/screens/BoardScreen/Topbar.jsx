import { AppBar, Toolbar, Button, Stack, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/ExitToApp'
const Topbar = () => {
    return (
        <AppBar position='static'>
            <Toolbar sx={{
                justifyContent: 'space-between',
            }}>
                <Typography color="rgba(255,255,255, .6)">Kanban App</Typography>
                <Stack direction='row' spacing={2}>

                    <Button variant='contained'>
                        Create Board
                    </Button>

                    <Button startIcon = {<LogoutIcon/>} color='inherit'>
                        Logout
                    </Button>

                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Topbar
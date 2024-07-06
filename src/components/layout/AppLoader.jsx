import { Stack, CircularProgress } from '@mui/material'

export const AppLoader = () => {
    return (
        <Stack mt={10} alignItems='center'>
            <CircularProgress />
        </Stack>
    )
}

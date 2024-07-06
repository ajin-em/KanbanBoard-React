import { Dialog, Stack, } from '@mui/material'
import ModalHeader from '../../layout/ModalHeader'
const CreateBoardModal = () => {
    return (
        <Dialog open fullWidth maxWidth="xs">
            <Stack p={2}>
                <ModalHeader title={'Create Board'}/>         
            </Stack>
        </Dialog >
    )
}

export default CreateBoardModal
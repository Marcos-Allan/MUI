import { Stack, Alert, AlertTitle, Button } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

export const MuiAlert = () => {
    return(
        <Stack spacing={2}>
            <Alert severity='error'>Este é um alerta de erro</Alert>
            <Alert severity='warning'>Este é um alerta de aviso</Alert>
            <Alert severity='info'>Este é um alerta de informação</Alert>
            <Alert severity='success'>Este é um alerta de Sucesso</Alert>
            
            <Alert variant='outlined' severity='error'>Este é um alerta de erro</Alert>
            <Alert variant='outlined' severity='warning'>Este é um alerta de aviso</Alert>
            <Alert variant='outlined' severity='info'>Este é um alerta de informação</Alert>
            <Alert variant='outlined' severity='success'>Este é um alerta de Sucesso</Alert>

            <Alert
                variant='filled'
                severity='error'
                onClose={() => alert('Close alert')}
            >
                <AlertTitle>erro</AlertTitle>
                Este é um alerta de erro
            </Alert>
            <Alert variant='filled' severity='warning'>
                <AlertTitle>aviso</AlertTitle>
                Este é um alerta de aviso
            </Alert>
            <Alert
                variant='filled'
                severity='info'
                action={
                    <Button color='inherit'>
                        UNDO
                    </Button>
                }
            >
                <AlertTitle>informação</AlertTitle>
                Este é um alerta de informação
            </Alert>
            <Alert variant='filled' severity='success' icon={<CheckIcon fontSize='inherit' />}>
                <AlertTitle>Sucesso</AlertTitle>
                Este é um alerta de Sucesso
            </Alert>

        </Stack>   
    )
}
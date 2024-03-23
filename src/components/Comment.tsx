import TextField from '@mui/material/TextField';

export default function Comment() {
    
    return(
        <>
            {/* TODO: Avatar profile picture */}
            <TextField
                id="outlined-textarea"
                label="¿Qué estás pensando?"
                placeholder="Placeholder"
                fullWidth
                rows={4}
                multiline
            />
        </>
    );
}
import React, { useState } from 'react';
import { Box, TextField, Typography } from "@mui/material";

export default function PromptSection() {

    const [message, setMessage] = useState("");
    const [value, setValue] = useState({
        input: ""
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue({
            input: event.target.value
        });
    }

    return (
        <Box>
            <Typography>What should the bot do?</Typography>
            <TextField id="prompt" label="Input prompt" variant='standard' onChange={handleChange} onKeyDown={(ev) => {
                if (ev.key === 'Enter') {
                    fetch("http://localhost:8080/post", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(value)
                    })
                    .then((res) => res.json())
                    .then((data) => setMessage(data.message));

                    setValue("");
                }
            }} value={value.input}></TextField>
            <br></br>
            <br></br>
            <Typography>{message}</Typography>
        </Box>
    )
}
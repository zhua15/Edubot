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
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <TextField sx={{
                maxWidth: '80%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }} fullWidth id="prompt" label="Input prompt" variant='standard' onChange={handleChange} onKeyDown={(ev) => {
                if (value.input !== "" && ev.key === 'Enter') {
                    fetch("http://localhost:8080/post", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(value)
                    })
                    .then((res) => res.json())
                    .then((data) => setMessage(data.message));

                    setValue({
                        input: ""
                    });
                }
            }} value={value.input}></TextField>
            </Box>
            <br></br>
            <br></br>
            <Typography>{message !== "" ? "Input: " + message : ""}</Typography>
        </Box>
    )
}
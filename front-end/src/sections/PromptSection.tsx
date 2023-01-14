import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from "@mui/material";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

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

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();
    
    useEffect(() => {
        setValue({
            input: transcript
        })
    }, [transcript])

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
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
            <Button variant="contained" color={listening ? "error" : "primary"} onClick={() => {
                if (listening) {
                    SpeechRecognition.stopListening();
                } else {
                    SpeechRecognition.startListening();
                }
            }}>{listening ? "Stop" : "Speak!"}</Button>
            </Box>
            <br></br>
            <br></br>
            <Typography>{message !== "" ? "Input: " + message : ""}</Typography>
        </Box>
    )
}
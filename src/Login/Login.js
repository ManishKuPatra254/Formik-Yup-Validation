import React, { Fragment } from 'react'
import './Login.css';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


export function Login() {
    return (
        <Fragment>
            <div className="main_login">
                <div className="sub_login">
                    <h1>User Login</h1>
                    <TextField id="outlined-basic" label="Username" variant="outlined" />
                    <TextField id="outlined-basic" label="Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                    <Button
                        sx={{
                            backgroundColor: 'black',
                        }}
                        variant='contained'>Login</Button>
                </div>
            </div>
        </Fragment>
    )
}

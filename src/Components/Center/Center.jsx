import React from 'react'
import styles from "../../scss/mainCircle.module.scss";
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import cnBind from 'classnames/bind'



const Center = () => {
    const cn = cnBind.bind(styles);
    const alFunk = () => {
        alert("Работает")
    }
    return (
        <div className={cn('center')}>
            <h2 >Simon Game</h2>
            <div><h1 className={cn('count')}>0</h1>
                <Button variant="contained" onClick={alFunk} color="success">
                    Start Game
                </Button>
                <div>
                    <Radio size="small" />
                    <Radio size="small" />
                </div>
                <Button variant="outlined" color="error">
                    Restart
                </Button>

            </div>
        </div>
    )
}

export default Center
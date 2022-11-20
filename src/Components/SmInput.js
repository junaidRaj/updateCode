import { TextField } from '@mui/material';
import React from 'react'

export default function SmInput(props) {
    const {label, onChange, disabled, value, type, required}= props;
  return (
      <>
    <TextField fullWidth = {true} variant='outlined' required={required} disabled={disabled} label={label} value={value} type={type} 
    onChange={onChange}
    />
      </>
      )
}

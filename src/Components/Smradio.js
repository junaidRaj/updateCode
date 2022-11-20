import * as React from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

export default function Smradio(onChange,value,radioData) {

  return (
    <FormControl>
      <FormLabel>Gender</FormLabel>
      <RadioGroup
        defaultValue="female"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={onChange}
      >
        {
            radioData.length>0 && radioData.map((e,i)=>
            <FormControlLabel value={e.value} control={<Radio/>} label={FormLabel}/>
            )
        }
      </RadioGroup>
    </FormControl>
  );
};
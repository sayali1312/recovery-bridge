import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['Doctor', 'Patient'];

export default function DoctorPatient() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div>
      <Autocomplete
        
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="doctor-or-patient"
        options={options}
        sx={{ mt: 3, mb: 2 }}
        renderInput={(params) => <TextField {...params} label="Profession" />}
      />
    </div>
  );
}

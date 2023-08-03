import { useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import countriesService from '../services/CountriesService';
import { Box } from '@mui/material';

const SearchBar = ({ onChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countriesService
      .getAll()
      .then(countries => {
        console.log(countries);
        setCountries(countries);
      })
  }, []);

  return (
    <Autocomplete
      options={countries}
      getOptionLabel={(option) => option.name.common}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={option.flags.png}
            srcSet={option.flags.png}
            alt=""
          />
          {option.name.common}
        </Box>
      )}
      onChange={(event, newValue) => {
        if (newValue) {
          onChange(newValue.name.common);
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search for a country..."
          variant="outlined"
        />
      )}
    />
  );
};

export default SearchBar;

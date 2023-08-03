import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import { Typography } from '@mui/material';
import './index.css';

const theme = createTheme();


const App = () => {
  const [selectedCountry, setSelectedCountry] = useState();

  const handleCountrySelect = async (country) => {
    setSelectedCountry(country);
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          background: 'linear-gradient(to bottom right, #b3e0ff, #b3ffb3)',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" gutterBottom>
            Weather App
          </Typography>
          <Grid container spacing={2} mt={5} justifyContent="center" alignItems="center">
            <Grid item xs={12}>
              <SearchBar onChange={handleCountrySelect} />
            </Grid>
            {selectedCountry && (
              <Grid item xs={12}>
                <WeatherCard country={selectedCountry}/>
              </Grid>
            )}
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default App;

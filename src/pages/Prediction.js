// App.js

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  Container,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  InputLabel,
  Box,
} from '@mui/material';
import './prediction.css'; // Import your CSS file

const App = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedMeal, setSelectedMeal] = useState('Breakfast');
  const [prediction, setPrediction] = useState({
    text: 'Prediction text will appear here',
    imageUrl: 'https://via.placeholder.com/150', // Placeholder image URL
  });

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
    updatePrediction(event.target.value, selectedMeal);
  };

  const handleMealChange = (event) => {
    setSelectedMeal(event.target.value);
    updatePrediction(selectedDay, event.target.value);
  };

  const updatePrediction = (day, meal) => {
    const text = `Prediction for ${day} ${meal}`;
    let imageUrl = 'https://via.placeholder.com/150'; // Placeholder image URL

    setPrediction({ text, imageUrl });
  };

  return (
    <div className="App">
      <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Prediction App
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ paddingTop: '20px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <FormControl>
            <InputLabel id="day-select-label">Day</InputLabel>
            <Select
              labelId="day-select-label"
              id="day-select"
              value={selectedDay}
              label="Day"
              onChange={handleDayChange}
            >
              <MenuItem value="Monday">Monday</MenuItem>
              <MenuItem value="Tuesday">Tuesday</MenuItem>
              <MenuItem value="Wednesday">Wednesday</MenuItem>
              <MenuItem value="Thursday">Thursday</MenuItem>
              <MenuItem value="Friday">Friday</MenuItem>
              <MenuItem value="Saturday">Saturday</MenuItem>
              <MenuItem value="Sunday">Sunday</MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel id="meal-select-label">Meal</InputLabel>
            <Select
              labelId="meal-select-label"
              id="meal-select"
              value={selectedMeal}
              label="Meal"
              onChange={handleMealChange}
            >
              <MenuItem value="Breakfast">Breakfast</MenuItem>
              <MenuItem value="Lunch">Lunch</MenuItem>
              <MenuItem value="Dinner">Dinner</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Card sx={{ marginTop: '20px' }}>
          <CardMedia
            component="img"
            height="200"
            image={prediction.imageUrl}
            alt="Prediction"
          />
          <CardContent>
            <Typography variant="body1">{prediction.text}</Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default App;

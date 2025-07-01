import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import "./InfoBox.css";

export default function InfoBox({info}) {
    const INIT_URL = 
        "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=800&auto=format&fit=crop";
    
        const HOT_URL="https://images.unsplash.com/photo-1705492083147-d914658557c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        const COLD_URL="https://plus.unsplash.com/premium_photo-1672848844228-d7f7b7222022?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        const RAIN_URL="https://images.unsplash.com/photo-1558409057-bbe679023136?q=80&w=1337&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
 

return(
<div className="InfoBox">
  <h1 style={{color:"Blue"}}>{info.weather}</h1>
  <div className="cardContainer">
  <Card sx={{ maxWidth: 400 }}>
    <CardMedia 
    sx={{ height: 110 }} 
    image = {
    info.humidity > 80
    ? RAIN_URL
    : info.temp > 27
      ? HOT_URL
      : info.temp > 15
        ? COLD_URL
        : DEFAULT_URL

    }

    title="green iguana" />
    <CardContent>
<Typography gutterBottom variant="h4" component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
  {info.city}
  {
    info.humidity > 80 ? (
      <ThunderstormIcon sx={{ color: '#1976d2',fontSize: 40    }} />
    ) : info.temp > 27 ? (
      <WbSunnyIcon sx={{ color: '#f57c00',fontSize: 40  }} />
    ) : (
      <AcUnitIcon sx={{ color: '#0288d1',fontSize: 40  }} />
    )
  }
</Typography>

  <Typography variant="body2" color="text.secondary"   sx={{ fontSize: 15 }} component={"span"}>
 <p>🌡️ Temperature: <strong>{info.temp}&deg;C</strong></p>
<p>💧 Humidity: <strong>{info.humidity}%</strong></p>
<p>🔻 Min Temp: <strong>{info.tempMin}&deg;C</strong></p>
<p>🔺 Max Temp: <strong>{info.tempMax}&deg;C</strong></p>
  <p>
     The weather can be described as <i><strong>{info.weather}</strong></i> and feels like {info.feelslike} <strong>{info.temp}</strong>&deg;C
        </p>
      </Typography>
    </CardContent>
  </Card>
  </div>
</div>
);
}
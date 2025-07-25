import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import "./InfoBox.css"

export default function InfoBox({info}) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60";

  const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const RAIN_URL = "https://images.unsplash.com/photo-1438449805896-28a666819a20?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


  return (
    <div className="InfoBox">
        <br />
      <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={info.humidity > 80 ? RAIN_URL : (info.temp > 15 ? HOT_URL : COLD_URL)} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}&nbsp;
            {info.humidity > 80 ? <ThunderstormIcon/> : (info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>)}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }} component={"span"}>
            <div>Temperature: {info.temp}&deg;C</div>
            <div>Humdity: {info.humidity}</div>
            <div>Minimum Temperature: {info.tempMin}</div>
            <div>Maximum Temperature: {info.tempMax}</div>
            <div>Weather can be described as <i><b>{info.weather}</b></i> & Feels like {info.feelsLike}</div>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}

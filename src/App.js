import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header from "./Header";
import Categories from "./Categories";
import Moda from "./Moda";
import Electro from "./Electro";
import Belleza from "./Belleza";

const App = () => {

	return (
  		<>
		  	<Box sx={{
				backgroundColor: "#F6F6F6", 
				borderTop: "3px solid #aad500",
			}}>
				<Box
					alt="logo-falabella"
					component="img"
					src={require("./images/falabella-logo.png")}
					sx={{
						height:100,
						width:100,
						position: "absolute",
						zIndex: 10,
					}}
				/>
				<Typography
					sx={{fontFamily: "Lato, sans-serif", fontSize: 13, textAlign:"center"}}
				><b>¡No hagas filas ! <u>Agenda tu visita a tienda</u></b>, con el día, hora y la tienda que más te acomode.</Typography>
			</Box>
			<Header />
			<Categories />
			<Box sx={{marginX: "130px"}}>
				<Moda />
				<Electro />
				<Belleza />
			</Box>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="0.1" d="M0,32L60,58.7C120,85,240,139,360,165.3C480,192,600,192,720,170.7C840,149,960,107,1080,106.7C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
		</>
  	);
}

export default App;
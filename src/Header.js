import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';

const Image = styled(Box)(({theme}) => ({
	height: "576px",
	position:"relative",
    width: "100%",
	[theme.breakpoints.down('md')]:{
		height: "250px",
	},
}));

const Logo = styled(Typography)(({theme}) => ({
	fontFamily:"Poppins, sans-serif",
	fontSize: "5rem",
	color: "#8FAC5D",
	left: "100px",
	position: "absolute",
	top: "80px",
	width: "200px",
	[theme.breakpoints.down('md')]:{
		fontSize: "2rem",
		left: "30px",
		width: "70px"	
	},
}));

const Header = () => {
    return (
        <>
			<Image
				alt="mothers day banner"
				component="img"
				src={require("./images/mothers_day.jpg")}
			/>
			<Logo component="h1" variant="h1">
				FELIZ DÍA DE LA MADRE 	
			</Logo>
    	</>
    );
};

export default Header;
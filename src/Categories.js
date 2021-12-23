import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';

const Title = styled(Typography)(({theme}) => ({
	fontSize: "26px", 
	marginTop: "50px", 
	color:"#323c47", 
	fontFamily: "Lato, sans-serif",
	[theme.breakpoints.down('md')]:{
		fontSize: "17px",
		marginTop: "20px"
	},
}));

const ButtonImage = styled(Box)(({theme}) => ({
	height: "100px",
	width: "100px",
	borderRadius: "100px",
	margin: "40px 20px 16px 20px",
	[theme.breakpoints.down('md')]:{
		margin: "15px 5px 5px 10px",
		height: "80px",
		width: "80px",
	},
	"&:hover": {
		border:"2px solid #aad500", 
		cursor: "pointer", 
		boxSizing: "border-box",
	},
}));

const Text = styled(Typography)(({theme}) => ({
	color:"#323c47", 
	fontFamily: "Lato, sans-serif",
	[theme.breakpoints.down('md')]:{
		fontSize: "0.85rem",
	},
}));

const Categories = () => {
    
    const categories = [
		{ id:1, name:"Moda", imgSource:"moda" },
		{ id:2, name:"Electro", imgSource:"electrodomesticos" },
		{ id:3, name:"Belleza", imgSource:"belleza" }
	];
    
    return (
        <>
			<Title align="center">
				Selecciona tu categoría
			</Title>
			<Box sx={{display: "flex", justifyContent: "center"}}>
				{categories.map(category =>
					<Box key={category.id}>
						<ButtonImage 
							alt={category.name}
							component="img"
							src={require(`./images/${category.imgSource}.jpg`)}
						/>
						<Box>
							<Text align="center">
								{category.name}
							</Text>
							<Divider variant="middle" sx={{backgroundColor:"#aad500"}}/>
						</Box>
					</Box>
				)}
			</Box>
		</>
    );
};

export default Categories;
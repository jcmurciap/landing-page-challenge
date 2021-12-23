import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Title } from './Categories';

const Image = styled(Box)(({theme}) => ({
	width:"100%", 
	height:445, 
	opacity:0.8, 
	transition: "all 0.5s ease-out",
	[theme.breakpoints.down('md')]: {
		width: "90vw",
		height: "300px",
		opacity: 0.9
	},
	"&:hover": {opacity: 1, cursor: "pointer"},
}));

const Moda = () => {
    return (
        <Box sx={{marginTop: "40px"}}>
			<Title>Moda</Title>
			<Grid container spacing={1}>
				<Grid item xs={12} md={4}> 
					<Image
						alt="camisa"
						component="img"
						src={require('./images/main-moda.jpg')}
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<Image
						alt="zapatos"
						component="img"
						src={require('./images/shoes_moda.jpg')}
					/>
					<Image
						alt="accesorios"
						component="img"
						src={require('./images/accesorios.jpg')}
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<Image
						alt="pantalon"
						component="img"
						src={require('./images/pantalon.jpg')}
					/>																							
				</Grid>
				<Grid item xs={12} md={12}>
					<Image
						alt="dress"
						component="img"
						src={require('./images/dress.jpg')}
					/>
				</Grid>
			</Grid>
		</Box>
    );
};
export default Moda;
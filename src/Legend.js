import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';

const Logo = styled(Box)(({theme}) => ({
    position: "absolute",
    zIndex: 10,
	[theme.breakpoints.down('md')]:{
		height: "54px",
		width: "50px",
	},
	[theme.breakpoints.up('md')]:{
		height: "100px",
		width: "100px",
	},
}));

const Blockquote = styled(Typography)(({theme}) => ({
    fontFamily: "Lato, sans-serif", 
    fontSize: 13,
    textAlign:"center",
    marginLeft: 0,
    [theme.breakpoints.down('md')]:{
		marginLeft: "50px",
        fontSize: "11px"
	},
}))

const Legend = () => {
    return (
        <Box sx={{backgroundColor:"#F6F6F6", borderTop:"3px solid #aad500"}}>
            <Logo
                alt="logo-falabella"
                component="img"
                src={require("./images/falabella-logo.png")}
            />
            <Blockquote>
                <b>¡No hagas filas ! <u>Agenda tu visita a tienda</u></b>, con el día, hora y la tienda que más te acomode.
            </Blockquote>
        </Box>
    );
};

export default Legend;
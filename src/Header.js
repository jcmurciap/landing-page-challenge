import { Box, Typography } from "@mui/material";


const Header = () => {

    return (
        <Box>
				<Box
					alt="mothers day banner"
					component="img"
					src={require("./images/mothers_day.jpg")}
      	  			sx={{
						height: 576,
      	    			width: "100%",
						position:"relative"	
      	  			}}
				/>
				<Typography 
					component="h1"
					sx={{
						fontFamily:"Amatic SC, cursive",
						position: "absolute",
						top: 80,
						width: 200,
						fontSize: "8rem",
						left: 100
					}}
					variant="h1" 
				>
					DÍA DE LA MADRE
				</Typography>
    		</Box>
    );
};

export default Header;
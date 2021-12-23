import { Box, Grid, Typography } from '@mui/material';


const Moda = () => {

    const modaSec = [
		{ id: 1, name:"camisa", imgSource:"main-moda", xs:12, md:5, width:360,height:446 },
		{ id: 2, name:"zapatos", imgSource:"shoes_moda", xs:12, md:3, width:320,height:224 },
		{ id: 3, name:"accesorios", imgSource:"accesorios", xs:12, md:4, width:320,height:224 },
		{ id: 4, name:"pantalon", imgSource:"pantalon", xs:12, md:4, width:350,height:450 },
		{ id: 5, name:"abrigo", imgSource:"dress", xs:12, md:12, width:1048,height:359 },
	];

    return (
        <Box sx={{marginTop: "40px"}}>
			<Typography sx={{ 
				color:"#212529", 
				fontSize: "1.625rem", 
				fontFamily:'Lato, sans-serif',
				fontWeight: 400,
				marginBottom: "20px",
			}}>
				Moda
			</Typography>
			
			<Grid container spacing={1}>
				<Grid item xs={12} md={4}> 
					<Box
						alt="camisa"
						component="img"
						src={require('./images/main-moda.jpg')}
						sx={{
							width:"100%", 
							height:445, 
							opacity:0.8, 
							transition: "all 0.5s ease-out",
							"&:hover": {opacity: 1, cursor: "pointer"}, 
						}}
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<Box
						alt="zapatos"
						component="img"
						src={require('./images/shoes_moda.jpg')}
						sx={{
							width:"100%", 
							height:221,
							opacity:0.8,
							transition: "all 0.5s ease-out", 
							"&:hover": {opacity: 1, cursor: "pointer"}
						}}
					/>
					<Box
						alt="accesorios"
						component="img"
						src={require('./images/accesorios.jpg')}
						sx={{
							width:"100%", 
							height:221,
							opacity: 0.8, 
							transition: "all 0.5s ease-out",
							"&:hover": {opacity: 1, cursor: "pointer"}
						}}
					/>
				</Grid>
				<Grid item xs={12} md={4}>
				<Box
					alt="pantalon"
					component="img"
					src={require('./images/pantalon.jpg')}
					sx={{
						width:"100%", 
						height:450,
						opacity: 0.8,
						transition: "all 0.5s ease-out", 
						"&:hover": {opacity: 1, cursor: "pointer"}
					}}
				/>																							
				</Grid>
				<Grid item xs={12} md={12}>
				<Box
					alt="dress"
					component="img"
					src={require('./images/dress.jpg')}
					sx={{
						width: "100%",
						height:400,
						opacity: 0.8,
						transition: "all 0.5s ease-out",
						"&:hover": {
							opacity: 1, 
							cursor: "pointer",
						}
					}}
				/>
				</Grid>
			</Grid>
		</Box>
    )
}

export default Moda;
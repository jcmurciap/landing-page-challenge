import { Box, Divider, Typography } from "@mui/material";


const Categories = () => {
    
    const categoriesSec = [
		{ id:1, name:"Moda", imgSource:"moda" },
		{ id:2, name:"Electro", imgSource:"electrodomesticos" },
		{ id:3, name:"Belleza", imgSource:"belleza" }
	];
    
    return (
        <Box>
				<Typography
					align="center"
					sx={{fontSize: "1.625rem", marginTop: 10, color:"#323c47", fontFamily: "Lato, sans-serif"}}
				>Selecciona tu categoría</Typography>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center"
					}}
				>
					{categoriesSec.map(category => 
						
						<Box key={category.id}>
							<Box 
								alt={category.name}
								component="img"
								src={require(`./images/${category.imgSource}.jpg`)}
								sx={{
									height:100,
									maxHeight:100,
									width:100,
									maxWidth:100,
									borderRadius:100,
									marginX: 2,
									marginTop: 4,
									marginBottom:"16px",
									"&:hover": {
										border:"2px solid #aad500", 
										cursor: "pointer", 
										boxSizing: "border-box",
									}
								}}
							/>
							<Box>
								<Typography align="center" sx={{color:"#323c47", fontFamily: "Lato, sans-serif"}}>{category.name}</Typography>
								<Divider variant="middle" sx={{backgroundColor:"#aad500"}}/>
							</Box>
						</Box>
					)}
				</Box>
			</Box>
    )
}

export default Categories;
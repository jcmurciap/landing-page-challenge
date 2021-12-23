import React, { useState } from "react";
import ItemsCarousel from 'react-items-carousel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";

const Electro = () => {

    const [active, setActive] = useState(0);
    const images = [
        {id: 1, path: './images/lavajilla'},
        {id: 2, path: './images/aspiradora'},
        {id: 3, path: './images/freidora'},
        {id: 4, path: './images/licuadora'},
        {id: 5, path: './images/secador-pelo'},
        {id: 6, path: './images/vaporizador'},
    ];

    return (
        <Box sx={{marginTop: "50px"}}>
			<Typography
                sx={{
                    color:"#212529", 
				    fontSize: "1.625rem", 
				    fontFamily:'Lato, sans-serif',
				    fontWeight: 400,
                    marginBottom: "20px",
                    marginTop: "100px",
                }}
            >
                Electro
            </Typography>
            <ItemsCarousel
                autoplay
                infiniteLoop={true}
                gutter={1}
                timeout={1}
                activePosition={"center"}
                chevronWidth={60}
                disableSwipe={false}
                alwaysShowChevrons={true}
                numberOfCards={4}
                slidesToScroll={3}
                outsideChevron={true}
                showSlither={false}
                firstAndLastGutter={false}
                activeItemIndex={active}
                requestToChangeActive={(value) => setActive(value)}
                rightChevron={">"}
                leftChevron={"<"}
            >
                {images.map(image => (
                    <Box
                        key={image.id}
                        alt="image"
                        component="img"
                        src={require(`${image.path}.jpg`)}
                        sx={{
                            width: 200, 
                            height: 200, 
                            transition: "all 0.5s ease-out",
                            opacity: 0.8, 
                            boxShadow: 2,
                            "&:hover":{opacity: 1, cursor: "pointer"}
                        }}
                    />
                ))}
            </ItemsCarousel>
            <Box sx={{display: "flex", justifyContent: "center", marginTop: "30px"}}>
                <Button 
                    variant="contained"
                    sx={{
                        background: "#333232", 
                        width: "200px",
                        "&:hover": {
                            background: "#4f4d4d"
                        }
                    }}    
                >Ver todo</Button>
            </Box>
		</Box>
    );
};

export default Electro;

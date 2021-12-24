import React, { useState } from "react";
import ItemsCarousel from 'react-items-carousel';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import { Title } from './Categories';

const Image = styled(Box)(({theme}) => ({
    width: "200px", 
    height: "200px", 
    transition: "all 0.5s ease-out",
    opacity: 0.9, 
    boxShadow: 2,
    [theme.breakpoints.down('md')]:{
        width: "180px", 
        height: "180px",
        numberOfCards: 1
    },
    "&:hover":{opacity: 1, cursor: "pointer"}
}));

const Electro = () => {

    const [active, setActive] = useState(0);
    
    const images = [
        {id: 1, path: 'lavajilla'},
        {id: 2, path: 'aspiradora'},
        {id: 3, path: 'freidora'},
        {id: 4, path: 'licuadora'},
        {id: 5, path: 'secador-pelo'},
        {id: 6, path: 'vaporizador'},
    ];

    return (
        <Box>
			<Title>Electro</Title>
            <ItemsCarousel
                autoplay
                infiniteLoop={true}
                gutter={1}
                timeout={3}
                activePosition={"center"}
                chevronWidth={60}
                disableSwipe={false}
                alwaysShowChevrons={true}
                numberOfCards={3}
                slidesToScroll={1}
                outsideChevron={true}
                showSlither={false}
                firstAndLastGutter={false}
                activeItemIndex={active}
                requestToChangeActive={(value) => setActive(value)}
                rightChevron={">"}
                leftChevron={"<"}
            >
                {images.map(image => (
                    <Image
                        key={image.id}
                        alt="image"
                        component="img"
                        src={require(`./images/${image.path}.jpg`)}
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

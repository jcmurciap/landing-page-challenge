import Container from'@mui/material/Container';
import Box from'@mui/material/Box';
import Typography from'@mui/material/Typography';
import Button from'@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Title } from './Categories';



const Image = styled(Box)(({theme}) => ({
    width:"200px", 
    height:"200px",
    transition: "all 0.5s ease-out",
    opacity: 0.8,
    margin: "0 10px", 
    [theme.breakpoints.down('md')]:{
        width:"90vw"    
    },
    "&:hover": {opacity: 1, cursor: "pointer"},
}));

const Area = styled(Box)(({theme}) => ({
    width:500, 
    height:300, 
    opacity:0.8,
    transition: "all 0.5s ease-out",
    [theme.breakpoints.down('md')]:{
        width: "100%",
        height: "250px",
    },
    "&:hover": {opacity: 1, cursor: "pointer"}
}));

const Btn = styled(Button)(({theme}) => ({
    width: "100%",
    borderColor:"#4f4d4d", 
    color:"#4f4d4d",
    margin:"10px",
    [theme.breakpoints.down('md')]:{
        width: "70%",
    },
    "&:hover": {
        background: "#f7f5f5",
        borderColor: "#b8b2b2"
    },
    
}));

const Section = styled(Box)(({theme}) => ({
    display: "flex",
    justifyContent: "center",
    marginTop: "5px",
}))

const Strong = styled(Typography)({
    color:"#212529", 
    fontFamily:'Lato, sans-serif', 
    textAlign:"center"
});

const Article = styled(Box)(({theme}) => ({
    [theme.breakpoints.up('md')]:{
        width: "35%",
        padding: "15px"
    }
}))

const Belleza = () => {
    
    const images = [
        {id: 1, imagePath:"mascara", text:"Cuidado facial"},
        {id: 2, imagePath:"corporal", text:"Cuidado corporal"},
        {id: 3, imagePath:"polvos", text:"Proteccion solar"},
    ];

    return (
        <Box sx={{marginTop: "80px"}}>
            <Box sx={{display:"flex", flexWrap:"wrap"}}>
                <Area
                    alt="woman"
                    component="img"
                    src={require('./images/cremas2.jpg')}
                />
                <Article>
                    <Title sx={{textAlign: "center", marginTop: "20px"}}>Belleza</Title>
                    <Typography
                        sx={{
                            marginX: "30px",
                            textAlign: "left",
                            color:"#212529",
                            fontFamily:'Lato, sans-serif',
                            marginTop: "20px"
                        }}
                    >
                        Encuentra tus productos favoritos para expresar lo mejor de tu belleza. 
                        Celebra de una y mil maneras con esta selección única.
                    </Typography>
                    <Section>
                        <Btn variant="outlined">Ver todo</Btn>
                    </Section>
                </Article>
            </Box>

            {/* OK */}
            <Box sx={{display: "flex", justifyContent:"space-evenly", marginTop: 3, flexWrap:"wrap"}}>
                {images.map(image => 
                    <Box key={image.id} sx={{margin: "10px"}}>
                        <Image
                            alt="woman"
                            component="img"
                            src={require(`./images/${image.imagePath}.jpg`)}
                        />
                        <Strong>{image.text}</Strong>
                        <Section>
                            <Btn variant="outlined">Ver todo</Btn>
                        </Section>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default Belleza;

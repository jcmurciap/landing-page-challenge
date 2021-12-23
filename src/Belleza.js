import Container from'@mui/material/Container';
import Box from'@mui/material/Box';
import Typography from'@mui/material/Typography';
import Divider from'@mui/material/Divider';
import Button from'@mui/material/Button';

const Belleza = () => {


    return (
        <Container sx={{marginTop: "100px"}}>
            <Box sx={{display:"flex"}}>
                <Box
                    alt="woman"
                    component="img"
                    src={require('./images/cremas2.jpg')}
                    sx={{
                        width:500, 
                        height:300, 
                        opacity:0.8,
                        transition: "all 0.5s ease-out", 
                        "&:hover": {opacity: 1, cursor: "pointer"}
                    }}
                />
                <Box>
                    <Typography 
                        sx={{
                            color:"#212529", 
                            fontSize: "1.625rem", 
                            fontFamily:'Lato, sans-serif',
                            fontWeight: 400,
                            textAlign: "center",
                            marginBottom: "20px",
                        }}
                    >
                        Belleza
                    </Typography>
                    <Typography
                        sx={{
                            marginX: "50px",
                            textAlign: "left",
                            color:"#212529",
                            fontFamily:'Lato, sans-serif',
                        }}
                    >
                        Encuentra tus productos favoritos para expresar lo mejor de tu belleza. 
                        Celebra de una y mil maneras con esta selección única.
                    </Typography>
                    <Box sx={{display: "flex", justifyContent:"center", marginTop: "20px"}}>
                        <Button
                            variant="outlined"
                            sx={{
                                margin: "0 auto", 
                                borderColor:"#4f4d4d", 
                                color:"#4f4d4d",
                                "&:hover": {
                                    background: "#f7f5f5",
                                    borderColor: "#b8b2b2"
                                }
                            }}
                        >
                            Ver todo
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{display: "flex", justifyContent:"space-evenly", marginTop: 3}}>
                <Box>
                    <Box
                        alt="woman"
                        component="img"
                        src={require('./images/mascara.jpg')}
                        sx={{
                            width:200, 
                            height:200,
                            opacity: 0.8,
                            transition: "all 0.5s ease-out", 
                            "&:hover": {opacity: 1, cursor: "pointer", transition:""}
                        }}
                    />
                    <Typography sx={{color:"#212529", fontFamily:'Lato, sans-serif', textAlign:"center"}}>Cuidado facial</Typography>
                    <Button
                        variant="outlined" 
                        sx={{
                            width: "100%",
                            margin: "0 auto",
                            borderColor:"#4f4d4d", 
                            color:"#4f4d4d",
                            marginTop:"10px",
                            "&:hover": {
                                background: "#f7f5f5",
                                borderColor: "#b8b2b2"
                            }
                        }}
                    >Ver todo</Button>
                </Box>
                <Box>
                    <Box
                        alt="woman"
                        component="img"
                        src={require('./images/corporal.jpg')}
                        sx={{
                            width:200, 
                            height:200,
                            opacity: 0.8,
                            transition: "all 0.5s ease-out", 
                            "&:hover": {opacity: 1, cursor: "pointer"}
                        }}
                    />
                    <Typography sx={{color:"#212529", fontFamily:'Lato, sans-serif', textAlign:"center", }}>Cuidado corporal</Typography>
                    <Button
                        variant="outlined"
                        sx={{
                            width: "100%",
                            margin: "0 auto",
                            borderColor:"#4f4d4d", 
                            color:"#4f4d4d",
                            marginTop:"10px",
                            "&:hover": {
                                background: "#f7f5f5",
                                borderColor: "#b8b2b2"
                            }
                        }}
                    >Ver todo</Button>
                </Box>
                <Box>
                    <Box
                        alt="woman"
                        component="img"
                        src={require('./images/polvos.jpg')}
                        sx={{
                            width:200, 
                            height:200,
                            transition: "all 0.5s ease-out",
                            opacity: 0.8, 
                            "&:hover": {opacity: 1, cursor: "pointer"}
                        }}
                    />
                    <Typography sx={{color:"#212529", fontFamily:'Lato, sans-serif', textAlign:"center"}}>Proteccion solar</Typography>
                    <Button
                        variant="outlined"
                        sx={{
                            width: "100%",
                            margin: "0 auto",
                            borderColor:"#4f4d4d", 
                            color:"#4f4d4d",
                            marginTop:"10px",
                            "&:hover": {
                                background: "#f7f5f5",
                                borderColor: "#b8b2b2"
                            }
                        }}
                    >Ver todo</Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Belleza;

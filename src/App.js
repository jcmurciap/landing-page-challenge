import Box from "@mui/material/Box";
import Header from "./Header";
import Categories from "./Categories";
import Moda from "./Moda";
import Electro from "./Electro";
import Belleza from "./Belleza";
import Legend from "./Legend";
import { styled } from '@mui/material/styles';
import Container from "@mui/material/Container";

const Div = styled(Box)(({theme}) => ({
	marginX: "130px",
	[theme.breakpoints.down('md')]:{
		margin: "0 auto"
	}
}));

const App = () => {
	return (
  		<>
		  	<Legend />
			<Header />
			<Container>
				<Categories />
				<Div>
					<Moda />
					<Electro />
					<Belleza />
				</Div>
			</Container>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fillOpacity="0.1" d="M0,32L60,58.7C120,85,240,139,360,165.3C480,192,600,192,720,170.7C840,149,960,107,1080,106.7C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
		</>
  	);
}

export default App;
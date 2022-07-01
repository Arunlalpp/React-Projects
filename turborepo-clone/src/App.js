import "./App.css";
import CradContainer from "./Components/CradContainer";
import CustomerLogos from "./Components/CustomerLogos";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeContainer from "./Components/HomeContainer";

function App() {
	return (
		<div>
			<Header />
			<HomeContainer />
			<CustomerLogos />
			<CradContainer />
			<Footer />
		</div>
	);
}

export default App;

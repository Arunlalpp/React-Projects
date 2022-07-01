import "./App.css";
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
			{/* <Footer /> */}
		</div>
	);
}

export default App;

import "./App.css";
import CustomerExperience from "./components/CustomerExperience";
import Header from "./components/Header";
import HomeBanner from "./components/HomeBanner";
import OutperformContainer from "./components/OutperformContainer";


function App() {
	return (
		<div>
			{/* <Header /> */}

			<HomeBanner />
			<OutperformContainer />
			<CustomerExperience />
		</div>
	);
}

export default App;

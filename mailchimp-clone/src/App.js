import "./App.css";
import CustomerExperience from "./components/CustomerExperience";
import Header from "./components/Header";
import HomeBanner from "./components/HomeBanner";
import Inspirations from "./components/Inspirations";
import OutperformContainer from "./components/OutperformContainer";

function App() {
	return (
		<div>
			{/* <Header /> */}

			<HomeBanner />
			<OutperformContainer />
			<CustomerExperience />
			<Inspirations />
		</div>
	);
}

export default App;

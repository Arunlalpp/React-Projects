import "./App.css";
import CustomerExperience from "./components/CustomerExperience";
import Header from "./components/Header";
import HomeBanner from "./components/HomeBanner";
import Inspirations from "./components/Inspirations";
import OutperformContainer from "./components/OutperformContainer";
import PlansBanner from "./components/PlansBanner";

function App() {
	return (
		<div>
			{/* <Header /> */}

			<HomeBanner />
			<OutperformContainer />
			<CustomerExperience />
			<Inspirations />
			<PlansBanner />
		</div>
	);
}

export default App;

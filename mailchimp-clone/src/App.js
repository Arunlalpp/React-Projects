import "./App.css";
import CustomerExperience from "./components/CustomerExperience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeBanner from "./components/HomeBanner";
import Inspirations from "./components/Inspirations";
import MailChimpFunctions from "./components/MailChimpFunctions";
import MobileHeader from "./components/MobileHeader";
import OutperformContainer from "./components/OutperformContainer";
import PlansBanner from "./components/PlansBanner";

function App() {
	return (
		<div>
			<MobileHeader />
			<Header />
			<HomeBanner />
			<OutperformContainer />
			<CustomerExperience />
			<Inspirations />
			<MailChimpFunctions />
			<PlansBanner />
			<Footer />
		</div>
	);
}

export default App;

import React from "react";
import "./App.css";
import { Header } from "./componets/Header";
import { ReactComponent as HeaderLogo } from "./componets/Svgfiles/HeaderLogo.svg";

function App() {
	return <Header HeaderLogo={HeaderLogo} />;
}

export default App;

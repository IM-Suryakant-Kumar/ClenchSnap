import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import MainContextProvider from "./contexts/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<MainContextProvider>
			<App />
		</MainContextProvider>
	</React.StrictMode>,
);

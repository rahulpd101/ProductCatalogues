import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import { FullBodyContainer, MainScrollableBody } from "./components/common/styles";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
	const lightTheme = createTheme({ palette: { mode: "light" } });
	return (
		<ThemeProvider theme={lightTheme}>
			<FullBodyContainer>
				<Header />
				<MainScrollableBody>
					<Content />
				</MainScrollableBody>
			</FullBodyContainer>
		</ThemeProvider>
	);
}

export default App;

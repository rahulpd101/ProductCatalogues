import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import { FullBodyContainer, MainScrollableBody } from "./components/common/styles";

function App() {
	return (
		<FullBodyContainer>
			<Header />
			<MainScrollableBody>
				<Content />
			</MainScrollableBody>
		</FullBodyContainer>
	);
}

export default App;

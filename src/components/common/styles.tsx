import { AppBar, Paper } from "@mui/material";
import { styled } from "@mui/system";

export const FullBodyContainer = styled("div")`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
`;

export const StyledAppBar = styled(AppBar)`
	background: #f5f5f5;
`;

export const MainScrollableBody = styled("div")`
	flex-grow: 1;
	overflow-y: scroll;
	padding: 1rem;
`;

export const StyledPaper = styled(Paper)`
	backgroundcolor: "#EBEBEB";
	padding: 1rem 2rem;
`;

import Toolbar from "@mui/material/Toolbar";
import { createStyles, makeStyles } from "@mui/styles";

import { StyledAppBar } from "./common/styles";
import { DrawerButton } from "../assets";
import Typography from "@mui/material/Typography";

const Header = () => {
	const useStyles = makeStyles(() =>
		createStyles({
			brandLogo: {
				display: "flex",
				marginLeft: "auto",
				marginRight: "auto",
			},
		})
	);
	const classes = useStyles();
	return (
		<StyledAppBar position="static" sx={{ height: 70 }}>
			<Toolbar>
				<Typography variant="button" component="div" sx={{ minHeight: 20, minWidth: 20 }}>
					<img src={DrawerButton} alt="options" />
				</Typography>
				<div className={classes.brandLogo}>
					<img
						style={{ height: 70, width: 300 }}
						src={process.env.PUBLIC_URL + "/company_logo2.jpg"}
						alt="brandLogo"
					/>
				</div>
			</Toolbar>
		</StyledAppBar>
	);
};

export default Header;

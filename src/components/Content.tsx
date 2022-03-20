import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { StyledPaper } from "./common/styles";

const Content: React.FC = () => {
	const [info, setInfo] = useState<Object | undefined>({});
	useEffect(() => {
		async function fetchInfo() {
			const response = await fetch(
				"http://34.221.173.36:5123/api/info/id/fcdeeed2-c26a-4cfc-b135-9c1b686333da"
			).then((res) => res.json());
			console.log(response.data.product.description);
			setInfo(response.data.product.description);
		}
		fetchInfo();
	}, []);

	const useStyles = makeStyles(() =>
		createStyles({
			mainContent: {
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				maxHeight: "fit-content",
				width: "100%",
			},
			logoPalette: {
				alignItems: "center",
				backgroundColor: "#EBEBEB",
				display: "flex",
				justifyContent: "center",
				minHeight: "400px",
				width: "100%",
			},
			productLogoContainer: {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "white",
				minHeight: "200px",
				minWidth: "200px",
			},
			productNameContainer: {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				marginBottom: 20,
				minHeight: 50,
				width: "100%",
			},
			ingredientsPalette: {
				alignItems: "center",
				backgroundColor: "#EBEBEB",
				display: "flex",
				justifyContent: "space-evenly",
				minHeight: "400px",
				width: "70%",
			},
			ingredientsHeader: {
				height: "fit-content",
				width: "70%",
				backgroundColor: "#EBEBEB",
				color: "green",
				display: "flex",
				justifyContent: "center",
				paddingTop: "10px",
				fontSize: "large",
				fontWeight: "bold",
			},
			certificateContainer: {
				display: "flex",
				alignItems: "center",
				justifyContent: "space-around",
				flexDirection: "column",
				marginTop: "20px",
				height: "fit-content",
				width: "fit-content",
			},
			certificateHolder: {
				display: "flex",
				flexDirection: "column",
				height: "fit-content",
				width: "fit-content",
				justifyContent: "center",
				alignItems: "center",
				border: "1px solid black",
				fontSize: "large",
				padding: "10px",
				borderRadius: "20%",
				margin: "40px",
			},
		})
	);
	const classes = useStyles();
	return (
		<div className={classes.mainContent}>
			<div className={classes.logoPalette}>
				<div className={classes.productLogoContainer}>
					<img object-fit="fill" src="http://34.221.173.36:5123/product1.png" alt="" />
				</div>
			</div>
			<div className={classes.productNameContainer}>PRoduct Name</div>
			<StyledPaper sx={{ width: "50%", marginBottom: "40px" }} elevation={3}>
				<Grid container justifyContent="center" alignItems="center">
					PROD DeScription
				</Grid>
			</StyledPaper>
			<div className={classes.ingredientsHeader}>INGREDIENTS</div>
			<div className={classes.ingredientsPalette}>
				<div className={classes.productLogoContainer}>
					<img src="http://34.221.173.36:5123/onions.png" alt="" />
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
						minHeight: "300px",
						minWidth: "300px",
						backgroundColor: "white",
					}}>
					<span style={{ margin: 10 }}>Name:</span>
					<span style={{ margin: 10 }}>Content:</span>
					<span style={{ margin: 10 }}>miniContent:</span>
					<span style={{ margin: 10 }}>percentage:</span>
					<span style={{ margin: 10 }}>origin:</span>
				</div>
			</div>
			<div className={classes.certificateContainer}>
				<div className={classes.certificateHolder}>
					<h3>Certificate Name</h3>
					<div className="logo">
						<img src="http://34.221.173.36:5123/ANTI_BACTERIAL.jpg" alt="" />
					</div>
					<div style={{ width: "100%", border: "2px dashed black" }}></div>
					<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>LOGO Name</div>
				</div>
				<div className={classes.certificateHolder}>
					<h3>Certificate Name</h3>
					<div className="logo">
						<img src="http://34.221.173.36:5123/NO_CHEMICALS.jpg" alt="" />
					</div>
					<div style={{ width: "100%", border: "2px dashed black" }}></div>
					<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>LOGO Name</div>
				</div>
			</div>
		</div>
	);
};

export default Content;

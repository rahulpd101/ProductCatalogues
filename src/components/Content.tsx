import { useState, useEffect } from "react";
import { Grid, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { StyledPaper } from "./common/styles";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		mainContent: {
			alignItems: "center",
			display: "flex",
			flexDirection: "column",
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
			minWidth: "80%",
		},
		productLogoContainer: {
			alignItems: "center",
			backgroundColor: "white",
			display: "flex",
			justifyContent: "center",
			minHeight: "150px",
			minWidth: "150px",
			borderRadius: "25%",
			margin: "15px",
		},
		productNameContainer: {
			alignItems: "center",
			display: "flex",
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
			height: "fit-content",
			width: "65%",
			[theme.breakpoints.down("md")]: {
				flexDirection: "column",
				backgroundColor: "blanchedalmond",
				width: "90%",
			},
		},
		ingredientsDetails: {
			display: "flex",
			fontFamily: "serif",
			justifyContent: "center",
			flexDirection: "column",
			height: "fit-content",
			width: "fit-content",
			paddingTop: "10px",
			paddingBottom: "10px",
		},
		ingredientsHeader: {
			backgroundColor: "#EBEBEB",
			color: "green",
			display: "flex",
			fontSize: "large",
			fontWeight: "bold",
			height: "fit-content",
			justifyContent: "center",
			paddingTop: "10px",
			width: "65%",
			[theme.breakpoints.down("md")]: {
				backgroundColor: "blanchedalmond",
				width: "90%",
			},
		},
		certificateContainer: {
			alignItems: "center",
			display: "flex",
			flexDirection: "column",
			fontSize: "large",
			fontWeight: "bold",
			color: "green",
			height: "fit-content",
			justifyContent: "space-around",
			marginTop: "40px",
			width: "fit-content",
		},
		certificateHolder: {
			alignItems: "center",
			border: "1px solid black",
			borderRadius: "20%",
			display: "flex",
			flexDirection: "column",
			fontSize: "large",
			height: "260px",
			width: "200px",
			justifyContent: "center",
			margin: "40px",
		},
	})
);

type InfoType = {
	data: DataType;
};

type DataType = {
	product: ProductType;
};

type ProductType = {
	name: string;
	description: string;
	img: string;
	ingredients: Array<IngredientsType>;
	certificates: Array<CertificateType>;
};

type IngredientsType = {
	name: string;
	content: string;
	miniContent: string;
	percentage: string;
	origin: string;
	img: string;
};

type CertificateType = {
	name: string;
	link: string;
	img: string;
};

const Content: React.FC = () => {
	const [info, setInfo] = useState<InfoType>();
	let headers = new Headers();
	headers.append("Content-Type", "application/json");
	headers.append("Accept", "application/json");
	headers.append("Access-Control-Allow-Origin", "http://localhost:3000");

	useEffect(() => {
		async function fetchInfo() {
			const response = await fetch(
				"http://34.221.173.36:5123/api/info/id/fcdeeed2-c26a-4cfc-b135-9c1b686333da"
			).then((res) => res.json());
			console.log(response);
			setInfo(response);
		}
		fetchInfo();
	}, []);

	setTimeout(() => {
		async function status1() {
			const response = await fetch("http://34.221.173.36:5123/api/info/sessionStatus").then((res) =>
				res.json()
			);
			console.log(response);
		}
		status1();
	}, 5000);

	setTimeout(() => {
		async function status1() {
			const response = await fetch("http://34.221.173.36:5123/api/info/someOtherStatus").then((res) =>
				res.json()
			);
			console.log(response);
		}
		status1();
	}, 8000);

	const classes = useStyles();
	return (
		<div className={classes.mainContent}>
			<div className={classes.logoPalette}>
				<div className={classes.productLogoContainer}>
					<img src={`http://34.221.173.36:5123/${info?.data.product.img}.png`} alt="" />
				</div>
			</div>
			<div className={classes.productNameContainer}>{info?.data.product.name}</div>
			<StyledPaper
				sx={{ width: "50%", fontSize: "large", fontFamily: "serif", lineHeight: "1.5", marginBottom: "40px" }}
				elevation={3}>
				<Grid container justifyContent="center" alignItems="center">
					{info?.data.product.description}
				</Grid>
			</StyledPaper>
			<div className={classes.ingredientsHeader}>INGREDIENTS</div>
			<div className={classes.ingredientsPalette}>
				<div className={classes.productLogoContainer}>
					<img height="90%" width="90%" src="http://34.221.173.36:5123/onions.png" alt="" />
				</div>
				{info?.data.product.ingredients.map((item) => {
					return (
						<div className={classes.ingredientsDetails}>
							<span style={{ margin: 10 }}>Name: {item.name}</span>
							<span style={{ margin: 10 }}>Content: {item.content}</span>
							<span style={{ margin: 10 }}>MiniContent: {item.miniContent}</span>
							<span style={{ margin: 10 }}>Percentage: {item.percentage}</span>
							<span style={{ margin: 10 }}>Origin: {item.origin}</span>
						</div>
					);
				})}
			</div>
			<div className={classes.certificateContainer}>
				CERTIFICATES
				{info?.data.product.certificates.map((item) => {
					return (
						<div className={classes.certificateHolder}>
							<h3>{item.name}</h3>
							<div className="logo">
								<a href={`${item.link}`} target="_blank" rel="noopener noreferrer">
									<img src={`http://34.221.173.36:5123/${item.img}.jpg`} alt="" />
								</a>
							</div>
							<div style={{ width: "100%", border: "2px dashed black" }}></div>
							<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
								{item.img}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Content;

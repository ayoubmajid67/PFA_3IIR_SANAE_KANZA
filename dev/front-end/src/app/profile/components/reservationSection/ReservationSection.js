import "./ReservationSection.css";
import PersonsCounter from "./../../../../components/personsCounter/PersonsCounter";
import ReservationBillBox from "./../../../../components/reservationBillBox/ReservationBillBox";
const offer1Img = "/assets/imgs/offer1.png";
const offer2Img = "/assets/imgs/offer2.png";
const offer3Img = "/assets/imgs/offer3.png";
import { Button } from "@mui/material";
import BillInfo from "./../../../../components/billInfo/BillInfo";
export default function ReservationSection({ customClass = "" }) {
	return (
		<div className={`ReservationSectionComponentClass ${customClass}`}>
			<div className="header">
				<h1 className="title">Reservations</h1>
			</div>
			<div className="mainContent">
				<div className="myReservationsContainer">
					<ReservationBillBox offerImg={offer1Img} hotelName="Hotel Al Kabir" />
					<ReservationBillBox offerImg={offer2Img} hotelName="Eden Andalou Aquapark & Spa" />
					<ReservationBillBox offerImg={offer3Img} hotelName="Le Palais Averroes" />
					<ReservationBillBox offerImg={offer3Img} hotelName="Le Palais Averroes" />
					<ReservationBillBox offerImg={offer3Img} hotelName="Le Palais Averroes" />
					<ReservationBillBox offerImg={offer3Img} hotelName="Le Palais Averroes" />
				</div>

				<div className="billDetailsContainer">
					<h2 className="billDetailsTitle">Bill Details</h2>

					<BillInfo label="Hotel Name:" value="Hotel Al Kabir" />
					<BillInfo label="Guest Full Name:" value="Salma Si" />
					<BillInfo label="Number of persons:">
						<PersonsCounter customClass="nbrPersonsValue" nbrAdults={2} nbrChildren={1} />
					</BillInfo>
					<BillInfo label="Price:" value="1800 DH" />
					<BillInfo label="Check-in:" value="Sat, Jan 11, 2025 2:00 PM - 8:00 PM" />
					<BillInfo label="Check-out:" value="Sat, Jan 18, 2025 8:30 AM - 12:30 PM" />
					<BillInfo label="Stay Duration:" value="1 Week" />

					<Button variant="contained" className="printBillButton">
						Print Bill
					</Button>
				</div>
			</div>
		</div>
	);
}

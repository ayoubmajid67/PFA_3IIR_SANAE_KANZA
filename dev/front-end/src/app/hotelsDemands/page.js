"use client"
import React from "react";
import "./HotelsDemands.css";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download"; // Import download icon
import CheckIcon from "@mui/icons-material/Check"; // Import accept icon
import CloseIcon from "@mui/icons-material/Close"; // Import refuse icon


export default function HotelsDemands({ customClass }) {
	// Sample data for hotel demands
	const hotelDemands = [
		{
			id: 1,
			name: "Hotel Al Kabir",
			telephone: "+212 600 000 000",
			email: "contact@hotelalkabir.com",
			reportUrl: "/assets/pdfs/report.pdf",
		},
		{
			id: 2,
			name: "Eden Andalou Aquapark & Spa",
			telephone: "+212 600 000 001",
			email: "info@edenandalou.com",
			reportUrl: "/assets/pdfs/report.pdf",
		},
		{
			id: 3,
			name: "Snow Reservations",
			telephone: "+212 600 000 002",
			email: "support@snowreservations.com",
			reportUrl: "/assets/pdfs/report.pdf",
		},
	];

	// Handle accept action
	const handleAccept = (id) => {
		console.log(`Hotel ${id} accepted`);
		// Add logic to update the status to "Accepted"
	};

	// Handle refuse action
	const handleRefuse = (id) => {
		console.log(`Hotel ${id} refused`);
		// Add logic to update the status to "Refused"
	};

	return (
		<div className={`PageComponentClass HotelsDemandsComponentClass ${customClass}`}>
			<div className="demandsContainer">
				<table className="demandsTable">
					<thead>
						<tr>
							<th>Hotel Name</th>
							<th>Telephone</th>
							<th>Email</th>
							<th>Demand Report</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{hotelDemands.map((hotel) => (
							<tr key={hotel.id}>
								<td>{hotel.name}</td>
								<td>{hotel.telephone}</td>
								<td>{hotel.email}</td>
								<td>
									<Button variant="contained" color="primary" startIcon={<DownloadIcon />}>
										<a href={hotel.reportUrl} download >

                    Download
                    </a>

									</Button>
								</td>
								<td>
									<Button variant="contained" color="success" startIcon={<CheckIcon />} onClick={() => handleAccept(hotel.id)} sx={{ marginRight: "10px" }}>
										Accept
									</Button>
									<Button variant="contained" color="error" startIcon={<CloseIcon />} onClick={() => handleRefuse(hotel.id)}>
										Refuse
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

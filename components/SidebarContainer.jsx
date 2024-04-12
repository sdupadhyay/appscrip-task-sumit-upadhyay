"use client";
import { Accordion } from "@/components/Accordion";
import { Card } from "@/components/Card";
import Image from "next/image";
import { useState } from "react";
export const SidebarContainer = ({ response }) => {
	const [state, setState] = useState(true);
	return (
		<>
			<div className="sorting-navigation">
				<div className="m-hide total-items">
					<strong>{response?.length} Items</strong>
					<div
						onClick={() => setState(!state)}
						style={{
							display: "flex",
							gap: "10px",
							color: "#888792",
							textDecoration: "underline",
						}}
					>
						<Image
							src={
								state
									? "https://img.icons8.com/ios/50/000000/less-than.png"
									: "https://img.icons8.com/ios/50/000000/forward--v1.png"
							}
							alt={state ? "hide filter" : "show filter"}
							width={20}
							height={20}
						/>
						{state ? "Hide Filter" : "Show Filter"}
					</div>
				</div>
				<div
					style={{
						width: "50%",
						borderRight: "1px solid grey",
						display: "flex",
						textAlign: "center",
					}}
					className="l-hide"
				>
					FILTER
				</div>
				<div>
					<select className="filter">
						<option value="">RECOMMENDED</option>
						<option value="dog">NEWEST FIRST</option>
						<option value="cat">POPULAR</option>
						<option value="parrot">PRICE : HIGH TO LOW</option>
						<option value="spider">PRICE : LOW TO HIGH</option>
					</select>
				</div>
			</div>
			<div className="card-container m-hide">
				{state ? (
					<div className="filter-container">
						{[
							"IDEAL FOR",
							"OCCASION",
							"WORK",
							"FABRIC",
							"SEGMENT",
							"RAW MATERIALS",
							"PATTERN",
						]?.map((ele, ind) => (
							<Accordion key={ind} title={ele} />
						))}
					</div>
				) : null}
				<div className="card-section">
					{response?.map((ele) => (
						<Card key={ele?.id} title={ele?.title} imageUrl={ele?.image} />
					))}
				</div>
			</div>
			<div className="card-container-mobile l-hide">
				{response?.map((ele, ind) => (
					<Card
						key={ele?.id}
						title={ele?.title}
						imageUrl={ele?.image}
						priority={ind < 5}
					/>
				))}
			</div>
		</>
	);
};

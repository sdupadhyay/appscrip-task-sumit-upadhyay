"use client";
import Image from "next/image";
import witlist from "@/public/witlist.png";
import selectedWitlist from "@/public/witlist-selected.png";
import { useState } from "react";
export const Card = ({ title = "", imageUrl = "", priority = false }) => {
	const [selected, setSelected] = useState(false);
	return (
		<div className="card">
			<div>
				<Image
					unoptimized
					src={imageUrl}
					width={150}
					height={200}
					alt={title}
					style={{ width: "100%" }}
					priority
				/>
			</div>

			<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
				<h3>{title}</h3>
				<div className="d-flex">
					<p>
						<span>Sign in</span> or Create a account to see pricing
					</p>
					<Image
						src={selected ? selectedWitlist : witlist}
						width={20}
						unoptimized
						height={20}
						alt={selected ? "witlisted" : "witlist"}
						onClick={() => setSelected(!selected)}
						priority
					/>
				</div>
			</div>
		</div>
	);
};

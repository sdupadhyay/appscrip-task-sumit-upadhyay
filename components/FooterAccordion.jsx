"use client";
import Image from "next/image";
import { useState } from "react";
export const FooterAccordion = ({ title = "", list = [] }) => {
	const [toogle, setToogle] = useState(false);
	const handleClick = () => setToogle(!toogle);
	return (
		<div className="footer-accordion">
			<div className="heading">
				<strong>{title}</strong>
				<span onClick={handleClick}>
					<Image
						src={toogle ? "/white-arrow-up.png" : "/white-arrow-down.png"}
						width={20}
						height={20}
						alt={""}
					/>
				</span>
			</div>
			{toogle ? (
				<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
					{list?.map((ele, ind) => (
						<p key={ind}>{ele}</p>
					))}
				</div>
			) : null}
		</div>
	);
};

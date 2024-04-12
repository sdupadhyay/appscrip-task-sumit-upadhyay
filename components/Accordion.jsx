"use client";
import Image from "next/image";
import { useState } from "react";
import arrowDown from "@/public/arrow-left.png";
export const Accordion = ({ title = "" }) => {
	const [toogle, setToogle] = useState(false);
	const handleClick = () => setToogle(!toogle);
	return (
		<div className="accordion">
			<div className="heading">
				<strong>{title}</strong>
				<span onClick={handleClick}>
					<Image
						src={
							toogle
								? "https://img.icons8.com/android/24/collapse-arrow.png"
								: arrowDown
						}
						width={20}
						height={20}
						alt={""}
					/>
				</span>
			</div>
			<div>All</div>
			{toogle ? (
				<div>
					<div className="">
						<div className="d-flex">
							<input type="checkbox" />
							<label>Men</label>
						</div>
						<div className="d-flex">
							<input type="checkbox" />
							<label>Women</label>
						</div>
						<div className="d-flex">
							<input type="checkbox" />
							<label>Baby and Kids</label>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};

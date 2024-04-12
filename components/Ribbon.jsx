import Image from "next/image";
export const Ribbon = () => {
	return (
		<div className="ribbon-container">
			{[0, 1, 2]?.map((ele) => (
				<div className={`d-flex ${ele == 0 ? "" : "m-hide"}`} key={ele}>
					<Image
						src={"/ribbon-icon.png"}
						width={15}
						height={15}
						alt="Lorem ipsum dolor"
					/>
					Lorem ipsum dolor
				</div>
			))}
		</div>
	);
};

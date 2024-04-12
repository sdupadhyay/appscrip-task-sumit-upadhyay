import Image from "next/image";
import logoSymbol from "@/public/Logo.png";
import searchSymbol from "@/public/search-normal.png";
import heartSymbol from "@/public/heart.png";
import arrowLeft from "@/public/arrow-left.png";
export const Navbar = () => {
	return (
		<>
			<nav>
				<div className="nav-bar">
					<Image
						unoptimized
						src={logoSymbol}
						width={40}
						height={40}
						alt="symbol"
					/>

					<div>LOGO</div>
					<div>
						<ul>
							<li>
								<Image
									unoptimized
									src={searchSymbol}
									width={20}
									height={20}
									alt="search"
								/>
							</li>
							<li>
								<Image
									unoptimized
									src={heartSymbol}
									width={20}
									height={20}
									alt="witlist"
								/>
							</li>
							<li>
								<Image
									unoptimized
									src={"/shopping-bag.png"}
									width={20}
									height={20}
									alt="shoping cart"
								/>
							</li>
							<li className="m-hide">
								<Image
									unoptimized
									src={"./profile.png"}
									width={20}
									height={20}
									alt="profile"
								/>
							</li>
							<li className="m-hide">
								<div style={{ display: "flex", gap: "5px" }}>
									ENG
									<Image
										unoptimized
										src={arrowLeft}
										width={20}
										height={20}
										alt="symbol"
									/>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className="category-container m-hide">
					<ul>
						<li>SHOP</li>
						<li>SKILLS</li>
						<li>STORIES</li>
						<li>ABOUT</li>
						<li>CONTACT US</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

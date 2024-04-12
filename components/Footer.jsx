import Image from "next/image";
import usaMap from "@/public/usa-map.png";
import instagramIcon from "@/public/insta.png";
import linkedinIcon from "@/public/a.png";
import amexIcon from "@/public/amex.png";
import { FooterAccordion } from "./FooterAccordion";
export const Footer = () => {
	return (
		<footer>
			<div className="m-hide">
				<div className="footer-container-1">
					<div className="footer-section-1">
						<h3>BE THE FIRST TO KNOW</h3>
						<p>Sign up for updates from metta muse.</p>
						<div className="subscribe-section">
							<input placeholder="Enter your e-mail..." />
							<button>SUBSCRIBE</button>
						</div>
					</div>
					<div className="footer-section-2">
						<div>
							<h3>CONTACT US</h3>
							<p>+44 221 133 5360</p>
							<p>customercare@mettamuse.com</p>
						</div>
						<div>
							<h3>CURRENCY</h3>
							<div style={{ display: "flex", gap: "20px" }}>
								<Image
									src={usaMap}
									alt="USA"
									width={20}
									height={20}
									unoptimized
								/>
								<ul>
									<li>USD</li>
								</ul>
							</div>
							<p style={{ fontSize: "12px" }}>
								Transaction will be completed in Euros and a currency referenc
								is available on hover
							</p>
						</div>
					</div>
				</div>
				<div className="footer-container-2">
					<div className="footer-section-1 flex-row" style={{ gap: "150px" }}>
						<div className="list">
							<h3>metta muse</h3>
							<p>About Us</p>
							<p>Stories</p>
							<p>Artisans</p>
							<p>Boutiques</p>
							<p>Contact Us</p>
							<p>EU Compliances Docs</p>
						</div>
						<div className="list">
							<h3>metta muse</h3>
							<p>About Us</p>
							<p>Stories</p>
							<p>Artisans</p>
							<p>Boutiques</p>
							<p>Contact Us</p>
							<p>EU Compliances Docs</p>
						</div>
					</div>
					<div className="footer-section-2">
						<div>
							<h3>FOLLOW US</h3>
							<div style={{ display: "flex", gap: "10px" }}>
								<Image
									unoptimized
									src={instagramIcon}
									width={30}
									height={30}
									alt="Instagram"
								/>
								<Image
									unoptimized
									src={linkedinIcon}
									width={30}
									height={30}
									alt="Instagram"
								/>
							</div>
						</div>
						<div>
							<h3>metta muse ACCEPTS</h3>
							<div className="d-flex">
								{[
									{ path: "/google-pay.png", alt: "google pay" },
									{ path: "/master-card.png", alt: "master card" },
									{ path: "/pay-pal.png", alt: "pay pal" },
									{ path: "/amex.png", alt: "amex" },
									{ path: "/applepay.png", alt: "apple pay" },
									{ path: "/2-pay.png", alt: "pay" },
								]?.map((ele, ind) => (
									<Image
										key={ind}
										unoptimized
										src={ele?.path}
										width={40}
										height={40}
										alt={ele?.alt}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
				<p className="copy-write-text">
					Copyright 2003 mettamuse. All rights reserved.
				</p>
			</div>
			<div className="l-hide default-width">
				<div className="footer-section-1">
					<h3>BE THE FIRST TO KNOW</h3>
					<p>
						Lorem lpsum is simply dummy text of the printing and typesetting
						industry. this is simply dummy text.
					</p>
					<div className="subscribe-section">
						<input placeholder="Enter your e-mail..." />

						<button>SUBSCRIBE</button>
					</div>
				</div>
				<div className="footer-section-1">
					<h3>CALL US</h3>
					<p>+44 221 133 5360 customercare@mettamuse.com</p>
				</div>
				<div className="footer-section-1">
					<h3>CURRENCY</h3>
					<div style={{ display: "flex", gap: "20px" }}>
						<Image src={usaMap} alt="USA" width={20} height={20} unoptimized />
						<ul>
							<li>USD</li>
						</ul>
					</div>
				</div>
				<div className="footer-section-1">
					<FooterAccordion
						title={"metta muse"}
						list={[
							"About us",
							"Stories",
							"Artisans",
							"Boutiques",
							"Contact Us",
							"EU Compilances Docs",
						]}
					/>
				</div>
				<div className="footer-section-1">
					<FooterAccordion
						title={"Quick Links"}
						list={[
							"About us",
							"Stories",
							"Artisans",
							"Boutiques",
							"Contact Us",
							"EU Compilances Docs",
						]}
					/>
				</div>
				<div className="footer-section-1">
					<h3>metta muse ACCEPTS</h3>
					<div className="d-flex">
						{[
							{ path: "/google-pay.png", alt: "google pay" },
							{ path: "/master-card.png", alt: "master card" },
							{ path: "/pay-pal.png", alt: "pay pal" },
							{ path: "/amex.png", alt: "amex" },
							{ path: "/applepay.png", alt: "apple pay" },
							{ path: "/2-pay.png", alt: "pay" },
						]?.map((ele, ind) => (
							<Image
								key={ind}
								unoptimized
								src={ele?.path}
								width={40}
								height={40}
								alt={ele?.alt}
							/>
						))}
					</div>
				</div>
				<p className="copy-write-text">
					Copyright 2003 mettamuse. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

import { Footer } from "@/components/Footer";
import { HeadingSection } from "@/components/HeadingSection";
import { Navbar } from "@/components/Navbar";
import { Ribbon } from "@/components/Ribbon";
import { SidebarContainer } from "@/components/SidebarContainer";
import { getProductList } from "@/data/getProductList";
import "@/styles/styles.css";
export default async function Home() {
	const response = await getData();
	return (
		<main>
			<Ribbon />
			<Navbar />
			<HeadingSection />
			<div className="sidebar-padding">
				<SidebarContainer response={response} />
			</div>
			<Footer />
		</main>
	);
}
export async function getData() {
	const res = await getProductList();
	return res;
}

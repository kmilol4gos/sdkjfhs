import ReactDOM from "react-dom/client";
import { Route, Routes, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Logo from "./assets/Aguila_Sola.png";
import Menu from "./assets/HamburgerMenu.svg";
import Instagram from "./assets/Instagram-icon.svg";
import WhatsApp from "./assets/Whatsapp-icon.svg";
import ShoppingCart from "./assets/Shopping-cart.png";
import Webpay from "./assets/logo-webpay.png";
import Catalogo from "./Catalogo";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<header className="w-full fixed top-0 z-50">
			<nav className="w-full h-20 flex items-center bg-mainColor z-50 justify-between shadow-lg relative">
				<picture className="order-5">
					<Link to="/">
						<img
							src={Logo}
							alt="Logo AquilaBrand"
							className="w-20 drop-shadow-aq hover:scale-110 duration-100 "
						/>
					</Link>
				</picture>
				<div className="order-1 flex items-center my-2 mx-8">
					<button className="border-none bg-transparent cursor-pointer hover:scale-110 duration-100">
						<img src={Menu} alt="" />
					</button>
				</div>
				<picture className="order-3">
					<a
						href="https://www.instagram.com/?hl=es"
						target="_blank"
						rel="noreferrer"
					>
						<img src={Instagram} alt="" />
					</a>
				</picture>
				<picture className="order-5">
					<a href="" rel="noreferrer" target="_blank">
						<img src={WhatsApp} alt="" />
					</a>
				</picture>
				<div className="my-2 mx-4 order-6">
					<button className="border-none bg-transparent cursor-pointer hover:scale-110 duration-100">
						<img
							src={ShoppingCart}
							alt=""
							className="w-12 m-2 drop-shadow-aq"
						/>
					</button>
				</div>
			</nav>
			{/* <nav
				id="dropdown-menu"
				className="fixed top-20 z-50 block w-full overflow-hidden rounded-bl-xl rounded-br-xl bg-black text-white"
			>
				<ul
					className="flex w-full list-none justify-around
					[&>li]:mx-3 [&>li]:h-full [&>li]:w-72 [&>li]:flex [&>li]:flex-col [&>li]:items-center
					[&>li>a]:inline-block [&>li>a]:pt-3 [&>li>a]:pb-1 [&>li>a]:text-xl [&>li>a]:font-bold [&>li>a]:self-center [&>li>a]:w-36
					[&>li>div]:flex [&>li>div]:flex-col [&>li>div]:justify-center [&>li>div]:my-2
					[&>li>div>a]:text-s [&>li>div>a]:w-36 [&>li>div>a]:p-1 [&>li>div>a]:my-1 [&>li>div>a]:px-3 [&>li>div>a]:rounded"
				>
					<li>
						<Link to="/Catalogo">Ropa</Link>
						<div>
							<Link to="/" className="hover:bg-mainColor">
								Poleras
							</Link>
							<Link to="/" className="hover:bg-mainColor">
								Pantalones
							</Link>
							<Link to="" className="hover:bg-mainColor">
								Polerones
							</Link>
							<Link to="" className="hover:bg-mainColor">
								Faldas
							</Link>
						</div>
					</li>
					<li>
						<Link to="/">Skate</Link>
						<div>
							<Link to="/" className="hover:bg-mainColor">
								Ruedas
							</Link>
							<Link to="/" className="hover:bg-mainColor">
								Tablas
							</Link>
						</div>
					</li>
					<li>
						<Link to="/">Accesorios</Link>
						<div>
							<Link to="/" className="hover:bg-mainColor">
								Bolsos
							</Link>
							<Link to="/" className="hover:bg-mainColor">
								Pulseras
							</Link>
							<Link to="/" className="hover:bg-mainColor">
								Collares
							</Link>
						</div>
					</li>
					<li>
						<Link to="Informacion">Informacion</Link>
						<div>
							<Link to="/" className="hover:bg-mainColor">
								Eventos
							</Link>
							<Link to="/" className="hover:bg-mainColor">
								Quienes Somos
							</Link>
							<Link to="/" className="hover:bg-mainColor">
								Contacto
							</Link>
						</div>
					</li>
				</ul>
			</nav> */}
		</header>
		<footer className="absolute bottom-0 h-60 mt-24 bg-black w-screen">
			<section className="mx-40 h-full flex justify-between items-stretch text-white">
				<div className="flex flex-col w-52">
					<h3 className="text-2xl font-normal my-4">Informacion</h3>
					<ul className="flex flex-col">
						<li>
							<Link
								to="/"
								className="font-normal text-lg py-2 hover:text-mainColor "
							>
								Eventos
							</Link>
						</li>
						<li>
							<Link
								to="/"
								className="font-normal text-lg py-2 hover:text-mainColor "
							>
								Quienes Somos
							</Link>
						</li>
						<li>
							<Link
								to="/"
								className="font-normal text-lg py-2 hover:text-mainColor "
							>
								Contacto
							</Link>
						</li>
					</ul>
				</div>
				<div className="flex flex-col w-52">
					<img src={Webpay} alt="Logo de WebPay" />
				</div>
				<div className="flex flex-col w-52">
					<h3 className="text-2xl font-normal my-4">Redes Sociales</h3>
					<ul className="flex flex-col">
						<li>
							<Link
								to=""
								className="font-normal text-lg my-2 hover:text-mainColor"
							>
								{" "}
								Instagram
							</Link>
						</li>
						<li>
							<Link
								to=""
								className="font-normal text-lg my-2 hover:text-mainColor"
							>
								{" "}
								WhatsApp
							</Link>
						</li>
					</ul>
				</div>
			</section>
		</footer>
		<Routes>
			<Route path="/" element={<App />} />;
			<Route path="/Catalogo" element={<Catalogo />} />
			<Route path="/" element={<App />} />
			<Route path="/" element={<App />} />
			<Route path="/" element={<App />} />
			<Route path="/" element={<App />} />
		</Routes>
	</BrowserRouter>
);

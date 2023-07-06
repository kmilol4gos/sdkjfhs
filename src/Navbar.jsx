import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./assets/Aguila_Sola.png";
import Instagram from "./assets/Instagram-icon.svg";
import WhatsApp from "./assets/Whatsapp-icon.svg";
import ShoppingCart from "./assets/Shopping-cart.png";
import IconMenu from "./assets/HamburgerMenu.svg";
import Cart from "./Cart";

const Menu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	const toggleCart = () => {
		setIsCartOpen(!isCartOpen);
	};
	return (
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
					<button
						onClick={toggleMenu}
						className="border-none bg-transparent cursor-pointer hover:scale-110 duration-100"
					>
						<img src={IconMenu} alt="" />
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
					<a href="https://www.google.cl" rel="noreferrer" target="_blank">
						<img src={WhatsApp} alt="" />
					</a>
				</picture>
				<div className="my-2 mx-4 order-6">
					<button
						onClick={toggleCart}
						className="border-none bg-transparent cursor-pointer hover:scale-110 duration-100"
					>
						<img
							src={ShoppingCart}
							alt=""
							className="w-12 m-2 drop-shadow-aq"
						/>
					</button>
				</div>
			</nav>
			{isOpen && (
				<nav
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
							<Link to="/ropa">Ropa</Link>
							<div>
								<Link to="/ropa/poleras" className="hover:bg-mainColor">
									Poleras
								</Link>
								<Link to="/ropa/pantalones" className="hover:bg-mainColor">
									Pantalones
								</Link>
								<Link to="/ropa/polerones" className="hover:bg-mainColor">
									Polerones
								</Link>
								<Link to="/ropa/faldas" className="hover:bg-mainColor">
									Faldas
								</Link>
							</div>
						</li>
						<li>
							<Link to="/skate">Skate</Link>
							<div>
								<Link to="/skate/ruedas" className="hover:bg-mainColor">
									Ruedas
								</Link>
								<Link to="/skate/tablas" className="hover:bg-mainColor">
									Tablas
								</Link>
							</div>
						</li>
						<li>
							<Link to="/accesorios">Accesorios</Link>
							<div>
								<Link to="/accesorios/bolsos" className="hover:bg-mainColor">
									Bolsos
								</Link>
								<Link to="/accesorios/pulseras" className="hover:bg-mainColor">
									Pulseras
								</Link>
								<Link to="/accesorios/collares" className="hover:bg-mainColor">
									Collares
								</Link>
							</div>
						</li>
						<li>
							<Link to="Informacion">Informacion</Link>
							<div>
								<Link to="/events" className="hover:bg-mainColor">
									Eventos
								</Link>
								<Link to="/info" className="hover:bg-mainColor">
									Quienes Somos
								</Link>
							</div>
						</li>
					</ul>
				</nav>
			)}
			{isCartOpen && <Cart />}
		</header>
	);
};

export default Menu;

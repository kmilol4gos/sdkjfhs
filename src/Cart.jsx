import { useCart } from "./hook/useCart";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { motion } from "framer-motion";
import { Cart_Amount, Cart_Cantidad } from "./hook/datosCart";
import AddIcon from "./assets/Add.svg";
import DeleteIcon from "./assets/Delete.svg";

function CartProduct_Card({
	PRODUCT_NAME,
	PRODUCT_ID,
	SIZE_NAME,
	COLOR_NAME,
	PRECIO,
	quantity,
	addToCart,
	removeFromCart,
	images,
}) {
	let ImagePrincipal = [];
	const filterImages = images.filter(
		(item) => item.COLOR_NAME === COLOR_NAME && item.PRODUCT_ID === PRODUCT_ID
	);
	if (!filterImages[0]) {
	} else {
		ImagePrincipal = filterImages[0].IMAGE;
	}

	return (
		<div className="my-2 flex flex-col justify-center bg-mainColor">
			<div className="flex w-[90%] items-stretch pt-4 pb-6" id="card-product">
				<div className="w-[30%] flex justify-center items-center mx-2">
					<Link to="/product/idproducto">
						<img
							src={ImagePrincipal}
							alt=""
							className="w-full h-full object-cover border-none"
						/>
					</Link>
				</div>
				<div className="flex justify-center flex-grow items-stretch ml-2">
					<div className="w-full h-full flex flex-col justify-around text-white items-start">
						<Link to="/" className="font-bold text-xl no-underline">
							{PRODUCT_NAME}
						</Link>
						<div className="flex flex-col my-2">
							<span className="font-light text-xs">Talla: {SIZE_NAME}</span>
							<span className="font-light text-xs">Color: {COLOR_NAME}</span>
							<span className="font-light text-xs">Cantidad: {quantity}</span>
						</div>
						<div>
							<span className="font-normal text-xl before:content-['$']">
								{PRECIO}
							</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-around">
					<button>
						<img src={DeleteIcon} alt="" onClick={removeFromCart} />
					</button>
					<button>
						<img src={AddIcon} alt="" onClick={addToCart} />
					</button>
				</div>
			</div>
		</div>
	);
}

export default function Cart() {
	const {
		cart,
		clearCart,
		addToCart,
		calcularTotal,
		removeFromCart,
		calcularCantidad,
	} = useCart();

	const [images, setImages] = useState([]);

	const URLIMG = "http://localhost:3000/images";

	const Imagenes = async () => {
		const response = await fetch(URLIMG, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const responseJSON = await response.json();
		setImages(responseJSON);
	};

	useEffect(() => {
		Imagenes();
	}, []);

	if (!images) {
		return (
			<div className="relative flex justify-center items-center w-screen h-screen">
				<TailSpin color="#e2fcef" height={80} width={80} />
			</div>
		);
	}

	return (
		<motion.nav
			initial={{ opacity: 0, x: 20 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -20 }}
			transition={{ duration: 0.3 }}
			className="z-40 top-0 fixed right-0 h-screen flex flex-col w-[30rem]"
		>
			<div className="w-full top-20 h-full relative bg-black">
				<div className="flex justify-center p-4 border-b-2 border-solid border-white">
					<h3 className="text-white px-6 text-2xl font-bold">Carrito</h3>
				</div>
				<div className="relative overflow-y-auto h-[64%]">
					<div className="flex flex-col">
						<div className="h-[85%]">
							{cart.map((product) => (
								<CartProduct_Card
									key={
										product.PRODUCT_ID + product.COLOR_NAME + product.SIZE_NAME
									}
									addToCart={() => addToCart(product)}
									removeFromCart={() => removeFromCart(product)}
									{...product}
									images={images}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="border-t-2 border-solid border-white absolute w-full bottom-0 z-50 text-white bg-mainColor">
				<div className="flex justify-between items-center px-6 m-2">
					<h4>Productos</h4>
					<span className="text-sm font-medium">{<Cart_Cantidad />}</span>
				</div>
				<div className="flex justify-between items-center px-6 m-2">
					<h4>Total</h4>
					<span className="text-sm font-medium before:content-['$']">
						{<Cart_Amount />}
					</span>
				</div>
				<div className="flex justify-center w-full">
					<Link
						to="/checkout"
						className="text-center w-full py-4 border-none bg-black text-white text-sm font-medium cursor-pointer ease-in-out duration-100 hover:text-black hover:bg-white"
					>
						Finalizar Compra
					</Link>
				</div>
			</div>
		</motion.nav>
	);
}

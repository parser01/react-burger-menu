import "./menu.css";

const Menu = ({ isOpen, setIsOpen, items, onClose = () => {} }) => {
	if (isOpen) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "auto";
	}

	return (
		<div className={isOpen ? "menu menu_open" : "menu"}>
			<i
				className="material-icons menu__close"
				onClick={() => {
					setIsOpen(false);
					onClose();
				}}
			>
				close
			</i>
			<div className="menu__content">
				<ul>
					{items.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Menu;

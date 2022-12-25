import { useState } from "react";
import "./App.css";
import Menu from "./Menu/Menu";

const App = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const menuItems = [
		<a href="https://google.com">Google</a>,
		<a href="https://youtube.com">YouTube</a>,
		<a href="https://instagram.com">Instagram</a>,
		<a href="https://facebook.com">Facebook</a>,
	];

	const openMenu = () => {
		setMenuIsOpen(true);
	};

	return (
		<div className="app">
			<header className="header">
				<i className="material-icons burger-btn" onClick={openMenu}>
					menu
				</i>
			</header>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
				saepe quasi qui provident harum voluptatibus neque ipsum! Excepturi,
				autem. Laboriosam repudiandae hic exercitationem, quam aliquid,
				ipsum incidunt praesentium aliquam assumenda, ad voluptatibus cum
				tempora deleniti at suscipit impedit magnam facilis cupiditate
				obcaecati perspiciatis! Suscipit quidem laborum placeat nulla,
				impedit vero adipisci consequatur sit assumenda ratione cumque?
				Architecto error maiores, ad eveniet corrupti voluptas unde eos
				incidunt deserunt dignissimos at culpa, ut quibusdam voluptates
				fugit totam officiis quos deleniti placeat ullam. Libero cumque vero
				consequuntur perspiciatis aperiam voluptatibus a iusto laudantium
				reprehenderit odio incidunt ducimus architecto dolorem, obcaecati
				dolorum praesentium. Non voluptatum dolores ad est repellendus
				laudantium excepturi magnam accusamus! Nulla iusto voluptate eius
				minus dolores, et quaerat aperiam id necessitatibus odit atque ipsa
				dicta numquam porro a repellat neque, odio, deserunt animi quidem.
				Modi quas itaque possimus iusto autem tempora nostrum quo
				architecto. Tenetur cupiditate similique, velit omnis in autem
				facere aliquam maxime cumque iusto? Fuga maiores aliquid laboriosam
				omnis quia sit magnam. Architecto quia nostrum distinctio temporibus
				dolores doloribus! Fuga sit necessitatibus ipsum reprehenderit quis
				asperiores molestiae excepturi maxime, rem vitae doloribus maiores
				deleniti itaque harum? Doloremque amet iste, placeat non quasi illo
				molestias iusto magni hic fugiat quas omnis perferendis odit
				repellendus voluptas excepturi perspiciatis vero. Unde reiciendis,
				ipsam eveniet praesentium provident perferendis repellendus tempore
				vitae temporibus ratione illum totam saepe alias autem
				exercitationem. Ratione qui facere voluptatum repellendus ullam, vel
				nemo ducimus culpa maiores assumenda ipsam est dicta sapiente
				suscipit eligendi dolore quasi labore ipsa molestiae quas vero!
				Assumenda, repellendus placeat accusamus tenetur eaque error quam,
				enim quisquam minima aperiam facilis tempora! Culpa enim eos
				perspiciatis asperiores eum eius! Esse delectus sit excepturi
				corporis reiciendis iste nobis libero nam nostrum suscipit expedita
				asperiores ratione eos dignissimos, repellat omnis. Neque, vel eos
				sed consectetur voluptatem doloribus alias id officia molestiae,
				eveniet praesentium nihil! Mollitia deleniti similique cum vero
				maiores eveniet vitae, consectetur facere amet in, molestiae quod ab
				debitis architecto recusandae sed, ipsam iure ea quisquam! Corporis
				consequatur corrupti suscipit ratione deleniti asperiores nesciunt
				inventore expedita at quibusdam saepe omnis eum provident culpa
				dicta, eveniet exercitationem, magni labore, minima sed quas numquam
				doloribus aspernatur? Fuga quis sequi minima architecto voluptate
				earum quidem, necessitatibus fugiat pariatur! Doloribus dolor,
				animi, culpa aperiam laudantium deleniti reprehenderit aut soluta
				sed quis veritatis, tempora nam minima unde officia porro at
				temporibus ratione molestias consectetur. Autem, quod quos!
				Veritatis molestias iure accusamus sapiente debitis voluptatibus
				quis quam repellendus quisquam, illo pariatur perspiciatis magni,
				odio optio, et veniam eaque ipsa dolorum ea? Nobis vitae tempore
				facere non natus harum, et tenetur porro voluptatum possimus, iure
				pariatur perferendis praesentium vel laudantium quae officiis ipsum
				nulla eligendi dignissimos blanditiis sequi placeat ad. Similique
				tempora ratione quod libero voluptatum ut illo aperiam temporibus
				inventore ipsum tenetur quas aut, consequuntur autem nisi unde
				explicabo nostrum culpa, quam enim excepturi aliquid? Nemo
				voluptates sunt dolore iusto iste saepe in tempore consectetur sint,
				deleniti est rem hic ducimus, velit perspiciatis voluptatum, quo at
				labore amet optio pariatur veritatis! Perspiciatis, quam facere!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
				saepe quasi qui provident harum voluptatibus neque ipsum! Excepturi,
				autem. Laboriosam repudiandae hic exercitationem, quam aliquid,
				ipsum incidunt praesentium aliquam assumenda, ad voluptatibus cum
				tempora deleniti at suscipit impedit magnam facilis cupiditate
				obcaecati perspiciatis! Suscipit quidem laborum placeat nulla,
				impedit vero adipisci consequatur sit assumenda ratione cumque?
				Architecto error maiores, ad eveniet corrupti voluptas unde eos
				incidunt deserunt dignissimos at culpa, ut quibusdam voluptates
				fugit totam officiis quos deleniti placeat ullam. Libero cumque vero
				consequuntur perspiciatis aperiam voluptatibus a iusto laudantium
				reprehenderit odio incidunt ducimus architecto dolorem, obcaecati
				dolorum praesentium. Non voluptatum dolores ad est repellendus
				laudantium excepturi magnam accusamus! Nulla iusto voluptate eius
				minus dolores, et quaerat aperiam id necessitatibus odit atque ipsa
				dicta numquam porro a repellat neque, odio, deserunt animi quidem.
				Modi quas itaque possimus iusto autem tempora nostrum quo
				architecto. Tenetur cupiditate similique, velit omnis in autem
				facere aliquam maxime cumque iusto? Fuga maiores aliquid laboriosam
				omnis quia sit magnam. Architecto quia nostrum distinctio temporibus
				dolores doloribus! Fuga sit necessitatibus ipsum reprehenderit quis
				asperiores molestiae excepturi maxime, rem vitae doloribus maiores
				deleniti itaque harum? Doloremque amet iste, placeat non quasi illo
				molestias iusto magni hic fugiat quas omnis perferendis odit
				repellendus voluptas excepturi perspiciatis vero. Unde reiciendis,
				ipsam eveniet praesentium provident perferendis repellendus tempore
				vitae temporibus ratione illum totam saepe alias autem
				exercitationem. Ratione qui facere voluptatum repellendus ullam, vel
				nemo ducimus culpa maiores assumenda ipsam est dicta sapiente
				suscipit eligendi dolore quasi labore ipsa molestiae quas vero!
				Assumenda, repellendus placeat accusamus tenetur eaque error quam,
				enim quisquam minima aperiam facilis tempora! Culpa enim eos
				perspiciatis asperiores eum eius! Esse delectus sit excepturi
				corporis reiciendis iste nobis libero nam nostrum suscipit expedita
				asperiores ratione eos dignissimos, repellat omnis. Neque, vel eos
				sed consectetur voluptatem doloribus alias id officia molestiae,
				eveniet praesentium nihil! Mollitia deleniti similique cum vero
				maiores eveniet vitae, consectetur facere amet in, molestiae quod ab
				debitis architecto recusandae sed, ipsam iure ea quisquam! Corporis
				consequatur corrupti suscipit ratione deleniti asperiores nesciunt
				inventore expedita at quibusdam saepe omnis eum provident culpa
				dicta, eveniet exercitationem, magni labore, minima sed quas numquam
				doloribus aspernatur? Fuga quis sequi minima architecto voluptate
				earum quidem, necessitatibus fugiat pariatur! Doloribus dolor,
				animi, culpa aperiam laudantium deleniti reprehenderit aut soluta
				sed quis veritatis, tempora nam minima unde officia porro at
				temporibus ratione molestias consectetur. Autem, quod quos!
				Veritatis molestias iure accusamus sapiente debitis voluptatibus
				quis quam repellendus quisquam, illo pariatur perspiciatis magni,
				odio optio, et veniam eaque ipsa dolorum ea? Nobis vitae tempore
				facere non natus harum, et tenetur porro voluptatum possimus, iure
				pariatur perferendis praesentium vel laudantium quae officiis ipsum
				nulla eligendi dignissimos blanditiis sequi placeat ad. Similique
				tempora ratione quod libero voluptatum ut illo aperiam temporibus
				inventore ipsum tenetur quas aut, consequuntur autem nisi unde
				explicabo nostrum culpa, quam enim excepturi aliquid? Nemo
				voluptates sunt dolore iusto iste saepe in tempore consectetur sint,
				deleniti est rem hic ducimus, velit perspiciatis voluptatum, quo at
				labore amet optio pariatur veritatis! Perspiciatis, quam facere!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
				saepe quasi qui provident harum voluptatibus neque ipsum! Excepturi,
				autem. Laboriosam repudiandae hic exercitationem, quam aliquid,
				ipsum incidunt praesentium aliquam assumenda, ad voluptatibus cum
				tempora deleniti at suscipit impedit magnam facilis cupiditate
				obcaecati perspiciatis! Suscipit quidem laborum placeat nulla,
				impedit vero adipisci consequatur sit assumenda ratione cumque?
				Architecto error maiores, ad eveniet corrupti voluptas unde eos
				incidunt deserunt dignissimos at culpa, ut quibusdam voluptates
				fugit totam officiis quos deleniti placeat ullam. Libero cumque vero
				consequuntur perspiciatis aperiam voluptatibus a iusto laudantium
				reprehenderit odio incidunt ducimus architecto dolorem, obcaecati
				dolorum praesentium. Non voluptatum dolores ad est repellendus
				laudantium excepturi magnam accusamus! Nulla iusto voluptate eius
				minus dolores, et quaerat aperiam id necessitatibus odit atque ipsa
				dicta numquam porro a repellat neque, odio, deserunt animi quidem.
				Modi quas itaque possimus iusto autem tempora nostrum quo
				architecto. Tenetur cupiditate similique, velit omnis in autem
				facere aliquam maxime cumque iusto? Fuga maiores aliquid laboriosam
				omnis quia sit magnam. Architecto quia nostrum distinctio temporibus
				dolores doloribus! Fuga sit necessitatibus ipsum reprehenderit quis
				asperiores molestiae excepturi maxime, rem vitae doloribus maiores
				deleniti itaque harum? Doloremque amet iste, placeat non quasi illo
				molestias iusto magni hic fugiat quas omnis perferendis odit
				repellendus voluptas excepturi perspiciatis vero. Unde reiciendis,
				ipsam eveniet praesentium provident perferendis repellendus tempore
				vitae temporibus ratione illum totam saepe alias autem
				exercitationem. Ratione qui facere voluptatum repellendus ullam, vel
				nemo ducimus culpa maiores assumenda ipsam est dicta sapiente
				suscipit eligendi dolore quasi labore ipsa molestiae quas vero!
				Assumenda, repellendus placeat accusamus tenetur eaque error quam,
				enim quisquam minima aperiam facilis tempora! Culpa enim eos
				perspiciatis asperiores eum eius! Esse delectus sit excepturi
				corporis reiciendis iste nobis libero nam nostrum suscipit expedita
				asperiores ratione eos dignissimos, repellat omnis. Neque, vel eos
				sed consectetur voluptatem doloribus alias id officia molestiae,
				eveniet praesentium nihil! Mollitia deleniti similique cum vero
				maiores eveniet vitae, consectetur facere amet in, molestiae quod ab
				debitis architecto recusandae sed, ipsam iure ea quisquam! Corporis
				consequatur corrupti suscipit ratione deleniti asperiores nesciunt
				inventore expedita at quibusdam saepe omnis eum provident culpa
				dicta, eveniet exercitationem, magni labore, minima sed quas numquam
				doloribus aspernatur? Fuga quis sequi minima architecto voluptate
				earum quidem, necessitatibus fugiat pariatur! Doloribus dolor,
				animi, culpa aperiam laudantium deleniti reprehenderit aut soluta
				sed quis veritatis, tempora nam minima unde officia porro at
				temporibus ratione molestias consectetur. Autem, quod quos!
				Veritatis molestias iure accusamus sapiente debitis voluptatibus
				quis quam repellendus quisquam, illo pariatur perspiciatis magni,
				odio optio, et veniam eaque ipsa dolorum ea? Nobis vitae tempore
				facere non natus harum, et tenetur porro voluptatum possimus, iure
				pariatur perferendis praesentium vel laudantium quae officiis ipsum
				nulla eligendi dignissimos blanditiis sequi placeat ad. Similique
				tempora ratione quod libero voluptatum ut illo aperiam temporibus
				inventore ipsum tenetur quas aut, consequuntur autem nisi unde
				explicabo nostrum culpa, quam enim excepturi aliquid? Nemo
				voluptates sunt dolore iusto iste saepe in tempore consectetur sint,
				deleniti est rem hic ducimus, velit perspiciatis voluptatum, quo at
				labore amet optio pariatur veritatis! Perspiciatis, quam facere!
			</p>
			<Menu
				isOpen={menuIsOpen}
				setIsOpen={setMenuIsOpen}
				items={menuItems}
			/>
		</div>
	);
};

export default App;

/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import style from '../home/style.module.css'
import res from '../home/responsive.module.css'
/* Images */
import profilePic from '/public/orbtwh.svg'
import orbitSvg from '/public/orbita.svg'
import work1 from '/public/work1.jpg'
import work2 from '/public/work2.jpg'
import facebook from '/public/facebook.webp'
import instagram from '/public/instagram.webp'
import github from '/public/github.webp'

const Home: NextPage = () => {
	{
		/* 
	async function handleOnSubmit(e) {
		e.preventDefault()

		const formData = {}

		Array.from(e.currentTarget.elements).forEach(field => {
			if (!field.name) return
			formData[field.name] = field.value
		})

		fetch('./api/mail', {
			method: 'POST',
			body: JSON.stringify(formData),
		})
		console.log(formData)
	}*/
	}

	return (
		<>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
				<title>Orbt</title>
			</Head>
			<div className={style.main}>
				<nav className={style.nav}>
					<a className={style.link} href="#">
						<Image
							src={profilePic}
							alt="Logo"
							height="70"
							width=""
						/>
					</a>
					<ul className={style.ul}>
						<li className={style.active}>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#sobre">Sobre</a>
						</li>
						<li>
							<a href="#plano">Planos</a>
						</li>
						<li>
							<a href="#contato">Contato</a>
						</li>
					</ul>
				</nav>
			</div>
			{/* Home */}
			<div id="home" className={style.home}>
				<div className={style.grid}>
					<div className={style.imgorbta}>
						<Image src={orbitSvg} alt="Logo" />
					</div>
					<div className={style.textbv}>
						<h1>Seja Bem Vindo!</h1>
						<p>
							A orbt lhe oferece ótimos serviços, como
							desenvolvimento <br /> de sites, manutenção de
							computadores e redes, gerencia
							<br />
							mento das midias sociais da sua empresa e a criação
							e <br /> desenvolvimento de logos e designes para
							sua empresa.
						</p>
						<button className={style.buttonh}>
							<a href="">Saiba Mais</a>
						</button>
					</div>
				</div>
			</div>
			{/* Sobre */}
			<div className={style.sobre_title}>
				<div id="sobre" className={style.title}>
					<h2>SOBRE NÓS</h2>
				</div>
			</div>

			<div className={style.sobre}>
				<p>
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industrys
					standard dummy text ever since the 1500s, when an unknown
					printer took a galley of type and scrambled it to make a
					type specimen book. It has survived not only five centuries,
					but also the leap into electronic typesetting, remaining
					essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum
					passages, and more recently with desktop publishing software
					like Aldus PageMaker including versions of Lorem Ipsum.
				</p>
			</div>

			<div id="plano" className={style.planos}>
				<div className={style.title}>
					<h3>planos</h3>
				</div>
				<div className={style.grid}>
					<div className={style.plano1}>
						<h2>Institucional</h2>
						<p>Web Site 1</p>
						<li>Web Site Personalizado</li>
						<li>Site Único, Especialmente Para Sua Empresa</li>
						<li>Design Inovador e Totalmente Atualizado</li>
						<li>Atualizações Sempre Que Precisar</li>
						<li>Suporte 7/24</li>
						<button className={style.buttonp}>
							<a href="">Orçamento</a>
						</button>
						<span>R$100.00/m</span>
					</div>
					<div className={style.plano2}>
						<h2>e-commerce</h2>
						<p>Web Site 2</p>
						<li>Web Site Personalizado</li>
						<li>Site Único, Especialmente Para Sua Empresa</li>
						<li>Design Inovador e Totalmente Atualizado</li>
						<li>Atualizações Sempre Que Precisar</li>
						<li>Suporte 7/24</li>
						<button className={style.buttond}>Orçamento</button>
						<span>R$250.00/m</span>
					</div>
				</div>
			</div>

			{/* Trabalhos */}
			<div className={style.works_title}>
				<div className={style.title}>
					<h2>trabalhos</h2>
				</div>
			</div>
			<div className={style.gridw}>
				<div className={style.work1}>
					<Image src={work1} alt="Work1" width="650" height="500" />
				</div>
				<div className={style.text1}>
					<h3>Indesfer</h3>
					<p>
						An example of where you can put an image of a project,
						or anything else, along with a description.
					</p>
				</div>
				<div className={style.gridw2}>
					<div className={style.text2}>
						<h3>Empresa 2</h3>
						<p>
							An example of where you can put an image of a
							project, or anything else, along with a description.
						</p>
					</div>
					<div className={style.work2}>
						<Image
							src={work2}
							alt="Work2"
							width="650"
							height="500"
						/>
					</div>
				</div>
			</div>
			{/* Contato */}
			<div id="contato" className={style.contato}>
				<div className={style.title}>
					<h3>Contato</h3>
				</div>
				<div className={style.contatof}>
					<h2>Preencha o Formulário</h2>
					<p>Preencha os campos abaixo para fazer um orçamento</p>
					{/* <form method="POST" onSubmit={handleOnSubmit}> */}
					<form>
						<div className={style.gridcontato}>
							<div className={style.inputst}>
								<input
									type="text"
									name="name"
									placeholder="nome completo"
								/>
								<input
									type="text"
									name="email"
									placeholder="username@email.com"
								/>
							</div>
							<div className={style.mensagem}>
								<textarea
									name="message"
									placeholder="escreva sua mensagem..."
								></textarea>
							</div>
							<button className={style.buttonf} type="submit">
								Enviar
							</button>
						</div>
					</form>
				</div>
			</div>
			{/* Blocquote */}
			<blockquote className={style.blockquote}>
				“Seja uma referência de qualidade. Algumas pessoas não estão
				acostumadas a um ambiente em que a excelência é esperada. ”
				<span>Steve Jobs</span>
			</blockquote>
			{/* Footer */}
			<footer className={style.footer}>
				<div className={style.navf}>
					<li>
						<a href="">Home</a>
					</li>
					<li>
						<a href="">Sobre</a>
					</li>
					<li>
						<a href="">Planos</a>
					</li>
					<li>
						<a href="">Contato</a>
					</li>
				</div>
				<div className={style.linel}>
					<p>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the industrys
						standard dummy text ever since the 1500s, when an
						unknown printer took a galley of type and scrambled it
						to make a type specimen book. It has survived not only
						five centuries, but also the leap into electronic
						typesetting, remaining essentially unchanged.
					</p>
				</div>

				<div className={style.redes}>
					<a href="">
						<Image
							src={facebook}
							alt="facebook"
							width="30"
							height="30"
						/>
					</a>
					<a href="">
						<Image
							src={instagram}
							alt="Instagram"
							width="30"
							height="30"
						/>
					</a>
					<a href="">
						<Image
							src={github}
							alt="Github"
							width="30"
							height="30"
						/>
					</a>
				</div>
			</footer>
			<div className={style.copy}>
				<span>
					Copyright © 2020, Todos direitos reservados
					<a href=""> Orbt</a>
				</span>
			</div>
		</>
	)
}

export default Home

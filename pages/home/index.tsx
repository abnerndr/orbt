/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import style from '../home/style.module.css'
import axios from 'axios'
/* Images */
import profilePic from '/public/orbtwh.svg'
import orbitSvg from '/public/orbita.svg'
import work1 from '/public/work1.jpg'
import work2 from '/public/work2.jpg'
import facebook from '/public/facebook.webp'
import instagram from '/public/instagram.webp'
import github from '/public/github.webp'
import { useState } from 'react'

interface Data {
	name: string
	email: string
	message: string
}

const Home: NextPage = () => {
	const [whatsapp, setWhatsapp] = useState(false)
	const onClick = () => setWhatsapp(!whatsapp)

	const [data, setData] = useState<Data>({
		email: '',
		message: '',
		name: '',
	})

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target

		setData(oldData => ({ ...oldData, [name]: value }))
	}

	const submitForm = (e: React.FormEvent) => {
		e.preventDefault()
		axios
			.post('./api/contact', data)
			.then(() => {
				return console.log('Thank you for contacting us!', data)
			})
			.catch(e => {
				return console.log('Something bad happened', e.message)
			})
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
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
					integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
				/>
				<title>Orbt</title>
			</Head>
			<div className={style.main}>
				{/* NAV */}
				<nav className={style.nav}>
					<div className={style.link}>
						<Image
							src={profilePic}
							alt="Logo"
							height="80"
							width=""
						/>
					</div>
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
				<div className={style.corpotxt}>
					<p>
						A orbt é uma empresa recem chegada no mercado da
						tecnologia, que vem buscando trazer web sites e
						aplicativos com um design simples, bonito e que retrate
						a empresa e ao mesmo tempo um site completo, rápido e
						responsivo, com o SEO configurado e tudo mais que você
						possa ter direito. Trabalhamos para optimizar e melhorar
						a experiência da empresa com as novidades, sempre
						buscamos inovar e sempre manter nossos projetos
						atualizados e com ótima funcionalidade e velocidade.
						Além disso sempre buscamos ouvir nossos clientes e
						trabalhar em conjunto para que o site fique com a cara
						da empresa e que os clientes de tal tenham um
						experiência fantástica.
					</p>
				</div>
			</div>
			{/* Planos */}
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
						É uma empresa regional que trabalha com corte e dobra de
						chapas, é nosso cliente a mais de 1 ano e tem ótimos
						resultado.
					</p>
				</div>
				<div className={style.work2}>
					<Image src={work2} alt="Work2" width="650" height="500" />
				</div>
				<div className={style.text2}>
					<h3>Empresa 2</h3>
					<p>
						An example of where you can put an image of a project,
						or anything else, along with a description.
					</p>
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
					<form onSubmit={submitForm}>
						<div className={style.gridcontato}>
							<div className={style.inputst}>
								<input
									type="text"
									name="name"
									id="name"
									placeholder="nome completo"
									value={data.name}
									onChange={handleChange}
									required
								/>

								<input
									type="text"
									name="email"
									id="email"
									placeholder="username@email.com"
									value={data.email}
									onChange={handleChange}
									required
								/>
							</div>
							<div className={style.mensagem}>
								<textarea
									name="message"
									id="message"
									placeholder="escreva sua mensagem..."
									value={data.message}
									onChange={handleChange}
									required
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
						A orbt é uma empresa recem chegada no mercado da
						tecnologia, que vem buscando trazer web sites e
						aplicativos com um design simples, bonito e que retrate
						a empresa e ao mesmo tempo um site completo, rápido e
						responsivo, com o SEO configurado e tudo mais que você
						possa ter direito. Trabalhamos para optimizar e melhorar
						a experiência da empresa com as novidades, sempre
						buscamos inovar e sempre manter nossos projetos
						atualizados e com ótima funcionalidade e velocidade.
					</p>
				</div>

				<div className={style.redes}>
					<a href="">
						<Image
							src={facebook}
							alt="facebook"
							width="30"
							height="30"
							id="image"
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

				<div>
					<button className={style.float} onClick={onClick}>
						{whatsapp && <Text />}
						<img src="whatsapp.png" alt="Whatsapp" height="50" />
					</button>
				</div>
			</div>
		</>
	)
}

const Text = () => (
	<div className={style.whatfloat}>
		<a href="https://api.whatsapp.com/send?phone=5516996135250&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento">
			<img src="601.png" alt="Abner" height="80" />
			<p>
				Abner Ananias <br />
				(16) 99613-5250
			</p>
		</a>
		<a href="https://api.whatsapp.com/send?phone=5516994009055&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento">
			<img src="602.png" alt="Gabriel" height="80" />
			<p>
				Gabriel Laroca <br />
				(16) 99400-9055
			</p>
		</a>
		<a href="https://api.whatsapp.com/send?phone=5516997570850&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento">
			<img src="603.png" alt="Lucas" height="80" />
			<p>
				Lucas Lima <br />
				(16) 99757-0850
			</p>
		</a>
	</div>
)

export default Home
function setData(arg0: (oldData: any) => any) {
	throw new Error('Function not implemented.')
}
function debounce(arg0: (value: any) => Promise<void>, arg1: number) {}
function setShowText(arg0: boolean) {
	throw new Error('Function not implemented.')
}

function setWhatsapp(arg0: boolean): void {
	throw new Error('Function not implemented.')
}

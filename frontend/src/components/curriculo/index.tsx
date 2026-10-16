import { competencias, formacoes } from "@/data/perfil"
import { cursos } from "@/data/cursos"
import Container from "../shared/Container"
import Experiencia from "./Experiencia"
import MiniCV from "./MiniCV"

export default function Curriculo() {
	return <Container className="profile-sections">
		<MiniCV />
		<Experiencia />
		<section className="expertise-section" aria-labelledby="titulo-competencias">
			<h2 id="titulo-competencias" data-motion>Construído com fundamento.</h2>
			<p className="expertise-statement" data-motion>Java. Spring Boot. PHP. Laravel. PostgreSQL. RabbitMQ.</p>
			<dl className="expertise-list">{competencias.map((item, i) => <div key={item.grupo} data-motion data-delay={i * 70}><dt>{item.grupo}</dt><dd>{item.itens}</dd></div>)}</dl>
		</section>
		<section className="education-section" aria-labelledby="titulo-formacao">
			<div data-motion><h2 id="titulo-formacao">Aprendizado contínuo.</h2><p>Formação que acompanha a prática.</p></div>
			<div className="education-list">{formacoes.map((formacao, i) => <div key={formacao.curso} data-motion data-delay={i * 70}><h3>{formacao.curso}</h3><p>{formacao.instituicao}</p><p className="education-period">{formacao.periodo}</p></div>)}
				<details data-motion><summary>Cursos e certificações</summary><ul>{cursos.map((curso) => <li key={curso.titulo}><a href={curso.comprovante} target="_blank" rel="noopener noreferrer">{curso.titulo} ↗</a></li>)}</ul></details>
			</div>
		</section>
	</Container>
}

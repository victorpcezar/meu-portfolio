import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import SocialLinks from '../../components/SocialLink/index'
import SectionTitle from '../../components/SectionTitle'
import { GITHUB_URL } from '../../data/profile'
import { REPOSITORIES_URL } from '../../data/profile'
import { Container, Grid, ProjectCard, Top, Status, Tags, Links, MoreLink } from './styles'

// Adicione novos projetos aqui. Use "demo" só se existir um site no ar.
const projects = [
  {
    id: 'portfolio',
    title: 'Portfólio pessoal',
    status: 'No ar',
    description:
      'Este site: apresentação, stacks, projetos, experiência e formação, com tema claro e escuro, animações e layout responsivo.',
    tech: ['React', 'Vite', 'Styled Components', 'Framer Motion'],
    demo: 'https://meu-portfolio-ruddy-seven.vercel.app',
    code: `${GITHUB_URL}/meu-portfolio`,
  },
  {
    id: 'sap-fiori',
    title: 'Inventário de Objetos Customizados SAP (ABAP ALV)',
    status: 'No ar',
    description:
      'Relatório executável em SAP ABAP para inventário, governança e auditoria de desenvolvimentos customizados (Z* e Y*) no repositório do SAP (TADIR).',
    tech: ['ABAP', 'ALV'],
    code: REPOSITORIES_URL.find(repo => repo.id === 2)?.url,
  },
]

export default function Projects() {
  return (
    <Container id="projetos">
      <SectionTitle>Projetos</SectionTitle>

      <Grid>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <Top>
              <h3>{project.title}</h3>
              <Status>{project.status}</Status>
            </Top>

            <p>{project.description}</p>

            <Tags aria-label="Tecnologias">
              {project.tech.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </Tags>

            <Links>
              {project.demo && (
                <SocialLinks href={project.demo} icon={<FaExternalLinkAlt />} label="Ver site" />
              )}
              <SocialLinks href={project.code} icon={<FaGithub />} label="Código" />
            </Links>
          </ProjectCard>
        ))}
      </Grid>

      <MoreLink>
        <SocialLinks href={REPOSITORIES_URL.find(repo => repo.id === 1)?.url} icon={<FaGithub />} label="Ver todos os repositórios" />
      </MoreLink>
    </Container>
  )
}

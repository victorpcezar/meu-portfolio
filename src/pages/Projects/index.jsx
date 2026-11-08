import { motion, MotionConfig } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import SocialLinks from '../../components/SocialLink/index'
import SectionTitle from '../../components/SectionTitle'
import { REPOSITORIES_URL } from '../../data/profile'
import { projects } from '../../data/projectsData'
import { Container, Grid, ProjectCard, Top, Status, Tags, Links, MoreLink } from './styles'

const repoUrl = (id) => REPOSITORIES_URL.find((repo) => repo.id === id)?.url

// Título aparece primeiro
const titleVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

// Os cards entram em sequência
const gridVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

// O link final aparece por último
const moreVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.4 } },
}

const viewport = { once: true, margin: '-60px' }

export default function Projects() {
  const allReposUrl = repoUrl(1)

  return (
    <MotionConfig reducedMotion="user">
      <Container id="projetos">
        <SectionTitle
          as={motion.h2}
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          Projetos
        </SectionTitle>

        <Grid
          as={motion.div}
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              as={motion.article}
              variants={cardVariants}
            >
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
                {project.code && (
                  <SocialLinks href={project.code} icon={<FaGithub />} label="Código" />
                )}
              </Links>
            </ProjectCard>
          ))}
        </Grid>

        {allReposUrl && (
          <MoreLink
            as={motion.div}
            variants={moreVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <SocialLinks href={allReposUrl} icon={<FaGithub />} label="Ver todos os repositórios" />
          </MoreLink>
        )}
      </Container>
    </MotionConfig>
  )
}
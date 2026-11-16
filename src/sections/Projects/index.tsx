'use client'

import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { scrollReveal, scrollRevealLeft, staggerItem, staggerReveal } from '../../animations'
import SocialLinks from '../../components/SocialLink'
import SectionTitle from '../../components/SectionTitle'
import { REPOSITORIES_URL } from '../../data/profile'
import { projects } from '../../data/projectsData'
import { Container, Grid, ProjectCard, Top, Status, Tags, Links, MoreLink } from './styles'

const repoUrl = (id: number) => REPOSITORIES_URL.find((repo) => repo.id === id)?.url

export default function Projects() {
  const allReposUrl = repoUrl(1)

  return (
    <Container id="projetos">
      <SectionTitle as={motion.h2} {...scrollRevealLeft}>
        Projetos
      </SectionTitle>

      <Grid as={motion.div} {...staggerReveal}>
        {projects.map((project) => (
          <ProjectCard key={project.id} as={motion.article} variants={staggerItem}>
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
        <MoreLink as={motion.div} {...scrollReveal}>
          <SocialLinks href={allReposUrl} icon={<FaGithub />} label="Ver todos os repositórios" />
        </MoreLink>
      )}
    </Container>
  )
}

import { GITHUB_URL } from './profile'

export const projects = [
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
        id: 'abap-inventory',
        title: 'Inventário de Objetos Customizados SAP (ABAP ALV)',
        status: 'Concluído',
        description:
            'Relatório executável em SAP ABAP para inventário, governança e auditoria de desenvolvimentos customizados (Z* e Y*) no repositório do SAP (TADIR).',
        tech: ['ABAP', 'ALV', 'TADIR'],
        code: `${GITHUB_URL}/abap-custom-objects-inventory`,
    },
]
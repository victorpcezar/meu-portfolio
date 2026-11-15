import type { IconType } from 'react-icons'
import { FaCertificate, FaGraduationCap } from 'react-icons/fa'

export interface EducationItem {
    id: number
    title: string
    institution: string
    period: string
    icon: IconType
    description: string
}


export const educationData: EducationItem[] = [
    {
        id: 1,
        title: 'Análise e Desenvolvimento de Sistemas',
        institution: 'UNICIVE - Centro Universitário Cidade Verde',
        period: 'Graduação concluída em 2024',
        icon: FaGraduationCap,
        description:
            'Foco em engenharia de software, arquitetura de sistemas, modelagem de dados e fundamentos de Tecnologia da Informação.',
    },
    {
        id: 2,
        title: 'CS50 – Introduction to Computer Science',
        institution: 'Harvard University',
        period: 'Certificado em emissão',
        icon: FaCertificate,
        description:
            'Fundamentos de ciência da computação: algoritmos, estruturas de dados e programação.',
    },
]

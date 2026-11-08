import { FaBriefcase, FaLaptopCode } from 'react-icons/fa'

export const experiences = [
    {
        id: 1,
        role: 'Desenvolvedor ABAP Júnior',
        company: '@ Engine BR Tecnologia',
        period: 'abr/2023 – abr/2024',
        icon: FaLaptopCode,
        descriptions: [
            'Sustentação e evolução de soluções SAP em ambiente AMS: correção de bugs, manutenção corretiva e evolutiva e suporte técnico contínuo.',
            'Criação e customização de relatórios clássicos e interativos com ALV (ABAP List Viewer), programas Z, Includes, Function Modules e telas de seleção.',
            'Modelagem no Dicionário de Dados: tabelas transparentes, estruturas, domínios e visões.',
            'Análise de causa raiz com SAP Debugger e diagnóstico de dumps; "fiorização" de aplicações ABAP legadas.',
            'Transporte de objetos entre ambientes (DEV → QAS → PRD) e trabalho com consultores funcionais (SD, MM, FI), com documentação técnica dos desenvolvimentos.',
        ],
    },
    {
        id: 2,
        role: 'Conferente de Cargas',
        company: '@ LDB Transportes',
        period: 'dez/2025 – atual',
        icon: FaBriefcase,
        descriptions: [
            'Conferência de entrada e saída: valida quantidades, códigos, lotes e datas de validade dos produtos.',
            'Análise documental: confere notas fiscais (NF), ordens de compra, manifestos e conhecimentos de transporte (CT-e).',
            'Inspeção de avarias: identifica danos, embalagens rompidas ou mercadorias em desconformidade com os padrões.',
        ],
    },
]

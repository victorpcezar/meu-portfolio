import type { IconType } from 'react-icons'
import { FaNodeJs, FaProjectDiagram } from 'react-icons/fa'
import { SiExpress, SiTypescript } from 'react-icons/si'

export type RoadmapStatus = 'concluido' | 'em-andamento' | 'planejado'

export interface RoadmapTopic {
    id: string
    title: string
    status: RoadmapStatus
}

export interface RoadmapResource {
    label: string
    url: string
}

export interface RoadmapPhaseItem {
    id: string
    title: string
    description: string
    status: RoadmapStatus
    icon: IconType
    topics: RoadmapTopic[]
    resources?: RoadmapResource[]
}

export const statusLabels: Record<RoadmapStatus, string> = {
    concluido: 'Concluído',
    'em-andamento': 'Em andamento',
    planejado: 'Planejado',
}

export function getPhaseProgress(topics: RoadmapTopic[]) {
    const done = topics.filter((topic) => topic.status === 'concluido').length
    const total = topics.length
    return { done, total, percent: total === 0 ? 0 : Math.round((done / total) * 100) }
}

/*
 * COMO EVOLUIR O ROADMAP
 * - Novo assunto: adicione um objeto em `roadmap` na posição em que ele deve aparecer (a ordem do array é a ordem da página).
 * - Progresso: troque o `status` do tópico (e da etapa) para 'em-andamento' ou 'concluido'. A barra de progresso é calculada sozinha.
 * - O `id` de cada etapa e de cada tópico precisa ser único.
 */
export const roadmap: RoadmapPhaseItem[] = [
    {
        id: 'typescript',
        title: 'TypeScript',
        description:
            'A base de tudo o que vem depois: tipagem estática para escrever código mais seguro, legível e fácil de manter.',
        status: 'em-andamento',
        icon: SiTypescript,
        topics: [
            { id: 'ts-01', title: 'Setup do projeto TypeScript', status: 'concluido' },
            { id: 'ts-02', title: 'O que é o TypeScript?', status: 'concluido' },
            { id: 'ts-03', title: 'TypeScript é JavaScript!', status: 'concluido' },
            { id: 'ts-04', title: 'Type annotations', status: 'concluido' },
            { id: 'ts-05', title: 'Interface', status: 'concluido' },
            { id: 'ts-06', title: 'Type alias', status: 'concluido' },
            { id: 'ts-07', title: 'Tuplas', status: 'concluido' },
            { id: 'ts-08', title: 'Enum (Enumeration)', status: 'concluido' },
            { id: 'ts-09', title: 'Intersections (type intersection)', status: 'concluido' },
            { id: 'ts-10', title: 'Union types', status: 'concluido' },
            { id: 'ts-11', title: 'Tipagem de funções', status: 'concluido' },
            { id: 'ts-12', title: 'Classes com TypeScript', status: 'planejado' },
            { id: 'ts-13', title: 'Overload', status: 'planejado' },
            { id: 'ts-14', title: 'Type guard', status: 'planejado' },
            { id: 'ts-15', title: 'Narrowing (Refinamento de tipos)', status: 'planejado' },
            { id: 'ts-16', title: 'Tipos genéricos', status: 'planejado' },
            { id: 'ts-17', title: 'Records', status: 'planejado' },
            { id: 'ts-18', title: '"Annotation", "as" e "satisfies"', status: 'planejado' },
            { id: 'ts-19', title: 'typeof', status: 'planejado' },
            { id: 'ts-20', title: 'keyof', status: 'planejado' },
            { id: 'ts-21', title: 'Tipagem condicional', status: 'planejado' },
            { id: 'ts-22', title: 'never', status: 'planejado' },
            { id: 'ts-23', title: 'readonly', status: 'planejado' },
            { id: 'ts-24', title: 'as const', status: 'planejado' },
            { id: 'ts-25', title: 'Pick', status: 'planejado' },
            { id: 'ts-26', title: 'Omit', status: 'planejado' },
            { id: 'ts-27', title: 'Partial', status: 'planejado' },
            { id: 'ts-28', title: 'Required', status: 'planejado' },
            { id: 'ts-29', title: 'Exclude', status: 'planejado' },
            { id: 'ts-30', title: 'Extract', status: 'planejado' },
            { id: 'ts-31', title: 'NonNullable', status: 'planejado' },
            { id: 'ts-32', title: 'Mapped Types', status: 'planejado' },
            { id: 'ts-33', title: 'infer', status: 'planejado' },
            { id: 'ts-34', title: 'Tipagem recursiva', status: 'planejado' },
            { id: 'ts-35', title: 'Módulos em TypeScript', status: 'planejado' },
            { id: 'ts-36', title: 'declare e .d.ts', status: 'planejado' },
            { id: 'ts-37', title: 'Import alias (atalhos de importação)', status: 'planejado' },
            { id: 'ts-38', title: 'Criando um projeto de API com Fastify', status: 'planejado' },
            { id: 'ts-39', title: 'Compilação TypeScript (build / transpilação)', status: 'planejado' },
            { id: 'ts-40', title: 'Concluindo (final)', status: 'planejado' },
            { id: 'ts-41', title: 'Node.js rodando TypeScript nativamente (.ts imports)', status: 'planejado' },
        ],
        resources: [
            { label: 'Documentação oficial', url: 'https://www.typescriptlang.org/docs/' },
            { label: 'Playlist do Curso (Rincko Dev)', url: 'https://www.youtube.com/playlist?list=PL9tY_tDo_Q0DOAzTaPnWYsryfNLsz1K6U' }
        ],
    },

    {
        id: 'nodejs',
        title: 'Node.js',
        description:
            'Executar JavaScript e TypeScript fora do navegador: como o Node funciona por baixo e como organizar um projeto back-end.',
        status: 'em-andamento',
        icon: FaNodeJs,
        topics: [
            { id: 'node-event-loop', title: 'Como o Node funciona: V8 e event loop', status: 'em-andamento' },
            { id: 'node-modulos', title: 'Módulos (ESM e CommonJS) e npm', status: 'em-andamento' },
            { id: 'node-async', title: 'Código assíncrono: callbacks, Promises e async/await', status: 'em-andamento' },
            { id: 'node-arquivos', title: 'Sistema de arquivos, streams e buffers', status: 'em-andamento' },
            { id: 'node-env', title: 'Variáveis de ambiente e configuração', status: 'em-andamento' },
            { id: 'node-typescript', title: 'Node com TypeScript', status: 'em-andamento' },
            { id: 'node-testes', title: 'Testes automatizados', status: 'em-andamento' },
        ],
        resources: [{ label: 'Documentação oficial', url: 'https://nodejs.org/docs/latest/api/' }],
    },
    {
        id: 'express',
        title: 'Express',
        description:
            'Construir APIs REST de verdade: rotas, middlewares, validação, banco de dados e autenticação.',
        status: 'em-andamento',
        icon: SiExpress,
        topics: [
            { id: 'express-rotas', title: 'Rotas e métodos HTTP', status: 'concluido' },
            { id: 'express-middlewares', title: 'Middlewares', status: 'concluido' },
            { id: 'express-erros', title: 'Tratamento de erros', status: 'em-andamento' },
            { id: 'express-validacao', title: 'Validação de dados de entrada', status: 'em-andamento' },
            { id: 'express-rest', title: 'API REST: status codes e boas práticas', status: 'concluido' },
            { id: 'express-banco', title: 'Persistência de dados com MongoDB', status: 'em-andamento' },
            { id: 'express-auth', title: 'Autenticação com JWT', status: 'em-andamento' },
            { id: 'express-typescript', title: 'Express tipado com TypeScript', status: 'em-andamento' },
        ],
        resources: [{ label: 'Documentação oficial', url: 'https://expressjs.com/' }],
    },
    {
        id: 'arquitetura',
        title: 'Arquitetura de software',
        description:
            'Depois de dominar a base, organizar o código para crescer sem virar bagunça: camadas, princípios e padrões.',
        status: 'planejado',
        icon: FaProjectDiagram,
        topics: [
            { id: 'arq-intro', title: 'Introdução, fundamentos e visão Arquitetural', status: 'planejado' },
            { id: 'arq-estilos', title: 'Estilos arquiteturais, como escolher?', status: 'planejado' },
            { id: 'arq-design', title: 'Design de sistemas escaláveis', status: 'planejado' },
            { id: 'arq-sec', title: 'Segurança em arquitetura de software', status: 'planejado' },
            { id: 'arq-CI-CD', title: 'CI/CD e estratégias de deploy', status: 'planejado' },
            { id: 'arq-observ', title: 'Observabilidade e monitoramento', status: 'planejado' },
            { id: 'arq-resili', title: 'Resiliência e confiabilidade', status: 'planejado' },
            { id: 'arq-moder', title: 'Modernização e reengenharia de sistemas Legados', status: 'planejado' },
            { id: 'arq-evolut', title: 'Arquitetura evolutiva e governança', status: 'planejado' },
            { id: 'arq-lide', title: 'Liderança técnica e comunicação para Arquitetos', status: 'planejado' },

        ],
    },
]

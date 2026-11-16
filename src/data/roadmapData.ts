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
            { id: 'ts-tipos-basicos', title: 'Tipos básicos, arrays, tuplas e enums', status: 'concluido' },
            { id: 'ts-any-unknown-never', title: 'any, unknown e never: quando usar cada um', status: 'concluido' },
            { id: 'ts-interfaces-types', title: 'Interfaces e type aliases', status: 'concluido' },
            { id: 'ts-funcoes', title: 'Funções tipadas, parâmetros opcionais e sobrecarga', status: 'concluido' },
            { id: 'ts-union-narrowing', title: 'Union, intersection e narrowing (type guards)', status: 'concluido' },
            { id: 'ts-generics', title: 'Generics', status: 'planejado' },
            { id: 'ts-utility-types', title: 'Utility types (Partial, Pick, Omit, Record)', status: 'planejado' },
            { id: 'ts-classes', title: 'Classes e orientação a objetos', status: 'planejado' },
            { id: 'ts-config', title: 'Módulos, tsconfig e modo strict', status: 'planejado' },
        ],
        resources: [{ label: 'Documentação oficial', url: 'https://www.typescriptlang.org/docs/' }],
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
        status: 'planejado',
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
            { id: 'arq-camadas', title: 'Separação em camadas (rotas, controllers, services, repositories)', status: 'planejado' },
            { id: 'arq-solid', title: 'Princípios SOLID', status: 'planejado' },
            { id: 'arq-di', title: 'Injeção de dependência', status: 'planejado' },
            { id: 'arq-patterns', title: 'Padrões de projeto essenciais', status: 'planejado' },
            { id: 'arq-clean', title: 'Clean Architecture e arquitetura hexagonal', status: 'planejado' },
            { id: 'arq-modularizacao', title: 'Organização de pastas e modularização', status: 'planejado' },
            { id: 'arq-testes', title: 'Testes por camada', status: 'planejado' },
            { id: 'arq-docs', title: 'Documentação de API (OpenAPI)', status: 'planejado' },
        ],
    },
]

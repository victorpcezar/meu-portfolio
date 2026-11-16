import type { Metadata } from 'next'
import Header from '../../components/NavBar'
import Footer from '../../components/Footer'
import Roadmap from '../../sections/Roadmap'

export const metadata: Metadata = {
    title: 'Roadmap de estudos | Victor Pires',
    description:
        'O que estou estudando agora: TypeScript, Node.js, Express e arquitetura de software, em formato de roadmap.',
}

export default function EstudosPage() {
    return (
        <>
            <Header />
            <main>
                <Roadmap />
            </main>
            <Footer />
        </>
    )
}

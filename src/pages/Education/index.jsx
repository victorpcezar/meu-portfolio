import { FaGraduationCap, FaCertificate, FaCodeBranch } from 'react-icons/fa';
import {
    Container,
    Title,
    Grid,
    Card,
    CardHeader,
    StatusTag,
    Description
} from './styles';

const educationData = [
    {
        id: 1,
        title: 'Análise e Desenvolvimento de Sistemas',
        institution: 'UNICIVE - Centro Universitário Cidade Verde',
        period: 'ENSINO SUPERIOR',
        icon: FaGraduationCap,
        description: 'Foco em engenharia de software, arquitetura de sistemas, modelagem de dados e sólidos fundamentos em Information Technology.'
    }
];

export default function Education() {
    return (
        <Container id="formacao">
            <Title>Formação Acadêmica</Title>

            <Grid>
                {educationData.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <Card
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.4, delay: index * 0.15 }}
                            whileHover={{ scale: 1.01 }}
                        >
                            <CardHeader>
                                <div className="icon">
                                    <Icon />
                                </div>
                                <div className="info">
                                    <h3>{item.title}</h3>
                                    <span className="institution">@ {item.institution}</span>
                                </div>
                            </CardHeader>

                            <StatusTag>{item.period}</StatusTag>

                            <Description>{item.description}</Description>
                        </Card>
                    );
                })}
            </Grid>
        </Container>
    );
}
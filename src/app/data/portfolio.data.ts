export interface Link {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  name: string;
  summary: string;
  highlights: string[];
  stack: string[];
  repo: string;
  demo?: Link;
  screenshot?: { src: string; alt: string };
  tag?: string;
  featured?: boolean;
}

export interface StackGroup {
  title: string;
  items: string[];
}

export interface PathStop {
  title: string;
  place: string;
  note: string;
  current?: boolean;
}

export interface Book {
  title: string;
  author: string;
}

export const PROFILE = {
  name: 'Guilherme Bifani',
  role: 'Desenvolvedor Backend Java',
  location: 'São Paulo, SP',
  status: 'Aberto a vagas de Desenvolvedor Júnior',
  email: 'gbifani.tech@gmail.com',
  github: 'https://github.com/Bifaniii',
  linkedin: 'https://www.linkedin.com/in/guilhermebifani/',
  whatsapp: '5511964834564',
  photo: 'img/guilherme.webp',
};

export const PROJECTS: Project[] = [
  {
    slug: 'octopus',
    name: 'Octopus · Plantão VidaPet',
    summary:
      'Sistema de plantão para uma clínica veterinária, num caso proposto pela faculdade como se fosse um contrato real. Cuida da internação dos animais, das prescrições e das doses, para o time saber a qualquer hora o que precisa ser aplicado. Somos uma squad de 8 pessoas em Scrum, com tech lead, PO, scrum master e QA, e eu fui a referência técnica do backend.',
    highlights: [
      'Seis microsserviços (usuários, baias, medicações, internação, prescrição e doses), cada um com banco, branch e pipeline próprios',
      'Regras do contrato no código: capacidade das baias, isolamento para vacina vencida, bloqueio de interação proibida no mesmo horário e baia liberada só com a saída do animal',
      'Fiz o microsserviço de usuários: login com JWT, perfis com @PreAuthorize e recuperação de senha por e-mail; o token é validado pelos outros serviços',
      'Conduzi o de medicações com outro dev (registro ANVISA único, esquema contínuo ou sintomático) e revisava e ajustava o código que o time subia',
      'Flyway, desativação no lugar de exclusão para manter o histórico, testes com JUnit e Mockito e pipeline no GitHub Actions até a EC2 da AWS',
    ],
    stack: ['Java 17', 'Spring Boot', 'Spring Security', 'JWT', 'Flyway', 'MySQL', 'Docker', 'GitHub Actions', 'AWS', 'Angular'],
    repo: 'https://github.com/Bifaniii/Octopus',
    demo: { label: 'Ver front em Angular', url: 'https://clinicavidapet.vercel.app' },
    screenshot: { src: 'img/octopus-login.webp', alt: 'Tela de login do Plantão VidaPet, o front em Angular do projeto' },
    tag: 'Em equipe · Scrum',
    featured: true,
  },
  {
    slug: 'house-task-manager',
    name: 'House Task Manager',
    summary:
      'Tarefas de casa divididas entre a família. Pai e mãe criam e aprovam, os filhos iniciam e entregam, e a tarefa só fecha depois da aprovação.',
    highlights: [
      'Dois microsserviços com banco próprio: usuários e tarefas',
      'O serviço de tarefas consulta o de usuários por REST, repassando o JWT',
      'Cadastro publica um evento no RabbitMQ; se o broker cair, o cadastro continua',
    ],
    stack: ['Spring Boot', 'RabbitMQ', 'MySQL', 'Docker Compose', 'JWT'],
    repo: 'https://github.com/Bifaniii/mobile-house-task-manager-java',
    tag: 'Microsserviços',
  },
  {
    slug: 'task-manager',
    name: 'Task Manager API',
    summary: 'API de tarefas em que cada usuário só enxerga e altera as próprias tarefas.',
    highlights: ['Login com JWT e senha em BCrypt', 'Swagger com autenticação', 'Erros padronizados num handler global'],
    stack: ['Spring Boot', 'Spring Security', 'MySQL', 'Swagger'],
    repo: 'https://github.com/Bifaniii/task-manager-java',
  },
  {
    slug: 'clinica',
    name: 'Clínica API',
    summary: 'Pacientes, médicos e consultas. Consulta só em data futura, senha nunca volta na resposta.',
    highlights: ['Herança JPA entre usuário, médico e paciente', '404 e 400 com corpo padronizado'],
    stack: ['Spring Boot', 'JPA', 'Spring Security', 'PostgreSQL'],
    repo: 'https://github.com/Bifaniii/Clinica-Java',
  },
  {
    slug: 'subscriptions',
    name: 'Subscriptions API',
    summary: 'Planos de assinatura (Basic, Premium, VIP) com validade de um mês, rodando em Docker.',
    highlights: ['JWT com jjwt', 'API e banco sobem juntos pelo Docker Compose'],
    stack: ['Spring Boot', 'PostgreSQL', 'Docker', 'JWT'],
    repo: 'https://github.com/Bifaniii/subscriptions-java',
  },
  {
    slug: 'market',
    name: 'Market API',
    summary: 'Cadastro de produtos de um mercadinho, com filtro por categoria e atualização parcial.',
    highlights: ['PATCH que só altera os campos enviados', 'Usuários com perfil e senha em BCrypt'],
    stack: ['Spring Boot', 'PostgreSQL', 'Spring Security'],
    repo: 'https://github.com/Bifaniii/market-api-java',
  },
];

export const SIDE_PROJECTS: (Link & { description: string })[] = [
  {
    label: 'Fly AI',
    url: 'https://flyai-v4.vercel.app/',
    description: 'Chatbot de viagens com IA, feito em grupo na faculdade.',
  },
];

export const STACK: StackGroup[] = [
  {
    title: 'Back-end',
    items: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'Spring Security', 'JWT', 'Bean Validation', 'Flyway', 'RabbitMQ'],
  },
  { title: 'Testes', items: ['JUnit 5', 'Mockito', 'MockMvc', 'H2', 'GitHub Actions'] },
  { title: 'Dados e infra', items: ['MySQL', 'PostgreSQL', 'Docker', 'Docker Compose', 'Linux', 'Git'] },
  { title: 'Front-end', items: ['Angular', 'TypeScript', 'React', 'HTML e CSS'] },
];

export const PATH: PathStop[] = [
  { title: 'Técnico em Química', place: 'ETEC Raposo Tavares', note: 'Ensino médio integrado ao técnico.' },
  {
    title: 'Área da saúde',
    place: 'Biomedicina, Medicina em La Plata e Fisioterapia',
    note: 'Descobri que o que me atraía era investigar o diagnóstico.',
  },
  { title: 'Engenharia de Software', place: 'Um semestre, EAD', note: 'Confirmou que era essa a área que eu queria.' },
  {
    title: 'Análise e Desenvolvimento de Sistemas',
    place: 'Universidade Cruzeiro do Sul, Santo Amaro',
    note: 'No 3º semestre, junto com o estágio de TI na Object Data.',
    current: true,
  },
];

export const CERTIFICATIONS: string[] = [
  'Oracle Cloud Infrastructure (OCI) 2025 Foundations Associate',
];

export const BOOKS: Book[] = [
  { title: 'Fahrenheit 451', author: 'Ray Bradbury' },
  { title: 'A Biblioteca da Meia-Noite', author: 'Matt Haig' },
  { title: 'O Projeto Rosie', author: 'Graeme Simsion' },
];

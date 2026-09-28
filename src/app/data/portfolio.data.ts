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
  tests?: number;
  repo: string;
  demo?: Link;
  tag?: string;
  featured?: boolean;
}

export interface StackGroup {
  title: string;
  items: string[];
}

export interface JourneyItem {
  when: string;
  title: string;
  description: string;
}

export const PROFILE = {
  name: 'Guilherme Bifani',
  role: 'Desenvolvedor Backend Java',
  location: 'São Paulo, SP',
  status: 'Aberto a vagas de Desenvolvedor Java Júnior',
  email: 'gbifani.tech@gmail.com',
  github: 'https://github.com/Bifaniii',
  linkedin: 'https://www.linkedin.com/in/guilhermebifani/',
  whatsapp: '5511964834564',
  photo: 'img/guilherme.webp',
};

export const PROJECTS: Project[] = [
  {
    slug: 'house-task-manager',
    name: 'House Task Manager',
    summary:
      'Tarefas de casa divididas entre a família. Pai e mãe criam e aprovam, os filhos iniciam e entregam, e a tarefa só fecha depois da aprovação.',
    highlights: [
      'Dois microsserviços com banco próprio: usuários e tarefas',
      'O serviço de tarefas consulta o de usuários por REST, repassando o JWT',
      'Cadastro publica um evento no RabbitMQ; se o broker cair, o cadastro continua',
      'Recuperação de senha por e-mail com token de uso único',
    ],
    stack: ['Java 17', 'Spring Boot', 'RabbitMQ', 'MySQL', 'Docker Compose', 'JWT'],
    tests: 51,
    repo: 'https://github.com/Bifaniii/mobile-house-task-manager-java',
    tag: 'Microsserviços',
    featured: true,
  },
  {
    slug: 'octopus',
    name: 'Octopus · Plantão VidaPet',
    summary:
      'Projeto em squad na faculdade: painel de medicação e internação de uma clínica veterinária. Fiz o módulo de usuários e o de medicações.',
    highlights: [
      'Perfis com @PreAuthorize e JWT validado pelos outros módulos',
      'Schema versionado com Flyway',
      'Nada é apagado: registros saem de uso por desativação',
    ],
    stack: ['Spring Boot', 'Spring Security', 'Flyway', 'MySQL', 'Angular'],
    tests: 31,
    repo: 'https://github.com/Bifaniii/Octopus',
    demo: { label: 'Front em Angular', url: 'https://octopus-front-delta.vercel.app' },
    tag: 'Em equipe',
  },
  {
    slug: 'task-manager',
    name: 'Task Manager API',
    summary: 'API de tarefas em que cada usuário só enxerga e altera as próprias tarefas.',
    highlights: ['Login com JWT e senha em BCrypt', 'Swagger com autenticação', 'Erros padronizados num handler global'],
    stack: ['Spring Boot', 'Spring Security', 'MySQL', 'Swagger'],
    tests: 25,
    repo: 'https://github.com/Bifaniii/task-manager-java',
  },
  {
    slug: 'clinica',
    name: 'Clínica API',
    summary: 'Pacientes, médicos e consultas. Consulta só em data futura, senha nunca volta na resposta.',
    highlights: ['Herança JPA entre usuário, médico e paciente', '404 e 400 com corpo padronizado'],
    stack: ['Spring Boot', 'JPA', 'Spring Security', 'PostgreSQL'],
    tests: 27,
    repo: 'https://github.com/Bifaniii/Clinica-Java',
  },
  {
    slug: 'subscriptions',
    name: 'Subscriptions API',
    summary: 'Planos de assinatura (Basic, Premium, VIP) com validade de um mês, rodando em Docker.',
    highlights: ['JWT com jjwt', 'API e banco sobem juntos pelo Docker Compose'],
    stack: ['Spring Boot', 'PostgreSQL', 'Docker', 'JWT'],
    tests: 20,
    repo: 'https://github.com/Bifaniii/subscriptions-java',
  },
  {
    slug: 'market',
    name: 'Market API',
    summary: 'Cadastro de produtos de um mercadinho, com filtro por categoria e atualização parcial.',
    highlights: ['PATCH que só altera os campos enviados', 'Usuários com perfil e senha em BCrypt'],
    stack: ['Spring Boot', 'PostgreSQL', 'Spring Security'],
    tests: 19,
    repo: 'https://github.com/Bifaniii/market-api-java',
  },
];

export const SIDE_PROJECTS: (Link & { description: string })[] = [
  {
    label: 'Fly AI',
    url: 'https://flyai-v4.vercel.app/',
    description: 'Chatbot de viagens com IA, feito em grupo na faculdade.',
  },
  {
    label: 'Config-shell',
    url: 'https://github.com/Bifaniii/config-shell',
    description: 'Meu terminal: zsh, Neovim e GNOME no Linux.',
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

export const JOURNEY: JourneyItem[] = [
  {
    when: 'Agora',
    title: 'Estagiário de TI · suporte a sistemas ERP',
    description:
      'Suporte a sistemas de gestão no dia a dia, enquanto faço a transição para desenvolvimento backend.',
  },
  {
    when: 'Em curso',
    title: 'Análise e Desenvolvimento de Sistemas',
    description: 'Graduação. O Octopus e o Fly AI saíram de disciplinas do curso.',
  },
  {
    when: '2025',
    title: 'Oracle Cloud Infrastructure Foundations Associate',
    description: 'Certificação de fundamentos de nuvem da Oracle.',
  },
  {
    when: 'Estudando',
    title: 'Alura · Cloud Security',
    description: 'AWS, Azure e GCP com foco em segurança e criptografia.',
  },
];

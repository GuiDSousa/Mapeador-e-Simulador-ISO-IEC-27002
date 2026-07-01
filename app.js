// Database of all 93 controls from ISO/IEC 27002:2022
const controlsData = [
    // Theme: Organizational (Clause 5)
    { id: "5.1", name: "Políticas para segurança da informação", theme: "organizational", type: "preventive", cia: ["C", "I", "A"], nist: "identify", desc: "Definir e revisar políticas de segurança da informação alinhadas com as diretrizes da organização." },
    { id: "5.2", name: "Papéis e responsabilidades de segurança da informação", theme: "organizational", type: "preventive", cia: ["C", "I", "A"], nist: "identify", desc: "Definir e atribuir responsabilidades para a proteção dos ativos de informação." },
    { id: "5.3", name: "Segregação de funções", theme: "organizational", type: "preventive", cia: ["C", "I"], nist: "protect", desc: "Separar tarefas conflitantes para reduzir oportunidades de modificação não autorizada ou fraude." },
    { id: "5.4", name: "Responsabilidades da direção", theme: "organizational", type: "preventive", cia: ["C", "I", "A"], nist: "identify", desc: "Garantir que a administração apoie e exija a aplicação da segurança da informação." },
    { id: "5.5", name: "Contato com autoridades", theme: "organizational", type: "corrective", cia: ["A"], nist: "respond", desc: "Manter canais de contato apropriados com autoridades legais e órgãos reguladores." },
    { id: "5.6", name: "Contato com grupos de interesse especial", theme: "organizational", type: "preventive", cia: ["C", "I", "A"], nist: "identify", desc: "Manter contatos com associações profissionais e fóruns de segurança." },
    { id: "5.7", name: "Inteligência de ameaças", theme: "organizational", type: "preventive", cia: ["C", "I", "A"], nist: "identify", desc: "Coletar e analisar informações sobre ameaças para entender o ambiente de riscos (Novo controle 2022)." },
    { id: "5.8", name: "Segurança da informação no gerenciamento de projetos", theme: "organizational", type: "preventive", cia: ["C", "I", "A"], nist: "identify", desc: "Integrar requisitos de segurança no ciclo de vida de todos os projetos." },
    { id: "5.9", name: "Inventário de informações e outros ativos associados", theme: "organizational", type: "preventive", cia: ["C", "I", "A"], nist: "identify", desc: "Identificar e gerenciar o ciclo de vida de todos os ativos de informação relevantes." },
    { id: "5.10", name: "Uso aceitável de informações e outros ativos associados", theme: "organizational", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Definir regras para a utilização correta e aceitável de informações e ativos." },
    { id: "5.11", name: "Retorno de ativos", theme: "organizational", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Garantir que colaboradores devolvam os ativos da organização ao encerrar o vínculo." },
    { id: "5.12", name: "Classificação da informação", theme: "organizational", type: "preventive", cia: ["C"], nist: "identify", desc: "Classificar a informação de acordo com sua sensibilidade e criticidade para o negócio." },
    { id: "5.13", name: "Rotulagem de informação", theme: "organizational", type: "preventive", cia: ["C"], nist: "protect", desc: "Desenvolver e implementar rótulos físicos e digitais para identificar a classificação da informação." },
    { id: "5.14", name: "Transferência de informação", theme: "organizational", type: "preventive", cia: ["C", "I"], nist: "protect", desc: "Estabelecer acordos e regras para a transferência segura de dados interna e externamente." },
    { id: "5.15", name: "Controle de acesso", theme: "organizational", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Controlar o acesso físico e lógico a ativos com base nos requisitos de segurança." },
    { id: "5.16", name: "Gerenciamento de identidade", theme: "organizational", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Gerenciar o ciclo de vida completo das identidades digitais na organização." },
    { id: "5.17", name: "Informações de autenticação", theme: "organizational", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Controlar e proteger a alocação e o uso de senhas e dados de autenticação." },
    { id: "5.18", name: "Direitos de acesso", theme: "organizational", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Provisionar, revisar e revogar direitos de acesso conforme a necessidade de conhecer." },
    { id: "5.19", name: "Segurança da informação no relacionamento com provedores", theme: "organizational", type: "preventive", cia: ["C", "I", "A"], nist: "identify", desc: "Mitigar riscos associados ao acesso de fornecedores externos a ativos organizacionais." },
    { id: "5.20", name: "Tratamento da segurança nos acordos com provedores", theme: "organizational", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Incluir cláusulas de segurança da informação nos contratos com fornecedores." },
    { id: "5.21", name: "Gerenciamento da segurança na cadeia de suprimentos de TIC", theme: "organizational", type: "preventive", cia: ["C", "I", "A"], nist: "identify", desc: "Definir requisitos de segurança para aquisição de produtos e serviços de tecnologia." },
    { id: "5.22", name: "Monitoramento e análise crítica de serviços de provedores", theme: "organizational", type: "detective", cia: ["C", "I", "A"], nist: "detect", desc: "Auditar e revisar regularmente o desempenho de segurança de fornecedores." },
    { id: "5.23", name: "Segurança da informação no uso de serviços em nuvem", theme: "organizational", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Definir processos para aquisição, uso e gestão segura de nuvem (Novo controle 2022)." },
    { id: "5.24", name: "Planejamento e preparação para gestão de incidentes", theme: "organizational", type: "preventive", cia: ["C", "I", "A"], nist: "respond", desc: "Estruturar processos para registrar, categorizar e responder a incidentes de segurança." },
    { id: "5.25", name: "Avaliação e decisão sobre eventos de segurança", theme: "organizational", type: "detective", cia: ["C", "I", "A"], nist: "detect", desc: "Avaliar eventos de segurança da informação para determinar se constituem incidentes." },
    { id: "5.26", name: "Resposta a incidentes de segurança da informação", theme: "organizational", type: "corrective", cia: ["C", "I", "A"], nist: "respond", desc: "Executar ações de resposta para conter e remediar incidentes cibernéticos." },
    { id: "5.27", name: "Aprendizado com incidentes de segurança da informação", theme: "organizational", type: "corrective", cia: ["C", "I", "A"], nist: "recover", desc: "Utilizar o aprendizado de incidentes passados para melhorar as defesas atuais." },
    { id: "5.28", name: "Coleta de evidências", theme: "organizational", type: "corrective", cia: ["C", "I"], nist: "respond", desc: "Estabelecer procedimentos para identificar e preservar evidências digitais para fins legais." },
    { id: "5.29", name: "Segurança da informação em caso de interrupção", theme: "organizational", type: "corrective", cia: ["A"], nist: "recover", desc: "Garantir a continuidade da segurança da informação durante cenários de crise ou desastre." },
    { id: "5.30", name: "Prontidão de TIC para continuidade dos negócios", theme: "organizational", type: "corrective", cia: ["A"], nist: "recover", desc: "Planejar a prontidão e resiliência da infraestrutura de TI (Novo controle 2022)." },
    { id: "5.31", name: "Requisitos legais, estatutários, regulamentares e contratuais", theme: "organizational", type: "preventive", cia: ["C", "I", "A"], nist: "identify", desc: "Identificar leis aplicáveis (como LGPD) e obrigações contratuais de conformidade." },
    { id: "5.32", name: "Direitos de propriedade intelectual", theme: "organizational", type: "preventive", cia: ["C", "I"], nist: "protect", desc: "Proteger direitos autorais de softwares e marcas, garantindo uso legal de licenças." },
    { id: "5.33", name: "Proteção de registros", theme: "organizational", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Garantir a preservação e integridade de registros organizacionais essenciais." },
    { id: "5.34", name: "Privacidade e proteção de dados pessoais (PII)", theme: "organizational", type: "preventive", cia: ["C"], nist: "protect", desc: "Garantir a conformidade regulatória no tratamento de dados pessoais identificáveis." },
    { id: "5.35", name: "Análise crítica independente de segurança da informação", theme: "organizational", type: "detective", cia: ["C", "I", "A"], nist: "identify", desc: "Realizar auditorias externas periódicas e análises independentes da governança." },
    { id: "5.36", name: "Conformidade com políticas e padrões de segurança", theme: "organizational", type: "detective", cia: ["C", "I", "A"], nist: "identify", desc: "Garantir que todos os sistemas operem em conformidade com as políticas internas." },
    { id: "5.37", name: "Procedimentos operacionais documentados", theme: "organizational", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Formalizar manuais e procedimentos técnicos para operação estável da TI." },

    // Theme: People (Clause 6)
    { id: "6.1", name: "Triagem", theme: "people", type: "preventive", cia: ["C", "I", "A"], nist: "identify", desc: "Realizar verificações de antecedentes em candidatos antes da contratação." },
    { id: "6.2", name: "Termos e condições de contratação", theme: "people", type: "preventive", cia: ["C", "I", "A"], nist: "identify", desc: "Garantir que as obrigações contratuais incluam a responsabilidade por segurança." },
    { id: "6.3", name: "Conscientização, educação e treinamento em segurança da informação", theme: "people", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Promover cultura de segurança e treinamentos periódicos contra phishing e engenharia social." },
    { id: "6.4", name: "Processo disciplinar", theme: "people", type: "corrective", cia: ["C", "I", "A"], nist: "respond", desc: "Formalizar ações e penalidades para violações de políticas de segurança." },
    { id: "6.5", name: "Responsabilidades após o encerramento ou mudança de contratação", theme: "people", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Garantir que deveres de confidencialidade continuem após a saída do colaborador." },
    { id: "6.6", name: "Acordos de confidencialidade ou de não divulgação (NDA)", theme: "people", type: "preventive", cia: ["C"], nist: "protect", desc: "Firmar acordos formais de confidencialidade com pessoal interno e terceiros." },
    { id: "6.7", name: "Trabalho remoto", theme: "people", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Aplicar medidas de proteção específicas para atividades fora das dependências físicas." },
    { id: "6.8", name: "Relato de eventos de segurança da informação", theme: "people", type: "detective", cia: ["C", "I", "A"], nist: "detect", desc: "Incentivar e disponibilizar canais para que colaboradores reportem potenciais brechas." },

    // Theme: Physical (Clause 7)
    { id: "7.1", name: "Perímetros de segurança física", theme: "physical", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Utilizar barreiras físicas (muros, catracas) para proteger áreas internas críticas." },
    { id: "7.2", name: "Controles de entrada física", theme: "physical", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Garantir que apenas pessoas autorizadas acessem as instalações." },
    { id: "7.3", name: "Segurança de escritórios, salas e instalações", theme: "physical", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Projetar a segurança física interna para escritórios e CPDs." },
    { id: "7.4", name: "Monitoramento de segurança física", theme: "physical", type: "detective", cia: ["C", "I", "A"], nist: "detect", desc: "Utilizar câmeras (CCTV) e sensores para vigiar perímetros físicos (Novo controle 2022)." },
    { id: "7.5", name: "Proteção contra ameaças físicas e ambientais", theme: "physical", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Instalar barreiras e sensores contra incêndios, inundações ou picos elétricos." },
    { id: "7.6", name: "Trabalho em áreas seguras", theme: "physical", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Estabelecer regras de segurança para colaboradores em áreas restritas." },
    { id: "7.7", name: "Mesa limpa e tela limpa", theme: "physical", type: "preventive", cia: ["C"], nist: "protect", desc: "Garantir que papéis confidenciais e telas de computadores fiquem protegidos quando ausentes." },
    { id: "7.8", name: "Posicionamento e proteção de equipamentos", theme: "physical", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Posicionar servidores e equipamentos para minimizar riscos ambientais e acesso indevido." },
    { id: "7.9", name: "Segurança de ativos fora das dependências", theme: "physical", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Proteger notebooks e mídias de armazenamento quando utilizados fora da empresa." },
    { id: "7.10", name: "Mídias de armazenamento", theme: "physical", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Controlar e proteger o ciclo de vida completo de discos rígidos e mídias portáteis." },
    { id: "7.11", name: "Utilidades de infraestrutura", theme: "physical", type: "preventive", cia: ["A"], nist: "protect", desc: "Garantir fornecimento redundante de energia, refrigeração e links de rede." },
    { id: "7.12", name: "Segurança do cabeamento", theme: "physical", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Proteger cabos de telecomunicações contra interceptações e danos." },
    { id: "7.13", name: "Manutenção de equipamentos", theme: "physical", type: "preventive", cia: ["A"], nist: "protect", desc: "Manter hardware e sistemas redundantes com manutenção preventiva ativa." },
    { id: "7.14", name: "Descarte ou reutilização segura de equipamentos", theme: "physical", type: "preventive", cia: ["C"], nist: "protect", desc: "Desmagnetizar ou destruir mídias antes de descartar hardware obsoleto." },

    // Theme: Technological (Clause 8)
    { id: "8.1", name: "Dispositivos de usuário final", theme: "technological", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Proteger e gerenciar notebooks, celulares e tablets corporativos." },
    { id: "8.2", name: "Direitos de acesso privilegiado", theme: "technological", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Restringir e monitorar privilégios de administrador (root/admin)." },
    { id: "8.3", name: "Restrição de acesso à informação", theme: "technological", type: "preventive", cia: ["C"], nist: "protect", desc: "Bloquear acesso a dados confidenciais com base na função profissional do usuário." },
    { id: "8.4", name: "Acesso ao código-fonte", theme: "technological", type: "preventive", cia: ["C", "I"], nist: "protect", desc: "Restringir acesso a repositórios de código-fonte para evitar vazamentos e adulterações." },
    { id: "8.5", name: "Autenticação segura", theme: "technological", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Implementar autenticação forte (MFA, biometria) para acesso aos sistemas." },
    { id: "8.6", name: "Gerenciamento de capacidade", theme: "technological", type: "preventive", cia: ["A"], nist: "protect", desc: "Monitorar o uso de recursos computacionais para evitar lentidão e indisponibilidade." },
    { id: "8.7", name: "Proteção contra malware", theme: "technological", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Implementar antivírus, EDR e ferramentas contra vírus em todos os endpoints." },
    { id: "8.8", name: "Gerenciamento de vulnerabilidades técnicas", theme: "technological", type: "detective", cia: ["C", "I", "A"], nist: "identify", desc: "Realizar varreduras periódicas de segurança e aplicar patches de correção." },
    { id: "8.9", name: "Gerenciamento de configuração", theme: "technological", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Garantir padrões seguros de hardening em servidores e redes (Novo controle 2022)." },
    { id: "8.10", name: "Exclusão de informações", theme: "technological", type: "preventive", cia: ["C"], nist: "protect", desc: "Remover dados expirados conforme políticas de retenção (Novo controle 2022)." },
    { id: "8.11", name: "Mascaramento de dados", theme: "technological", type: "preventive", cia: ["C"], nist: "protect", desc: "Ocultar dados confidenciais (ex: criptografar ou ofuscar em homologação) (Novo controle 2022)." },
    { id: "8.12", name: "Prevenção contra vazamento de dados (DLP)", theme: "technological", type: "preventive", cia: ["C"], nist: "protect", desc: "Monitorar e bloquear exfiltração não autorizada de dados confidenciais (Novo controle 2022)." },
    { id: "8.13", name: "Backup de informações", theme: "technological", type: "corrective", cia: ["I", "A"], nist: "recover", desc: "Manter cópias de segurança criptografadas, testadas e armazenadas offline." },
    { id: "8.14", name: "Redundância dos recursos de processamento de informação", theme: "technological", type: "corrective", cia: ["A"], nist: "recover", desc: "Projetar arquiteturas de alta disponibilidade para evitar pontos únicos de falha." },
    { id: "8.15", name: "Registro de logs", theme: "technological", type: "detective", cia: ["C", "I", "A"], nist: "detect", desc: "Habilitar o registro detalhado de auditoria de acessos e modificações." },
    { id: "8.16", name: "Atividades de monitoramento", theme: "technological", type: "detective", cia: ["C", "I", "A"], nist: "detect", desc: "Analisar logs de rede e servidores em tempo real buscando comportamentos anômalos." },
    { id: "8.17", name: "Sincronização do relógio", theme: "technological", type: "preventive", cia: ["I"], nist: "protect", desc: "Garantir o uso de servidores NTP comuns para sincronia de tempo nas auditorias." },
    { id: "8.18", name: "Uso de programas utilitários privilegiados", theme: "technological", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Restringir o acesso a ferramentas do sistema que possam burlar defesas locais." },
    { id: "8.19", name: "Instalação de software em sistemas operacionais", theme: "technological", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Bloquear a instalação de softwares não homologados por usuários finais." },
    { id: "8.20", name: "Segurança de redes", theme: "technological", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Segmentar redes corporativas, usar firewalls e estabelecer defesas de perímetro." },
    { id: "8.21", name: "Segurança dos serviços de rede", theme: "technological", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Garantir acordos seguros de nível de serviço com operadoras e gerenciar conexões." },
    { id: "8.22", name: "Segregação de redes", theme: "technological", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Dividir redes em sub-redes (ex: rede de visitantes separada da rede corporativa)." },
    { id: "8.23", name: "Filtragem web", theme: "technological", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Bloquear acesso a sites maliciosos ou inadequados no ambiente de trabalho (Novo controle 2022)." },
    { id: "8.24", name: "Uso de criptografia", theme: "technological", type: "preventive", cia: ["C", "I"], nist: "protect", desc: "Codificar dados em repouso e em trânsito com algoritmos robustos (ex: AES, TLS)." },
    { id: "8.25", name: "Ciclo de vida de desenvolvimento seguro", theme: "technological", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Incluir requisitos de segurança em todas as fases do ciclo de desenvolvimento de software." },
    { id: "8.26", name: "Requisitos de segurança da aplicação", theme: "technological", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Definir e validar proteções de segurança em novos sistemas antes do Go-Live." },
    { id: "8.27", name: "Arquitetura de sistemas seguros e princípios de engenharia", theme: "technological", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Desenhar sistemas tolerantes a falhas e baseados no princípio do privilégio mínimo." },
    { id: "8.28", name: "Codificação segura", theme: "technological", type: "preventive", cia: ["C", "I"], nist: "protect", desc: "Garantir técnicas de desenvolvimento contra injeções SQL e XSS (Novo controle 2022)." },
    { id: "8.29", name: "Testes de segurança em desenvolvimento e aceitação", theme: "technological", type: "detective", cia: ["C", "I"], nist: "detect", desc: "Realizar varreduras SAST/DAST e testes de intrusão antes do lançamento oficial." },
    { id: "8.30", name: "Desenvolvimento terceirizado", theme: "technological", type: "preventive", cia: ["C", "I"], nist: "protect", desc: "Exigir e auditar práticas de segurança em fábricas de software externas." },
    { id: "8.31", name: "Segregação de ambientes de desenvolvimento, teste e produção", theme: "technological", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Isolar ambientes para evitar alterações acidentais de dados de clientes reais." },
    { id: "8.32", name: "Gerenciamento de mudanças", theme: "technological", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Registrar e aprovar toda alteração de configuração em ambientes de produção." },
    { id: "8.33", name: "Informações de teste", theme: "technological", type: "preventive", cia: ["C"], nist: "protect", desc: "Garantir a descaracterização de dados de produção ao usá-los para testes corporativos." },
    { id: "8.34", name: "Proteção de sistemas de informação durante testes de auditoria", theme: "technological", type: "preventive", cia: ["C", "I", "A"], nist: "protect", desc: "Planejar janelas de auditoria para evitar travamentos ou impactos operacionais." }
];

// Controls selected for the Gap Analysis Simulator
const gapControls = [
    { id: "5.1", name: "5.1 Políticas para segurança da informação", theme: "organizational", defaultValue: 4 },
    { id: "5.7", name: "5.7 Inteligência de ameaças", theme: "organizational", defaultValue: 1 },
    { id: "5.15", name: "5.15 Controle de acesso", theme: "organizational", defaultValue: 4 },
    { id: "5.23", name: "5.23 Uso de serviços em nuvem", theme: "organizational", defaultValue: 2 },
    { id: "6.3", name: "6.3 Conscientização e treinamento", theme: "people", defaultValue: 3 },
    { id: "7.4", name: "7.4 Monitoramento físico", theme: "physical", defaultValue: 3 },
    { id: "8.9", name: "8.9 Gerenciamento de configuração", theme: "technological", defaultValue: 2 },
    { id: "8.12", name: "8.12 Prevenção contra vazamento (DLP)", theme: "technological", defaultValue: 0 },
    { id: "8.16", name: "8.16 Atividades de monitoramento (SIEM)", theme: "technological", defaultValue: 2 },
    { id: "8.24", name: "8.24 Uso de criptografia", theme: "technological", defaultValue: 3 },
    { id: "8.28", name: "8.28 Codificação segura", theme: "technological", defaultValue: 1 }
];

// Global State
let activeSection = "dashboard";
let selectedControlId = "8.24";
let radarChart = null;
let barChart = null;
let currentMaturityScores = {};

// Initialize scores for Gap Analysis
gapControls.forEach(ctrl => {
    currentMaturityScores[ctrl.id] = ctrl.defaultValue;
});

// DOM Loading
function initApp() {
    initNavigation();
    initCatalog();
    initGapAnalysis();
    initThreatSimulator();
    updateDashboardStats();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
} else {
    initApp();
}

// 1. NAVIGATION LOGIC
function initNavigation() {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            const targetSection = e.currentTarget.getAttribute("data-section");
            if (!targetSection) return;
            
            // Switch tabs
            navItems.forEach(nav => nav.classList.remove("active"));
            e.currentTarget.classList.add("active");
            
            // Switch sections
            document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
            const targetEl = document.getElementById(`sec-${targetSection}`);
            if (targetEl) {
                targetEl.classList.add("active");
                activeSection = targetSection;
                
                // Specific trigger for charts rendering when section is active
                if (targetSection === "gap" || targetSection === "dashboard") {
                    setTimeout(renderGapCharts, 50);
                }
            }
        });
    });
}

// 2. CONTROLS CATALOG LOGIC
function initCatalog() {
    const tableBody = document.getElementById("catalog-table-body");
    const searchInput = document.getElementById("catalog-search");
    const filterTheme = document.getElementById("filter-theme");
    const filterType = document.getElementById("filter-type");
    const filterProperty = document.getElementById("filter-property");

    // Event listeners
    searchInput.addEventListener("input", filterControls);
    filterTheme.addEventListener("change", filterControls);
    filterType.addEventListener("change", filterControls);
    filterProperty.addEventListener("change", filterControls);

    // Initial render
    renderCatalogTable(controlsData);
    showControlDetails(selectedControlId);
}

function renderCatalogTable(controls) {
    const tableBody = document.getElementById("catalog-table-body");
    tableBody.innerHTML = "";

    if (controls.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-light); padding: 2rem;">Nenhum controle encontrado com os filtros selecionados.</td></tr>`;
        return;
    }

    controls.forEach(ctrl => {
        const row = document.createElement("tr");
        row.setAttribute("data-id", ctrl.id);
        if (ctrl.id === selectedControlId) {
            row.classList.add("selected");
        }

        // Theme Pills mapping
        let themeLabel = "";
        let themeClass = "";
        if (ctrl.theme === "organizational") { themeLabel = "Org"; themeClass = "pill-theme-org"; }
        else if (ctrl.theme === "people") { themeLabel = "Pessoas"; themeClass = "pill-theme-peo"; }
        else if (ctrl.theme === "physical") { themeLabel = "Físico"; themeClass = "pill-theme-phy"; }
        else if (ctrl.theme === "technological") { themeLabel = "Tec"; themeClass = "pill-theme-tec"; }

        // Type Pills mapping
        let typeLabel = "";
        let typeClass = "";
        if (ctrl.type === "preventive") { typeLabel = "Preventivo"; typeClass = "pill-type-prev"; }
        else if (ctrl.type === "detective") { typeLabel = "Detectivo"; typeClass = "pill-type-det"; }
        else if (ctrl.type === "corrective") { typeLabel = "Corretivo"; typeClass = "pill-type-corr"; }

        // Properties mapping
        const cActive = ctrl.cia.includes("C") ? "active" : "";
        const iActive = ctrl.cia.includes("I") ? "active" : "";
        const aActive = ctrl.cia.includes("A") ? "active" : "";

        row.innerHTML = `
            <td style="font-weight: 700; width: 60px;">${ctrl.id}</td>
            <td style="font-weight: 500;">${ctrl.name}</td>
            <td style="width: 100px;"><span class="pill ${themeClass}">${themeLabel}</span></td>
            <td style="width: 110px;"><span class="pill ${typeClass}">${typeLabel}</span></td>
            <td style="width: 100px;">
                <span class="pill pill-cia ${cActive}">C</span>
                <span class="pill pill-cia ${iActive}">I</span>
                <span class="pill pill-cia ${aActive}">A</span>
            </td>
        `;

        row.addEventListener("click", () => {
            document.querySelectorAll("#catalog-table-body tr").forEach(r => r.classList.remove("selected"));
            row.classList.add("selected");
            selectedControlId = ctrl.id;
            showControlDetails(ctrl.id);
        });

        tableBody.appendChild(row);
    });
}

function filterControls() {
    const searchVal = document.getElementById("catalog-search").value.toLowerCase();
    const themeVal = document.getElementById("filter-theme").value;
    const typeVal = document.getElementById("filter-type").value;
    const propertyVal = document.getElementById("filter-property").value;

    const filtered = controlsData.filter(ctrl => {
        // Search filter
        const matchSearch = ctrl.id.includes(searchVal) || ctrl.name.toLowerCase().includes(searchVal) || ctrl.desc.toLowerCase().includes(searchVal);
        // Theme filter
        const matchTheme = !themeVal || ctrl.theme === themeVal;
        // Type filter
        const matchType = !typeVal || ctrl.type === typeVal;
        // CIA Property filter
        const matchProperty = !propertyVal || ctrl.cia.includes(propertyVal);

        return matchSearch && matchTheme && matchType && matchProperty;
    });

    renderCatalogTable(filtered);
}

function showControlDetails(id) {
    const ctrl = controlsData.find(c => c.id === id);
    if (!ctrl) return;

    document.getElementById("detail-code").innerText = `Controle ${ctrl.id}`;
    document.getElementById("detail-title").innerText = ctrl.name;
    document.getElementById("detail-desc").innerText = ctrl.desc;

    // Theme mappings for details
    let themeText = "";
    if (ctrl.theme === "organizational") themeText = "Organizacional (Cláusula 5)";
    else if (ctrl.theme === "people") themeText = "Pessoas (Cláusula 6)";
    else if (ctrl.theme === "physical") themeText = "Físico (Cláusula 7)";
    else if (ctrl.theme === "technological") themeText = "Tecnológico (Cláusula 8)";
    document.getElementById("detail-attr-theme").innerText = themeText;

    // Type mappings for details
    let typeText = "";
    if (ctrl.type === "preventive") typeText = "Preventivo";
    else if (ctrl.type === "detective") typeText = "Detectivo";
    else if (ctrl.type === "corrective") typeText = "Corretivo";
    document.getElementById("detail-attr-type").innerText = typeText;

    // CIA Properties
    document.getElementById("detail-attr-cia").innerHTML = ctrl.cia.map(prop => {
        let label = "";
        if (prop === "C") label = "Confidencialidade";
        else if (prop === "I") label = "Integridade";
        else if (prop === "A") label = "Disponibilidade";
        return `<span style="background:#e2e8f0; color:#334155; padding: 2px 6px; border-radius:4px; font-size:11px; margin-right:4px; display:inline-block;">${label}</span>`;
    }).join("");

    // NIST CSF mapping
    let nistText = "";
    if (ctrl.nist === "identify") nistText = "Identificar (Identify)";
    else if (ctrl.nist === "protect") nistText = "Proteger (Protect)";
    else if (ctrl.nist === "detect") nistText = "Detectar (Detect)";
    else if (ctrl.nist === "respond") nistText = "Responder (Respond)";
    else if (ctrl.nist === "recover") nistText = "Recuperar (Recover)";
    document.getElementById("detail-attr-nist").innerText = nistText;
}

// 3. GAP ANALYSIS & MATURITY LOGIC
function initGapAnalysis() {
    const slidersContainer = document.getElementById("gap-sliders-list");
    slidersContainer.innerHTML = "";

    gapControls.forEach(ctrl => {
        const row = document.createElement("div");
        row.className = "gap-control-row";
        
        const textLevel = getMaturityLevelText(ctrl.defaultValue);

        row.innerHTML = `
            <div class="gap-control-header">
                <span class="gap-control-name">${ctrl.name}</span>
                <span class="gap-score-badge" id="badge-${ctrl.id}">Nível ${ctrl.defaultValue}</span>
            </div>
            <div class="slider-container">
                <input type="range" class="gap-slider" id="slider-${ctrl.id}" min="0" max="5" value="${ctrl.defaultValue}">
            </div>
            <div class="slider-labels">
                <span>0. Inexistente</span>
                <span id="level-desc-${ctrl.id}" style="font-weight: 500; color: var(--text-muted);">${textLevel}</span>
                <span>5. Otimizado</span>
            </div>
        `;

        slidersContainer.appendChild(row);

        // Event listener for maturity change
        const slider = document.getElementById(`slider-${ctrl.id}`);
        slider.addEventListener("input", (e) => {
            const val = parseInt(e.target.value);
            currentMaturityScores[ctrl.id] = val;
            
            // Update UI elements
            document.getElementById(`badge-${ctrl.id}`).innerText = `Nível ${val}`;
            document.getElementById(`level-desc-${ctrl.id}`).innerText = getMaturityLevelText(val);
            
            // Recalculate average, charts & dashboard stats
            renderGapCharts();
            updateDashboardStats();
            generateRecommendations();
        });
    });

    generateRecommendations();
}

function getMaturityLevelText(level) {
    const levels = [
        "Inexistente",
        "Inicial / Ad-hoc",
        "Repetível",
        "Definido / Documentado",
        "Gerenciado / Medido",
        "Otimizado"
    ];
    return levels[level] || "Não avaliado";
}

function calculateAverages() {
    const averages = {
        organizational: { total: 0, count: 0 },
        people: { total: 0, count: 0 },
        physical: { total: 0, count: 0 },
        technological: { total: 0, count: 0 }
    };

    gapControls.forEach(ctrl => {
        const score = currentMaturityScores[ctrl.id];
        averages[ctrl.theme].total += score;
        averages[ctrl.theme].count++;
    });

    return {
        organizational: averages.organizational.count ? (averages.organizational.total / averages.organizational.count) : 0,
        people: averages.people.count ? (averages.people.total / averages.people.count) : 0,
        physical: averages.physical.count ? (averages.physical.total / averages.physical.count) : 0,
        technological: averages.technological.count ? (averages.technological.total / averages.technological.count) : 0
    };
}

function renderGapCharts() {
    // Only render if containers are visible
    if (!document.getElementById("chart-radar") || !document.getElementById("chart-bar")) return;

    // Safety check for Chart.js availability (offline use)
    if (typeof Chart === 'undefined') {
        console.warn("Chart.js não está disponível. Gráficos omitidos.");
        return;
    }

    const averages = calculateAverages();
    const dataLabels = [
        "Organizacional (Cl. 5)",
        "Pessoas (Cl. 6)",
        "Físico (Cl. 7)",
        "Tecnológico (Cl. 8)"
    ];
    const dataValues = [
        averages.organizational.toFixed(2),
        averages.people.toFixed(2),
        averages.physical.toFixed(2),
        averages.technological.toFixed(2)
    ];
    const targetValues = [4.0, 4.0, 4.0, 4.0]; // Corporate target level 4 (Managed)

    // Destroy existing charts to recreate cleanly
    if (radarChart) radarChart.destroy();
    if (barChart) barChart.destroy();

    // 1. Radar Chart Setup
    const ctxRadar = document.getElementById("chart-radar").getContext("2d");
    radarChart = new Chart(ctxRadar, {
        type: 'radar',
        data: {
            labels: dataLabels,
            datasets: [
                {
                    label: 'Nível Atual de Maturidade',
                    data: dataValues,
                    backgroundColor: 'rgba(37, 99, 235, 0.2)',
                    borderColor: 'rgb(37, 99, 235)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgb(37, 99, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(37, 99, 235)'
                },
                {
                    label: 'Meta Corporativa (Nível 4)',
                    data: targetValues,
                    backgroundColor: 'rgba(148, 163, 184, 0.05)',
                    borderColor: 'rgba(148, 163, 184, 0.8)',
                    borderWidth: 1.5,
                    borderDash: [5, 5],
                    pointBackgroundColor: 'transparent',
                    pointBorderColor: 'rgba(148, 163, 184, 0.8)'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { display: true, color: '#e2e8f0' },
                    grid: { color: '#e2e8f0' },
                    suggestedMin: 0,
                    suggestedMax: 5,
                    ticks: {
                        stepSize: 1,
                        backdropColor: 'transparent',
                        color: '#64748b',
                        font: { family: 'Inter', size: 10 }
                    },
                    pointLabels: {
                        color: '#0f172a',
                        font: { family: 'Inter', weight: 600, size: 11 }
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { font: { family: 'Inter', size: 11 } }
                }
            }
        }
    });

    // 2. Bar Chart Setup (Compliance Percentage)
    // Convert maturity scale 0-5 to a 0-100% compliance relative to target level 4
    const compliancePercentages = dataValues.map(val => Math.min(100, Math.round((val / 4.0) * 100)));

    const ctxBar = document.getElementById("chart-bar").getContext("2d");
    barChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: dataLabels,
            datasets: [{
                label: '% de Aderência à Meta (Maturidade 4)',
                data: compliancePercentages,
                backgroundColor: [
                    'rgba(15, 23, 42, 0.85)',  // Org (Navy slate)
                    'rgba(245, 158, 11, 0.85)', // People (Amber)
                    'rgba(6, 182, 212, 0.85)',  // Physical (Cyan)
                    'rgba(37, 99, 235, 0.85)'  // Technological (Blue)
                ],
                borderColor: [
                    '#0f172a', '#d97706', '#0891b2', '#2563eb'
                ],
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: { color: '#e2e8f0' },
                    ticks: {
                        callback: function(value) { return value + "%"; },
                        color: '#64748b',
                        font: { family: 'Inter' }
                    }
                },
                x: {
                    grid: { display: false },
                    ticks: {
                        color: '#0f172a',
                        font: { family: 'Inter', weight: 500 }
                    }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

function generateRecommendations() {
    const recContainer = document.getElementById("gap-recommendations-list");
    recContainer.innerHTML = "";

    const recommendations = [];

    // Evaluate low controls
    if (currentMaturityScores["8.12"] <= 1) {
        recommendations.push({
            title: "Implementação Urgente de DLP (Controle 8.12)",
            desc: "A maturidade do controle de Prevenção de Vazamento de Dados está crítica. É recomendada a homologação de agentes de DLP nos endpoints de usuários para bloquear envio de relatórios e PII para nuvens públicas ou e-mails externos."
        });
    }
    if (currentMaturityScores["5.7"] <= 1) {
        recommendations.push({
            title: "Processo de Inteligência de Ameaças (Controle 5.7)",
            desc: "Falta de monitoramento ativo de vetores emergentes. Assine feeds de reputação (STIX/TAXII) e relatórios do CERT para alimentar regras de firewall e logs de detecção proativamente."
        });
    }
    if (currentMaturityScores["8.28"] <= 1) {
        recommendations.push({
            title: "Padronização de Codificação Segura (Controle 8.28)",
            desc: "Riscos elevados em aplicações web internas. Adote diretrizes baseadas no OWASP ASVS e insira varreduras SAST automatizadas no pipeline do CI/CD."
        });
    }
    if (currentMaturityScores["8.9"] <= 2) {
        recommendations.push({
            title: "Hardening de Configurações (Controle 8.9)",
            desc: "Maturidade intermediária. Estabeleça baselines padrão baseados no CIS Benchmarks para sistemas operacionais Linux/Windows e switches centrais, auditando desvios automaticamente."
        });
    }

    if (recommendations.length === 0) {
        recContainer.innerHTML = `
            <div class="rec-item" style="border-left-color: var(--success);">
                <div class="rec-item-title" style="color: var(--success);">Todos os controles em conformidade estável</div>
                <div class="rec-item-desc">A organização apresenta níveis elevados de maturidade nos principais controles da ISO 27002 analisados. Mantenha as auditorias independentes periódicas (Controle 5.35).</div>
            </div>
        `;
        return;
    }

    recommendations.forEach(rec => {
        const item = document.createElement("div");
        item.className = "rec-item";
        item.innerHTML = `
            <div class="rec-item-title">${rec.title}</div>
            <div class="rec-item-desc">${rec.desc}</div>
        `;
        recContainer.appendChild(item);
    });
}

function updateDashboardStats() {
    // Counts
    const totalControls = controlsData.length;
    const orgCount = controlsData.filter(c => c.theme === "organizational").length;
    const peoCount = controlsData.filter(c => c.theme === "people").length;
    const phyCount = controlsData.filter(c => c.theme === "physical").length;
    const tecCount = controlsData.filter(c => c.theme === "technological").length;

    // Update Dashboard Card Stats (Static Metadata)
    const totalControlsEl = document.getElementById("stat-total-controls");
    if (totalControlsEl) totalControlsEl.innerText = totalControls;
    
    const orgCountEl = document.getElementById("stat-org-count");
    if (orgCountEl) orgCountEl.innerText = `${orgCount} controles`;
    
    const peoCountEl = document.getElementById("stat-peo-count");
    if (peoCountEl) peoCountEl.innerText = `${peoCount} controles`;
    
    const tecCountEl = document.getElementById("stat-tec-count");
    if (tecCountEl) tecCountEl.innerText = `${tecCount} controles`;

    // Dynamic stats derived from sliders
    const averages = calculateAverages();
    const overallMaturity = ((averages.organizational + averages.people + averages.physical + averages.technological) / 4).toFixed(2);
    
    // Overall maturity percentage
    const targetMaturity = 4.0;
    const progressPercent = Math.min(100, Math.round((overallMaturity / targetMaturity) * 100));

    document.getElementById("stat-overall-maturity").innerText = overallMaturity;
    document.getElementById("stat-maturity-subtitle").innerText = `Maturidade Média (${progressPercent}% da Meta de Nível 4)`;

    // Update dynamic elements in Dashboard tab if they exist
    const dashMaturityVal = document.getElementById("dash-overall-maturity-val");
    const dashMaturityBar = document.getElementById("dash-overall-maturity-bar");
    if (dashMaturityVal && dashMaturityBar) {
        dashMaturityVal.innerText = overallMaturity;
        dashMaturityBar.style.width = `${(overallMaturity/5)*100}%`;
    }
}

// 4. INTERACTIVE THREAT SIMULATOR LOGIC
function initThreatSimulator() {
    // Core references
    const toggleCrypto = document.getElementById("toggle-crypto");
    const toggleDlp = document.getElementById("toggle-dlp");
    const toggleMonitor = document.getElementById("toggle-monitor");

    // Toggles logic
    toggleCrypto.addEventListener("change", (e) => {
        updateToggleIndicator("crypto", e.target.checked);
        renderCryptoDatabase(e.target.checked);
    });
    toggleDlp.addEventListener("change", (e) => {
        updateToggleIndicator("dlp", e.target.checked);
    });
    toggleMonitor.addEventListener("change", (e) => {
        updateToggleIndicator("monitor", e.target.checked);
    });

    // Action button listeners
    document.getElementById("btn-sim-crypto").addEventListener("click", runCryptoSimulation);
    document.getElementById("btn-sim-dlp").addEventListener("click", runDlpSimulation);
    document.getElementById("btn-sim-monitor").addEventListener("click", runMonitorSimulation);

    // DLP editor custom insertions
    document.getElementById("btn-insert-cc").addEventListener("click", () => {
        const textarea = document.getElementById("dlp-email-body");
        textarea.value += " Prezado gerente, segue o número do meu cartão de crédito corporativo para faturamento do SaaS: 4532-7182-9901-3827.";
    });
    document.getElementById("btn-insert-clean").addEventListener("click", () => {
        const textarea = document.getElementById("dlp-email-body");
        textarea.value = "Bom dia time, confirmo o agendamento da reunião trimestral de resultados para amanhã às 14h na sala de reuniões A.";
    });

    // Populate initial state of DB simulator
    renderCryptoDatabase(false);
}

function updateToggleIndicator(id, isChecked) {
    const indicator = document.getElementById(`status-${id}`);
    if (isChecked) {
        indicator.innerText = "ATIVADO";
        indicator.className = "status-indicator status-on";
    } else {
        indicator.innerText = "DESATIVADO";
        indicator.className = "status-indicator status-off";
    }
}

// Simulation A: Cryptography
const mockDbData = [
    { id: 1, user: "m.silva", pass: "senhaMestre123", cc: "5423-8891-0021-9982" },
    { id: 2, user: "admin", pass: "RootPassword!#", cc: "4111-2222-3333-4444" },
    { id: 3, user: "financeiro", pass: "Fin@2026!P", cc: "6011-0982-1234-5678" }
];

const encryptedMockDbData = [
    { id: 1, user: "m.silva", pass: "$2a$12$R0Xz5n...", cc: "U2FsdGVkX19P..." },
    { id: 2, user: "admin", pass: "$2a$12$K8yQw2...", cc: "U2FsdGVkX1+L..." },
    { id: 3, user: "financeiro", pass: "$2a$12$P2wEa9...", cc: "U2FsdGVkX18m..." }
];

function renderCryptoDatabase(isEncrypted) {
    const container = document.getElementById("db-container");
    container.innerHTML = "";

    const data = isEncrypted ? encryptedMockDbData : mockDbData;

    data.forEach(row => {
        const div = document.createElement("div");
        div.className = "db-row";
        div.innerHTML = `
            <div>ID: <span class="db-field">${row.id}</span> | User: <span class="db-field" style="color:#f59e0b">${row.user}</span></div>
            <div style="text-align: right;">
                Pass: <span class="db-val ${isEncrypted ? 'encrypted' : ''}">${row.pass}</span><br>
                Card: <span class="db-val ${isEncrypted ? 'encrypted' : ''}">${row.cc}</span>
            </div>
        `;
        container.appendChild(div);
    });
}

function runCryptoSimulation() {
    const isControlActive = document.getElementById("toggle-crypto").checked;
    const playBtn = document.getElementById("btn-sim-crypto");
    const consoleLogs = document.getElementById("crypto-logs");
    
    playBtn.disabled = true;
    consoleLogs.innerHTML = `<div class="log-entry log-system">[SYS] Inicializando simulador de ataque de exfiltração...</div>`;

    setTimeout(() => {
        consoleLogs.innerHTML += `<div class="log-entry log-warning">[WARN] Alvo: Servidor de Produção (BD-01) - Porta 5432 exposta na Web.</div>`;
    }, 600);

    setTimeout(() => {
        consoleLogs.innerHTML += `<div class="log-entry log-danger">[ATTACK] Injetando carga de exploit SQL no formulário de pesquisa...</div>`;
    }, 1500);

    setTimeout(() => {
        consoleLogs.innerHTML += `<div class="log-entry log-danger">[ATTACK] Ataque SQL Injection bem-sucedido. Comando: 'UNION SELECT username, password, creditcard FROM users'.</div>`;
        consoleLogs.scrollTop = consoleLogs.scrollHeight;
    }, 2500);

    setTimeout(() => {
        if (isControlActive) {
            consoleLogs.innerHTML += `<div class="log-entry log-success">[CONTROL-8.24] Criptografia de dados em repouso (TDE) e hash de senha de mão única aplicados.</div>`;
            consoleLogs.innerHTML += `<div class="log-entry log-success">[SYS] Dados exfiltrados pelo atacante são inúteis (Hashes Bcrypt e texto cifrado AES-256). CONFIDENCIALIDADE PRESERVADA.</div>`;
            showSimAlert("Sucesso na Defesa", "O controle 8.24 (Criptografia) salvou seus dados! O invasor executou o exploit, mas obteve apenas hashes de senha ilegíveis e strings criptografadas. Confidencialidade intacta.", "success");
        } else {
            consoleLogs.innerHTML += `<div class="log-entry log-danger">[BREACH] Banco de dados em texto claro vazado!</div>`;
            consoleLogs.innerHTML += `<div class="log-entry log-danger">[BREACH] vazado: admin / RootPassword!# | Cartão: 4111-2222-3333-4444. VAZAMENTO CONFIRMADO.</div>`;
            showSimAlert("Dados Vazados!", "Invasor exfiltrou com sucesso as senhas e números de cartão de crédito em texto claro. Sem criptografia em repouso (Controle 8.24), o impacto é catastrófico.", "danger");
        }
        consoleLogs.scrollTop = consoleLogs.scrollHeight;
        playBtn.disabled = false;
    }, 3800);
}

// Simulation B: Data Leakage Prevention (DLP)
function runDlpSimulation() {
    const isControlActive = document.getElementById("toggle-dlp").checked;
    const playBtn = document.getElementById("btn-sim-dlp");
    const emailBody = document.getElementById("dlp-email-body").value;
    const logs = document.getElementById("dlp-logs");

    if (!emailBody.trim()) {
        showSimAlert("Erro", "Por favor, digite um texto no e-mail ou utilize os atalhos rápidos para preencher.", "warning");
        return;
    }

    playBtn.disabled = true;
    logs.innerHTML = `<div class="log-entry log-system">[SMTP-Client] Tentativa de envio de mensagem para canal externo...</div>`;

    setTimeout(() => {
        logs.innerHTML += `<div class="log-entry log-info">[SYS] Analisando tráfego de e-mail de saída...</div>`;
    }, 600);

    setTimeout(() => {
        // DLP regex match for credit card like sequences
        const hasCard = /\b(?:\d{4}[ -]?){3}\d{4}\b/.test(emailBody);
        
        if (isControlActive) {
            logs.innerHTML += `<div class="log-entry log-info">[CONTROL-8.12] Agente DLP inspecionando conteúdo em tempo real...</div>`;
            
            setTimeout(() => {
                if (hasCard) {
                    logs.innerHTML += `<div class="log-entry log-danger">[ALERT-DLP] Bloqueio preventivo: Sequência de cartão de crédito detectada.</div>`;
                    logs.innerHTML += `<div class="log-entry log-danger">[CONTROL-8.12] Envio bloqueado. Acesso negado para o remetente.</div>`;
                    showSimAlert("Envio Bloqueado (DLP)", "O controle 8.12 (DLP) inspecionou a mensagem e identificou dados confidenciais de cartão corporativo. O tráfego de rede de saída foi bloqueado preventivamente.", "success");
                } else {
                    logs.innerHTML += `<div class="log-entry log-success">[SYS] Conteúdo liberado. Nenhum padrão sensitivo bloqueante encontrado.</div>`;
                    logs.innerHTML += `<div class="log-entry log-success">[SMTP-Client] E-mail enviado com sucesso (tráfego seguro).</div>`;
                    showSimAlert("E-mail Enviado", "Mensagem segura enviada com sucesso, pois não infringiu as políticas de segurança de dados e classificação.", "info");
                }
                logs.scrollTop = logs.scrollHeight;
                playBtn.disabled = false;
            }, 1000);
        } else {
            logs.innerHTML += `<div class="log-entry log-warning">[WARN] Monitoramento DLP desativado. Pulando checagem de conteúdo...</div>`;
            
            setTimeout(() => {
                logs.innerHTML += `<div class="log-entry log-success">[SMTP-Client] E-mail enviado com sucesso.</div>`;
                if (hasCard) {
                    logs.innerHTML += `<div class="log-entry log-danger">[BREACH] Dados de cartão expostos para o destinatário externo sem aviso!</div>`;
                    showSimAlert("Vazamento Ocorreu!", "O e-mail contendo cartão de crédito foi enviado com sucesso. Sem o Controle 8.12 (DLP), dados confidenciais saíram do perímetro sem nenhuma barreira protetiva.", "danger");
                } else {
                    showSimAlert("E-mail Enviado", "Mensagem limpa enviada com sucesso.", "info");
                }
                logs.scrollTop = logs.scrollHeight;
                playBtn.disabled = false;
            }, 1000);
        }
    }, 1200);
}

// Simulation C: Monitoring Activities (SIEM/IDS)
function runMonitorSimulation() {
    const isControlActive = document.getElementById("toggle-monitor").checked;
    const playBtn = document.getElementById("btn-sim-monitor");
    const logs = document.getElementById("monitor-logs");

    playBtn.disabled = true;
    logs.innerHTML = `<div class="log-entry log-system">[SIEM] Monitor de atividades ouvindo eventos da rede...</div>`;

    setTimeout(() => {
        logs.innerHTML += `<div class="log-entry log-warning">[ATTACK] IP 192.168.45.112 - SSH: Tentativa de login falhou para usuário 'root'.</div>`;
        logs.scrollTop = logs.scrollHeight;
    }, 500);

    setTimeout(() => {
        logs.innerHTML += `<div class="log-entry log-warning">[ATTACK] IP 192.168.45.112 - SSH: Tentativa de login falhou para usuário 'admin'.</div>`;
        logs.scrollTop = logs.scrollHeight;
    }, 1000);

    setTimeout(() => {
        logs.innerHTML += `<div class="log-entry log-warning">[ATTACK] IP 192.168.45.112 - SSH: Tentativa de login falhou para usuário 'suporte'.</div>`;
        logs.scrollTop = logs.scrollHeight;
    }, 1500);

    setTimeout(() => {
        if (isControlActive) {
            logs.innerHTML += `<div class="log-entry log-danger">[ALERT-8.16] Limiar de força bruta atingido (3 falhas em 2 segundos) para o IP 192.168.45.112.</div>`;
            logs.innerHTML += `<div class="log-entry log-success">[CONTROL-8.16] Ação automatizada: Disparando comando de bloqueio do IP no Firewall de borda.</div>`;
            logs.scrollTop = logs.scrollHeight;
            
            setTimeout(() => {
                logs.innerHTML += `<div class="log-entry log-success">[SYS] Firewall adicionou regra: REJECT tcp/22 de 192.168.45.112. Ataque mitigado.</div>`;
                showSimAlert("Ataque Bloqueado", "O controle 8.16 (Atividades de Monitoramento) detectou a tentativa de força bruta em tempo real e bloqueou o IP do invasor no firewall local. O sistema permaneceu íntegro.", "success");
                logs.scrollTop = logs.scrollHeight;
                playBtn.disabled = false;
            }, 1000);
        } else {
            logs.innerHTML += `<div class="log-entry log-warning">[SYS] Nenhuma regra de detecção configurada para logins repetidos falhos.</div>`;
            logs.scrollTop = logs.scrollHeight;

            setTimeout(() => {
                logs.innerHTML += `<div class="log-entry log-warning">[ATTACK] IP 192.168.45.112 - SSH: Tentativa de login falhou para usuário 'backup'.</div>`;
                logs.scrollTop = logs.scrollHeight;
            }, 500);

            setTimeout(() => {
                logs.innerHTML += `<div class="log-entry log-danger">[ATTACK] IP 192.168.45.112 - SSH: LOGIN BEM-SUCEDIDO para usuário 'root' (Senha fraca '123456').</div>`;
                logs.innerHTML += `<div class="log-entry log-danger">[BREACH] Acesso Root estabelecido. Console interativo aberto pelo atacante.</div>`;
                logs.scrollTop = logs.scrollHeight;
                
                showSimAlert("Servidor Invadido!", "O atacante persistiu no ataque de força bruta e encontrou uma senha fraca. Sem o Controle 8.16 (Monitoramento), o ataque não foi notado e o servidor foi invadido.", "danger");
                playBtn.disabled = false;
            }, 1200);
        }
    }, 2200);
}

// Alert overlays helper
function showSimAlert(title, desc, type) {
    let alertEl, iconEl, titleEl, descEl;

    if (activeSection === "threats") {
        // Overlay within each card is cleaner, let's target the correct card's overlay
        if (title.includes("Criptografia") || title.includes("Vazado")) {
            alertEl = document.getElementById("alert-crypto");
        } else if (title.includes("DLP") || title.includes("E-mail")) {
            alertEl = document.getElementById("alert-dlp");
        } else {
            alertEl = document.getElementById("alert-monitor");
        }
    }

    if (!alertEl) return;

    iconEl = alertEl.querySelector(".alert-icon");
    titleEl = alertEl.querySelector(".alert-title");
    descEl = alertEl.querySelector(".alert-desc");

    titleEl.innerText = title;
    descEl.innerText = desc;

    if (type === "success") {
        iconEl.innerText = "🛡️";
        titleEl.style.color = "var(--success)";
    } else if (type === "danger") {
        iconEl.innerText = "🚨";
        titleEl.style.color = "var(--danger)";
    } else {
        iconEl.innerText = "ℹ️";
        titleEl.style.color = "var(--primary)";
    }

    alertEl.classList.add("active");

    const closeBtn = alertEl.querySelector(".alert-btn-close");
    closeBtn.onclick = () => {
        alertEl.classList.remove("active");
    };
}

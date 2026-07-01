# ISO/IEC 27002:2022 Interactive Hub & Threat Simulator

Uma plataforma web interativa, sólida e profissional projetada para fins didáticos, auditorias preliminares e apresentações práticas sobre a norma **ISO/IEC 27002:2022** (Controles de Segurança da Informação).

Este projeto foi construído para demonstrar visualmente o impacto prático da implementação de controles de segurança em cenários corporativos reais de ameaça e avaliar o nível de maturidade de uma organização.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** HTML5 semântico e CSS3 (Design corporativo responsivo baseado em paleta Slate/Navy, sem efeitos neon ou glassmorphism).
- **Lógica e Interatividade:** JavaScript puro (ES6+).
- **Gráficos:** [Chart.js](https://www.chartjs.org/) carregado via CDN para renderização em tempo real do perfil de maturidade (gráfico de radar e barra de conformidade).
- **Servidor Local:** Script Node.js (`server.js`) integrado para servir os arquivos estáticos localmente via HTTP bypassando políticas restritivas de CORS de navegadores locais.

---

## 🌟 Principais Funcionalidades

### 1. 📊 Painel Geral (Dashboard)
Apresenta o status geral da infraestrutura de segurança com contadores analíticos dos 93 controles agrupados nos 4 novos temas (Organizacionais, Pessoas, Físicos e Tecnológicos) e exibe o nível médio ponderado de maturidade em tempo real.

### 2. 📖 Catálogo Completo dos 93 Controles
Tabela interativa contendo todos os controles oficiais da norma ISO 27002:2022:
- Filtros por **Tema**, **Tipo de Controle** (Preventivo, Detectivo, Corretivo) e **Propriedades de Segurança** (Confidencialidade, Integridade e Disponibilidade).
- Pesquisa por texto completo (ID, Nome ou Descrição).
- Painel lateral dinâmico exibindo os atributos do controle selecionado e seu alinhamento com o framework **NIST CSF** (Identificar, Proteger, Detectar, Responder, Recuperar).

### 📉 3. Simulador de Análise de Lacunas (Gap Analysis)
Checklist interativo contendo controles críticos onde o gestor pode atribuir notas de maturidade de **0 (Inexistente)** a **5 (Otimizado)**:
- Atualização em tempo real de um **Gráfico de Radar (Maturidade)** contra a meta corporativa (nível 4.0).
- Gráfico de barras indicando a porcentagem exata de aderência de cada tema em relação à meta.
- Gerador inteligente de recomendações textuais de planos de ação baseados na ISO 27002 para controles com notas críticas de maturidade.

### 🛡️ 4. Simulador Prático de Ameaças vs. Defesas
Demonstração visual do funcionamento técnico de três controles fundamentais:
1. **Controle 8.24 (Uso de criptografia):** Simulação de um banco de dados de produção sob ataque de SQL Injection. Se ativo, o invasor exfiltra hashes Bcrypt e dados cifrados (AES-256); se desativo, dados sensíveis e senhas em texto claro são vazados.
2. **Controle 8.12 (DLP - Prevenção contra Vazamento de Dados):** Um cliente de e-mail integrado. Se o controle estiver ativo, qualquer tentativa de enviar dados de cartão de crédito/PII é interceptada e bloqueada preventivamente pela Regex local.
3. **Controle 8.16 (Atividades de monitoramento):** Logs de conexão SSH simulando um ataque de força bruta. Se o controle estiver ativo, o SIEM identifica o comportamento anômalo e aciona uma regra de firewall bloqueando o IP atacante; se desativo, o servidor é invadido após tentativas persistentes.

---

## 🚀 Como Executar o Projeto

Como o projeto inclui scripts dinâmicos, o recomendável é executá-lo através de um servidor local:

1. Certifique-se de possuir o **Node.js** instalado em sua máquina.
2. Abra o terminal na pasta do projeto e execute:
   ```bash
   node server.js
   ```
3. Acesse a URL gerada no seu navegador:
   👉 **http://localhost:8080**

*Nota: Caso prefira, você também pode abrir o arquivo `index.html` diretamente em navegadores que permitam a execução de scripts locais via protocolo `file:///`.*

---

## 📂 Estrutura de Arquivos

```text
├── index.html     # Layout principal, menus e telas do simulador.
├── styles.css     # Estilos e design system corporativo da aplicação.
├── app.js         # Lógica da plataforma, dados dos 93 controles e simuladores.
├── server.js      # Servidor HTTP local básico em Node.js.
└── README.md      # Documentação do repositório.
```

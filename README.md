# Handoff: 9A Notícias — Jornal digital de Ciências

## Visão geral

Site em formato de **jornal digital** (inspirado no G1) produzido como trabalho da disciplina de **Ciências** — turma 9º ano A. Edição especial sobre **Mulheres na Ciência**, com reportagens, linha do tempo histórica, curiosidades, expediente do grupo e uma **enquete interativa funcional**.

O site funciona 100% offline (basta abrir `index.html` no navegador) e está pronto para publicação no **GitHub Pages** ou qualquer hospedagem estática.

---

## Sobre os arquivos deste pacote

Este bundle é o **site pronto** — HTML, CSS e JS puros, sem framework. Diferente da maioria dos handoffs (que exigem que o desenvolvedor recrie o design em React/Vue/etc.), aqui **os arquivos JÁ SÃO o produto final**: podem ser abertos direto no navegador ou enviados como estão para o GitHub Pages.

Se algum dia você quiser migrar para um framework (React, Vue, Next.js), o CSS e o conteúdo já estão totalmente organizados e podem ser transportados componente por componente.

## Fidelidade

**Alta fidelidade (hifi).** Cores, tipografia, espaçamento e todos os textos são definitivos. As fotografias são reais e de domínio público.

---

## 🗂️ Estrutura de pastas (o que sobe pro GitHub)

```
design_handoff_9a_noticias/
├── index.html          → página principal do jornal
├── styles.css          → todas as cores, tipografia e layout
├── enquete.js          → lógica da enquete interativa (localStorage)
├── README.md           → este arquivo
└── assets/             → fotografias históricas (domínio público)
    ├── marie-curie.jpg
    ├── marie-curie-lab.jpg
    ├── rosalind-franklin.jpg
    ├── ada-lovelace.svg
    ├── ada-lovelace-2.svg
    ├── nise-da-silveira.jpg
    ├── nise-da-silveira-2.jpg
    ├── bertha-lutz.jpg
    └── bertha-lutz-2.jpg
```

**Arquivos que você NÃO precisa subir** (podem ser apagados):
- `screenshots/` — usada só para testes internos
- `.thumbnail` — miniatura automática do editor
- `.gitattributes` — pode manter se quiser, mas não é obrigatório
- `index.html.srcmap` — arquivo interno do editor de design, pode apagar

---

## 🚀 Como publicar no GitHub Pages

1. Vá em [github.com](https://github.com) e crie um novo repositório (pode ser público).
2. Nome sugerido: `9a-noticias` (ou o que preferir).
3. Faça upload dos arquivos: **`index.html`**, **`styles.css`**, **`enquete.js`**, **`README.md`** e a **pasta `assets/` inteira**.
4. Vá em **Settings → Pages**.
5. Em "Source", escolha **Deploy from a branch → main → /(root)** e clique em Save.
6. Espere ~1 minuto. O site vai estar em `https://SEU-USUARIO.github.io/9a-noticias/`.

---

## 📄 Seções do site

### 1. Topbar
Faixa preta no topo com **data da edição**, **ano** e ícones simulados de redes sociais.

### 2. Masthead (logotipo)
- Título "**9A Notícias**" em Playfair Display Italic 900
- "9A" em dourado, "Notícias" em verde petróleo itálico
- Tagline: *"A ciência que transforma o mundo — e as mulheres que a fizeram acontecer."*
- Linhas duplas horizontais no estilo jornal impresso

### 3. Navegação sticky
Barra de navegação que gruda no topo ao rolar. Links: Capa · Ciência · História · Reportagem Especial · Enquete · Você Sabia? · Expediente. O item "Enquete" mostra um selo pulsante **AO VIVO**.

### 4. Manchete principal — Marie Curie
- Foto grande à esquerda + reportagem à direita
- Título grande: *"A cientista que abriu as portas do átomo — e derrubou as paredes da academia"*
- Lead com **capitular** (letra grande na primeira letra)
- 3 parágrafos de reportagem
- Assinatura: PH (editor-chefe), com colaboração de Isabella e Renato

### 5. Manchetes secundárias (grid 2×2)
- **Rosalind Franklin** — DNA / Fotografia 51 · autora: Isabella
- **Ada Lovelace** — primeira programadora · autor: Renato
- **Nise da Silveira** — psiquiatria brasileira · autora: Laura
- **Bertha Lutz** — bióloga e diplomata · autora: Everlyn

### 6. Mais lidas da semana
Faixa verde petróleo com 5 títulos numerados em dourado (estilo revista).

### 7. Linha do tempo horizontal
9 marcos históricos, com rolagem lateral: 1843 (Ada) → 1903, 1911 (Curie) → 1932 (Bertha) → 1946 (Nise) → 1952 (Franklin) → 1962 (Rachel Carson) → 1983 (McClintock) → 2020 (CRISPR).

### 8. Citação em destaque
Frase de Marie Curie centralizada, com aspas douradas grandes.

### 9. Reportagem especial
"Meninas nos laboratórios: o Brasil ainda tem uma dívida com a ciência." Duas fotos + dados da Unesco + citação em destaque com barra dourada lateral. Autoras: Everlyn e Laura.

### 10. 🗳️ Enquete interativa (destaque)
- **Pergunta:** "Qual mulher cientista mais te inspira?"
- **5 opções:** Marie Curie · Rosalind Franklin · Ada Lovelace · Nise da Silveira · Bertha Lutz
- **Como funciona:**
  - O visitante clica em uma opção → conta como voto
  - Barras animadas mostram porcentagem e número absoluto
  - Voto salvo em **localStorage** (persiste no navegador)
  - Botão **"↻ Trocar meu voto"** aparece após votar
  - Enquete já vem com uma contagem inicial (~134 votos) para dar sensação de movimento
- **Visual:** fundo gradiente verde petróleo, palavra "ENQUETE" gigante no fundo em transparência, selo "◉ ENQUETE AO VIVO" em dourado.

### 11. Você Sabia? (6 cards)
1. Os cadernos radioativos de Curie
2. Filha também Nobel (Irène Joliot-Curie)
3. O nome do polônio
4. Uma turma, uma mulher (Nise da Silveira)
5. Rãs e diplomacia (Bertha Lutz)
6. Antes do computador (Ada Lovelace)

### 12. Expediente
Grade com todos os 7 membros do grupo em cards com avatar circular (inicial em dourado):
| Membro | Papel |
|---|---|
| **PH** ★ | Editor-chefe · Autor principal |
| Isabella | Editora de Ciência |
| Renato | Repórter |
| Laura | Editora de Cultura Científica |
| Everlyn | Repórter Especial |
| Esther | Design & Diagramação |
| Amanda | Revisão & Enquete |

### 13. Rodapé
Marca "9A Notícias" em dourado + créditos das fotos + copyright.

---

## 🎨 Design tokens

### Paleta

| Cor | Uso | Hex |
|---|---|---|
| Verde petróleo | Manchetes, cabeçalho, fundo enquete | `#0F4C4A` |
| Verde petróleo escuro | Gradientes, rodapé | `#0A3634` |
| Verde claro | Detalhes, tags | `#7FB09B` |
| Verde claro 2 | Tags de fundo, seção "Você sabia" | `#A9C9B9` |
| Dourado | Destaques, números, links ativos | `#C9A24B` |
| Dourado escuro | Hover, autores, subtítulos | `#B08A32` |
| Creme | Fundo principal | `#F4EEE0` |
| Creme escuro | Fundo timeline | `#EBE3D0` |
| Grafite | Texto principal | `#2A2D2E` |
| Grafite 2 | Texto secundário | `#4A4D4E` |
| Linha | Divisórias | `#D8CFB8` |

### Tipografia

Todas as fontes do Google Fonts (carregadas via `@import` no `styles.css`):

| Uso | Família | Peso |
|---|---|---|
| Manchetes principais | **Playfair Display** (serif) | 400 / 700 / 800 / 900 |
| Corpo de texto | **Lora** (serif) | 400 / 500 / 600 / 700 |
| Títulos de seção, nav | **Bebas Neue** (sans condensed) | 400 |
| Meta, datas, créditos | **IBM Plex Mono** (monospace) | 400 / 500 / 600 |

### Escala tipográfica

- Título mastro: `clamp(48px, 8vw, 96px)`
- Manchete principal: `clamp(32px, 4vw, 52px)`
- Manchete secundária: 22px
- Corpo: 16-17px, line-height 1.55
- Meta / mono: 11-13px

---

## ⚙️ Comportamento e interações

### Enquete (`enquete.js`)
- Chaves no `localStorage`:
  - `9a_enquete_votos` — objeto `{ id: count }` com contagem por opção
  - `9a_enquete_meu_voto` — string com id da opção votada pelo usuário
- Ao clicar em uma opção:
  1. Se já votou em outra, decrementa a antiga
  2. Incrementa a nova
  3. Salva no localStorage
  4. Recalcula porcentagens
  5. Anima as barras (transição CSS de 0.9s)
- Botão "Trocar meu voto": decrementa a atual e limpa o registro do usuário

### Animações
- **Selo AO VIVO:** pulsação de opacidade a cada 2s
- **Barras da enquete:** transição `cubic-bezier(0.22, 0.61, 0.36, 1)` de 0.9s
- **Hover nas opções:** translateX(4px) + mudança de cor da borda
- **Scroll suave** ativado via `html { scroll-behavior: smooth; }` para os links da nav

### Responsivo
- Breakpoint 900px: grid do hero e das manchetes vira 1 coluna, fotos diminuem
- Breakpoint 560px: padding do container reduzido, capitular menor, ajustes na "Mais lidas"

---

## 🖼️ Assets (fotografias)

Todas as imagens são de **domínio público** ou **Creative Commons**, recuperadas de PICRYL, Wikimedia e portais de imprensa. Não há restrição de uso escolar/pessoal.

| Arquivo | Retrato de | Fonte |
|---|---|---|
| `marie-curie.jpg` | Marie Curie (retrato) | Domínio público |
| `marie-curie-lab.jpg` | Marie Curie no laboratório | Domínio público |
| `rosalind-franklin.jpg` | Rosalind Franklin | Creative Commons |
| `ada-lovelace.svg` | Ada Lovelace (ilustração vetor) | Openclipart (CC0) |
| `ada-lovelace-2.svg` | Ada Lovelace (retrato pintado) | Openclipart (CC0) |
| `nise-da-silveira.jpg` | Nise da Silveira | Creative Commons |
| `nise-da-silveira-2.jpg` | Nise da Silveira (retrato formal) | Creative Commons |
| `bertha-lutz.jpg` | Bertha Lutz (retrato formal) | Domínio público |
| `bertha-lutz-2.jpg` | Bertha Lutz (fotografia científica) | Creative Commons |

---

## 📁 Arquivos que compõem o site

- `index.html` — todo o conteúdo do jornal (HTML semântico)
- `styles.css` — 100% do estilo visual, com variáveis CSS no `:root`
- `enquete.js` — apenas a lógica da enquete (~90 linhas, sem dependências)

Pronto pra subir!

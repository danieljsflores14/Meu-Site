# drdanielflores.com.br

Site profissional do Dr. Daniel Flores — cirurgião geral com foco em alta
complexidade (cirurgia oncológica, hepatobiliopancreática, emergências e
cirurgia robótica e minimamente invasiva). Consultório no Leblon, Rio de
Janeiro. CRM-RJ 52.72115-8.

**No ar em:** https://drdanielflores.com.br

## Stack

- [Next.js](https://nextjs.org) (App Router) com `output: 'export'` — o build
  gera um site 100% estático, compatível com hospedagem compartilhada
- Tailwind CSS + estilos inline (tema azul-marinho e dourado)
- Lucide React (ícones)
- Fontes: Cormorant Garamond (títulos) e Manrope (texto), via `next/font`

## Estrutura

```
app/
  page.tsx          # Home: Hero → Áreas → Trajetória → Hospitais → Consultório
  sobre/page.tsx    # Subpágina /sobre — linha do tempo da carreira
  layout.tsx        # Fontes, metadata e tema base
  sitemap.ts        # Gera sitemap.xml (estático)
  robots.ts         # Gera robots.txt (estático)
components/         # Navbar, Hero, AreasDeAtuacao, Trajetoria, Hospitais,
                    # Consultorio, Footer + contact.ts (telefone/WhatsApp)
public/images/      # logo.png, fotos do consultório, imagem do hero
```

O contato central (telefone e link de WhatsApp usado por todos os botões
"Agendar") fica em `components/contact.ts`.

## Desenvolvimento

```bash
npm install
npm run dev     # http://localhost:3000
```

## Build e publicação (Hostinger)

```bash
npm run build   # gera o site estático na pasta out/
```

Depois, envie **o conteúdo** de `out/` para a pasta `public_html` do domínio
na Hostinger (o `index.html` precisa ficar na raiz de `public_html`).
Atalho: compacte o conteúdo de `out/` em um zip, faça upload pelo Gerenciador
de Arquivos e extraia dentro de `public_html`.

## Pendências conhecidas

- 3 cards de hospitais ainda são placeholders (aguardando nomes/logos)
- Foto/retrato profissional do médico para a página /sobre

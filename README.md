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
  cirurgias-oncologicas/
    page.tsx        # Hub com as principais cirurgias oncológicas
    [slug]/page.tsx # Oito páginas de procedimentos geradas estaticamente
  layout.tsx        # Fontes, metadata e tema base
  sitemap.ts        # Gera sitemap.xml (estático)
  robots.ts         # Gera robots.txt (estático)
components/         # Navbar, Hero, AreasDeAtuacao, Trajetoria, Hospitais,
                    # Consultorio, páginas de procedimentos, Footer
data/
  surgeries.ts      # Conteúdo médico, FAQs, referências e relações entre páginas
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

O fluxo principal é automático: todo push na branch `main` aciona o GitHub
Actions, que gera `out/` e publica o resultado na branch `hostinger-deploy`,
sincronizada com a Hostinger.

O envio manual do conteúdo de `out/` para `public_html` deve ser usado apenas
como contingência.

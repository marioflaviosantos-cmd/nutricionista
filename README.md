# Júnior Nutricionista — Landing page

Site estático (HTML + CSS + JS, sem build). Abra `index.html` no navegador para ver.

## Estrutura

```
index.html   → página (versão desktop e versão mobile)
styles.css   → estilos, animações e troca desktop/mobile
main.js      → animações, sanfona, escala da página e rolagem suave
assets/      → imagens (WebP)
vendor/      → Lenis 1.3.26 (rolagem suave, licença MIT)
```

- **Rolagem suave:** feita com [Lenis](https://github.com/darkroomengineering/lenis) na rodinha do mouse e no touchpad. No celular a rolagem continua nativa. Quem ativa "reduzir movimento" no sistema fica com a rolagem normal.

- **Desktop (≥ 900px):** layout de 1440px, escalado para a largura da tela.
- **Mobile (< 900px):** layout de 390px, escalado até 520px e centralizado.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie estes arquivos para a raiz (`index.html` na raiz).
2. No repositório: **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
3. Escolha a branch `main` e a pasta `/ (root)` e salve.
4. Em alguns minutos o site fica em `https://<seu-usuario>.github.io/<nome-do-repositorio>/`.

## Antes de publicar, preencher

- `[SEU WHATSAPP]` e o link `https://wa.me/` dos botões (ex.: `https://wa.me/5511999999999`)
- `[SUA CIDADE]` e `[CRN-X 00000]`
- Respostas marcadas com colchetes nas perguntas frequentes (regiões atendidas, valores)
- `og:image` no `<head>`: troque por uma URL absoluta depois de publicar

## Créditos das fotos (Unsplash — licença livre)

Brooke Cagle (conversa), Siora Photography (fita métrica), Ella Olsson (marmitas),
Kelli McClintock (celular), Anna Pelzer (prato), B Y G (mesa com frutas).

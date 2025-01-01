# hugo-PillowTheme

This branch of the repository offers an example site for the [Pillow Theme](https://github.com/pillowbeast/hugo-pillow-theme/tree/main)

## Usage

To have a look at the example site, clone this repository (branch *exampleSite*) and run the following commands:

```bash
git clone https://github.com/pillowbeast/hugo-pillow-theme.git
cd hugo-pillow-theme
git checkout exampleSite
git submodule update --init --recursive
hugo server
```

## Directory Structure

```
hugo-pillow-theme
├─ LICENSE
├─ README.md
├─ content
│  ├─ _index.md
│  ├─ about
│  │  ├─ images
│  │  │  └─ person.webp
│  │  └─ index.md
│  ├─ blog
│  │  ├─ _index.md
│  │  └─ why-i-love-gardening
│  │     ├─ images
│  │     │  └─ gardening_cover.webp
│  │     └─ index.md
│  ├─ book
│  │  ├─ _index.md
│  │  ├─ friendship
│  │  │  ├─ images
│  │  │  │  └─ friendship_cover.webp
│  │  │  └─ index.md
│  │  └─ gardening
│  │     ├─ images
│  │     │  └─ gardening_cover.webp
│  │     └─ index.md
│  ├─ gallery
│  │  ├─ book_1.webp
│  │  ├─ dish.webp
│  │  ├─ marathon_fans.png
│  │  ├─ marathon_finish.png
│  │  ├─ rocket_1.png
│  │  └─ runner.png
│  ├─ project
│  │  ├─ _index.md
│  │  ├─ build-rocket
│  │  │  ├─ images
│  │  │  │  ├─ rocket_1.png
│  │  │  │  ├─ rocket_2.png
│  │  │  │  └─ rocket_cover.png
│  │  │  └─ index.md
│  │  └─ half-marathon-lucerne
│  │     ├─ images
│  │     │  ├─ marathon_even_more_runners.png
│  │     │  ├─ marathon_fans.png
│  │     │  ├─ marathon_finish.png
│  │     │  ├─ marathon_more_runners.png
│  │     │  ├─ marathon_struggle.png
│  │     │  ├─ runner_face.png
│  │     │  └─ title-image.png
│  │     └─ index.md
│  ├─ recipe
│  │  ├─ Pasta_and_Pesto
│  │  │  ├─ images
│  │  │  │  └─ Pasta_and_Pesto.jpg
│  │  │  └─ index.md
│  │  ├─ Spagetthi_Bolognese
│  │  │  ├─ images
│  │  │  │  ├─ Pasta_and_Pesto.jpg
│  │  │  │  └─ spaghetti_bolognese.webp
│  │  │  └─ index.md
│  │  └─ _index.md
│  └─ retro
│     ├─ 2024_10
│     │  └─ index.md
│     ├─ 2024_11
│     │  └─ index.md
│     ├─ 2024_12
│     │  └─ index.md
│     └─ _index.md
├─ hugo.toml
├─ theme.toml
└─ themes
   └─ hugo-pillow-theme
```
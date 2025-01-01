# Get Started

Have a look at the example content of the theme.
Clone theme into the themes folder of your new hugo page.
Then run the hugo server from within exampleSite.

```bash
mkdir themes
cd themes
git clone https://github.com/pillowbeast/hugo-pillow.git
cd hugo-pillow/exampleSite
hugo server --theme ../..
```

# Configuration

Copy the `config.toml` from the exampleSite to the root of your new hugo page.
Then run the hugo server from within your new hugo page.

```bash
cp themes/hugo-pillow/exampleSite/hugo.toml .
hugo server
```

You can change a lot of the theme's settings in the `config.toml` file.
- primary,secondarycolor
- contact information
- social media links
- ...

# Content

The following types of content are supported:
- blog
- projects
- retrospectives
- about
- recipes
- books

You can find examples of each in the `content` folder of the exampleSite.

# Shortcodes

The following shortcodes are available:
- gallery
- metadata
- recipe
- bulletpoints
- quotes
- inline-images
# Get Started

To get started with using the theme we start by creating a new hugo page. 
After that we initialize our git repository and add the theme as a submodule.
Finally we copy the `config.toml` from the exampleSite to the root of the new hugo page.

```bash
hugo new site <mynewhugopage>
cd <mynewhugopage>
git init
git submodule add <url> themes/hugo-pillow-theme
cp themes/hugo-pillow-theme/exampleSite/hugo.toml .
hugo server
```
## Example content

Have a look at the example content of the theme.
Clone theme into the themes folder of your new hugo page.
Then run the hugo server from within exampleSite.

```bash
cd themes/hugo-pillow-theme/exampleSite
hugo server --theme ../..
```

# Configuration

You can change a lot of the theme's settings in the `hugo.toml` file.
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
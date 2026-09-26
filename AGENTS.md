# Repository guide

This is a static page served by Rack. `index.html`, `css/`, `js/`, and `images/` contain the site; `config.ru` serves assets and the page; `Procfile` defines the hosted Rack command. `Gemfile.lock` pins Rack 1.5.2, so preserve it and use a compatible Ruby/Bundler environment.

The README's local workflow is `bundle install`, then `bundle exec rackup` at localhost:9292. There is no build, lint, automated test, or CI configuration. For Rack changes, `ruby -c config.ru` checks syntax; for page changes, inspect the rendered local page, asset requests, browser console, and affected interactions. Keep the cache behavior in `config.ru` in mind when checking updated assets.

`deploy` adds a Heroku remote if absent and pushes `master`; it is an external deployment action, not a preview command. Do not run it without explicit deployment authorization. Begin with `git status --short`, preserve unrelated edits, and finish authorized local work through relevant checks and repairs. Ask only about material missing decisions or external actions; continue independent checks when the legacy toolchain blocks a preview. For prose-only edits, inspect links/paths and run `git diff --check`; close with changed paths, actual checks/results, and unverified browser behavior.

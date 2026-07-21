source "https://rubygems.org"

# This is the gem GitHub Pages itself uses to build sites. Using it
# locally means your local preview matches what GitHub will publish.
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
end

# Windows/JRuby compatibility (harmless to leave in on other platforms)
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

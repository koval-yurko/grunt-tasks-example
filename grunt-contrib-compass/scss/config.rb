http_path = "/"

css_dir = "css"
sass_dir = "scss"
images_dir = "img"
fonts_dir = "fonts"


relative_assets = true

cache = true
cache_dir = "scss/.sass-cache"

sourcemap = true

output_style = :expanded
# output_style = :compressed

line_comments = true
environment = :development
asset_cache_buster :none

# Check if file exists
module Sass::Script::Functions
  def file_exists(image_file)
    path = image_file.value
    # path = image_path
    Sass::Script::Bool.new(File.exists?(path))
  end
end

# Make a copy of sprites with a name that has no uniqueness of the hash.
##on_sprite_saved do |filename|
##  if File.exists?(filename)
##    FileUtils.cp filename, filename.gsub(%r{-s[a-z0-9]{10}\.png$}, '.png')
##    # Note: Compass outputs both with and without random hash images.
##    # To not keep the one with hash, add: (Thanks to RaphaelDDL for this)
##    FileUtils.rm_rf(filename)
##  end
##end

# Replace in stylesheets generated references to sprites
# by their counterparts without the hash uniqueness.
##on_stylesheet_saved do |filename|
##  if File.exists?(filename)
##    css = File.read filename
##    File.open(filename, 'w+') do |f|
##      f << css.gsub(%r{-s[a-z0-9]{10}\.png}, '.png')
##    end
##  end
##end

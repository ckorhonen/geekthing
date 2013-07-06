$stdout.sync = true

use Rack::Deflater
use Rack::Static,
  :urls => ["/css", "/js", "/images", "/spec"],
  :root => ".",
  :header_rules => [
    [:all, {'Cache-Control' => 'public, max-age=31536000'}]
  ]

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('index.html', File::RDONLY)
  ]
}


const $autoPlayVideos = []

function playVideo(video) {
  video.play()
}

function createDetails({
  container = 'videos',
  details = false,
  summary = false,
  label = '',
}) {
  const $container = document.querySelector(`#${container}`)
  const $details = document.createElement('details')
  const $summary = document.createElement('summary')
  const $label = document.createElement('h2')

  $details.classList.add('box')

  $label.textContent = `${label}`

  $summary.appendChild($label)

  if (summary) {
    $summary.appendChild(summary)
  }

  $details.appendChild($summary)
  if (details) {
    $details.appendChild(details)
  }

  $container.appendChild($details)
}

function createVideo({ label, attributes }) {
  const $video = document.createElement('video')
  const $attributes = document.createElement('ul')

  Object.keys(attributes).forEach(attributeName => {
    const $attribute = document.createElement('li')
    const attributeValue =
      typeof attributes[attributeName] === 'boolean'
        ? null
        : attributes[attributeName]

    $attribute.textContent = `${attributeName}${
      attributeValue === null ? '' : `="${attributeValue}"`
    }`

    $attributes.appendChild($attribute)

    $video.setAttribute(
      attributeName,
      attributeValue === null ? '' : attributeValue
    )

    if (attributeName === 'data-autoplay') {
      $autoPlayVideos.push($video)
    }
  })

  createDetails({
    details: $attributes,
    label,
    summary: $video,
    container: 'videos',
  })
}

function createImage({ label, sources, src }) {
  const $picture = document.createElement('picture')
  const $img = document.createElement('img')
  const $attributes = document.createElement('ul')

  $img.src = src

  $picture.appendChild($img)

  sources.forEach(({ srcset, type }) => {
    const $attribute = document.createElement('li')
    const $source = document.createElement('source')

    $attribute.textContent = `source (${type}): ${srcset}`

    $attributes.appendChild($attribute)

    $source.srcset = srcset
    $source.type = type

    $picture.prepend($source)
  })

  createDetails({
    details: $attributes,
    label,
    summary: $picture,
    container: 'images',
  })
}

async function init() {
  const { videos, images } = await fetch('./data.json').then(response =>
    response.json()
  )

  images.forEach(createImage)

  videos.forEach(createVideo)

  $autoPlayVideos.forEach(playVideo)
}

init()

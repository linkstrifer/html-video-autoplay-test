let $container
const $autoPlayVideos = []

function playVideo(video) {
  video.play()
}

function createVideo({ label, attributes }) {
  const $details = document.createElement('details')
  const $summary = document.createElement('summary')
  const $video = document.createElement('video')
  const $label = document.createElement('h2')
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

  $details.classList.add('box')

  $label.textContent = `${label}`

  $summary.appendChild($label)
  $summary.appendChild($video)

  $details.appendChild($summary)
  $details.appendChild($attributes)

  $container.appendChild($details)
}

async function init() {
  $container = document.querySelector('.container')

  const { videos } = await fetch('./videos.json').then(response =>
    response.json()
  )

  videos.forEach(createVideo)

  $autoPlayVideos.forEach(playVideo)
}

init()

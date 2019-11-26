# HTML5 video autoplay test

This is a demo to test autoplay in mobile devices and browsers. 

Demo available at [strifer.link/html-video-autoplay-test](http://strifer.link/html-video-autoplay-test/).

## Tests

If you need to add a test, please [open a issue](https://github.com/linkstrifer/html-video-autoplay-test/issues/new) or [create a PR](https://github.com/linkstrifer/html-video-autoplay-test/compare).

### Current tests:

```json
{
  "videos": [
    {
      "label": "With autoplay attribute (not muted)",
      "attributes": {
        "autoplay": true,
        "loop": true,
        "playsinline": true,
        "poster": "https://media.giphy.com/media/YRWLoMugTT2zQbPnYd/giphy_s.gif",
        "src": "https://media.giphy.com/media/YRWLoMugTT2zQbPnYd/giphy.mp4"
      }
    },
    {
      "label": "Without autoplay attribute (not muted)",
      "attributes": {
        "loop": true,
        "playsinline": true,
        "poster": "https://media.giphy.com/media/YRWLoMugTT2zQbPnYd/giphy_s.gif",
        "src": "https://media.giphy.com/media/YRWLoMugTT2zQbPnYd/giphy.mp4"
      }
    },
    {
      "label": "With autoplay attribute (not muted) + autoplay via javascript",
      "attributes": {
        "autoplay": true,
        "data-autoplay": true,
        "loop": true,
        "playsinline": true,
        "poster": "https://media.giphy.com/media/YRWLoMugTT2zQbPnYd/giphy_s.gif",
        "src": "https://media.giphy.com/media/YRWLoMugTT2zQbPnYd/giphy.mp4"
      }
    },
    {
      "label": "Without autoplay attribute (not muted) + autoplay via javascript",
      "attributes": {
        "data-autoplay": true,
        "loop": true,
        "playsinline": true,
        "poster": "https://media.giphy.com/media/YRWLoMugTT2zQbPnYd/giphy_s.gif",
        "src": "https://media.giphy.com/media/YRWLoMugTT2zQbPnYd/giphy.mp4"
      }
    },
    {
      "label": "With autoplay attribute (muted)",
      "attributes": {
        "src": "https://media.giphy.com/media/YRWLoMugTT2zQbPnYd/giphy.mp4",
        "autoplay": true,
        "loop": true,
        "muted": true,
        "playsinline": true,
        "poster": "https://media.giphy.com/media/YRWLoMugTT2zQbPnYd/giphy_s.gif"
      }
    },
    {
      "label": "Without autoplay attribute (muted)",
      "attributes": {
        "loop": true,
        "muted": true,
        "playsinline": true,
        "poster": "https://media.giphy.com/media/YRWLoMugTT2zQbPnYd/giphy_s.gif",
        "src": "https://media.giphy.com/media/YRWLoMugTT2zQbPnYd/giphy.mp4"
      }
    },
    {
      "label": "With autoplay attribute (muted) + autoplay via javascript",
      "attributes": {
        "autoplay": true,
        "data-autoplay": true,
        "loop": true,
        "muted": true,
        "playsinline": true,
        "poster": "https://media.giphy.com/media/YRWLoMugTT2zQbPnYd/giphy_s.gif",
        "src": "https://media.giphy.com/media/YRWLoMugTT2zQbPnYd/giphy.mp4"
      }
    },
    {
      "label": "Without autoplay attribute (muted) + autoplay via javascript",
      "attributes": {
        "data-autoplay": true,
        "loop": true,
        "muted": true,
        "playsinline": true,
        "poster": "https://media.giphy.com/media/YRWLoMugTT2zQbPnYd/giphy_s.gif",
        "src": "https://media.giphy.com/media/YRWLoMugTT2zQbPnYd/giphy.mp4"
      }
    }
  ]
}
```

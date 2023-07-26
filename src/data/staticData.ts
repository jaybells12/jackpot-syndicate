import liveStageImg from '@public/homepage_live-stage.webp'
import podcastStudioImg from '@public/homepage_podcast.webp'
import recordingStudioImg from '@public/homepage_recording-studio.webp'
import youtubeStudioImg from '@public/homepage_youtube-studio.webp'

const features = [
  {
    title: 'Live Stage',
    image: liveStageImg,
    url: '/live-stage',
  },
  {
    title: 'Podcast Studio',
    image: podcastStudioImg,
    url: '/podcast-room',
  },
  {
    title: 'Youtube Studio',
    image: youtubeStudioImg,
    url: '/youtube-studio',
  },
  {
    title: 'Recording Studio / ISO Booth',
    image: recordingStudioImg,
    url: '/recording-studio',
  },
]

const navLinks = [
  // {
  //   text: 'Jackpot Studios',
  //   url: '/',
  // },
  {
    text: 'Live Stage',
    url: '/live-stage',
  },
  {
    text: 'Podcast Studio',
    url: '/podcast-room',
  },
  {
    text: 'Youtube Studio',
    url: '/youtube-studio',
  },
  {
    text: 'Recording Studio / ISO Booth',
    url: '/recording-studio',
  },
]

const hero = {
  title: 'We Build. We Cultivate. You Grow.',
  text: 'We help Creators and Brands grow their communities to maximize earnings across social platforms.',
}

export { features, navLinks, hero }

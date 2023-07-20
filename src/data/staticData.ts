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
  // {
  //   title: 'Live Broadcasts & Events',
  //   image: liveBroadcastImg,
  // },
  // {
  //   title: 'Gear Rental List',
  //   image: gearRentalImg,
  // },
]

const navLinks = [
  {
    text: 'Jackpot Studios',
    url: '/',
  },
  // {
  //   text: 'Work',
  // },
  // {
  //   text: 'Equipment',
  // },
  // {
  //   text: 'About',
  // },
]

const hero = {
  title: 'We Build. You Grow. We Cultivate.',
  text: 'We help Creators and Brands grow their communities to maximize earnings across social platforms.',
}

export { features, navLinks, hero }

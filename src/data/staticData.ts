import liveStageImg from '../../public/features_live-stage.png'
import podcastStudioImg from '../../public/features_podcast-studio.png'
import recordingStudioImg from '../../public/features_recording-studio.png'
import gearRentalImg from '../../public/features_gear-rental.png'
import liveBroadcastImg from '../../public/features_live-broadcast.png'
import youtubeStudioImg from '../../public/features_youtube-studio.png'

const features = [
  {
    title: 'Live Stage',
    image: liveStageImg,
    url: '/sound-stage',
  },
  {
    title: 'Podcast Studio',
    image: podcastStudioImg,
    url: '/podcase-room',
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
  },
  {
    text: 'Work',
  },
  {
    text: 'Equipment',
  },
  {
    text: 'About',
  },
]

const hero = {
  title: 'We Build. You Grow. We Cultivate.',
  text: 'We help Creators and Brands grow their communities to maximize earnings across social platforms.',
}

export { features, navLinks, hero }

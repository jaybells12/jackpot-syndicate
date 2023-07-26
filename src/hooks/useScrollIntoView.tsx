// This hook eases the scroll animation, the easing function can be swapped out for other types,
// Change the duration to lengthen or shorten the animation, included different easeIn functions
import { OffsetTopHandle } from '@components/Contact'
import { RefObject } from 'react'

// Need to pass a origin ref and an array of target Refs to this, instead of accessing DOM directly
export const useScrollIntoView = (targetRef: RefObject<OffsetTopHandle>) => {
  return (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault()

    const DURATION = 750

    function scrollToPosition(position: number) {
      let startPosition = window.scrollY
      let distance = position - startPosition
      let startTime: null | number = null

      function animation(currentTime: number) {
        if (startTime === null) startTime = currentTime
        let timeElapsed = currentTime - startTime
        let scrollTop = easeInQuint(
          timeElapsed,
          startPosition,
          distance,
          DURATION
        )
        window.scrollTo(0, scrollTop)
        if (timeElapsed < DURATION) requestAnimationFrame(animation)
      }

      // function easeInExpo(t, b, c, d) {
      //   return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
      // }

      function easeInQuint(t: number, b: number, c: number, d: number) {
        t /= d
        return c * t * t * t * t * t + b
      }

      // function easeInQuart(t, b, c, d) {
      //   t /= d;
      //   return c * t * t * t * t + b;
      // }

      // function easeInCubic(t, b, c, d) {
      //   t /= d;
      //   return c * t * t * t + b;
      // }

      requestAnimationFrame(animation)
    }
    if (targetRef.current) {
      scrollToPosition(targetRef.current.offsetTop())
    }
  }
}

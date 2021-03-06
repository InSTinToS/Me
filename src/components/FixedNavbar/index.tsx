import React, {
  forwardRef,
  MutableRefObject,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import Style from './styles'

/* eslint-disable react-hooks/exhaustive-deps */

/*
  A utilização de useCallback em onWindowScroll ocasiona bug ao mover
  rapidamente o scroll
*/

export interface ForwardedByFixedNavbar {
  setFixed: () => void
}

interface FixedNavbarProps {
  children: ReactNode
  positionRef: MutableRefObject<HTMLElement>
  getTopDistance?: (_distance: number) => any
}

const FixedNavbar = forwardRef<any, FixedNavbarProps>(
  ({ positionRef, children, getTopDistance }, ref) => {
    const [topDistanceFromViewport, setDistance] = useState(0)

    const navbarRef = useRef<HTMLElement>(null)

    const top =
      topDistanceFromViewport > navbarRef.current?.clientHeight
        ? topDistanceFromViewport - navbarRef.current?.clientHeight
        : 0

    const setFixed = () => {
      setDistance(0)
    }

    useImperativeHandle(ref, () => ({
      setFixed
    }))

    const onWindowScroll = () => {
      setDistance(positionRef.current?.getBoundingClientRect().y || 0)
    }

    useEffect(() => {
      getTopDistance(topDistanceFromViewport)
    }, [topDistanceFromViewport])

    useEffect(() => {
      window.addEventListener('scroll', onWindowScroll)

      return () => {
        window.removeEventListener('scroll', onWindowScroll)
      }
    })

    useEffect(() => {
      onWindowScroll()
    }, [onWindowScroll])

    return (
      <Style style={{ top }} ref={navbarRef} className='FixedNavbar'>
        {children}
      </Style>
    )
  }
)

export default FixedNavbar

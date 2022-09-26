import { CSS } from '@stitches/react'
import { useIsomorphicLayoutEffect } from 'framer-motion'
import { cloneElement, useCallback, useEffect, useRef, useState } from 'react'

const navFixed: CSS = { position: 'fixed', top: 0 }
const navUnfixed: CSS = { position: 'relative', top: 0 }

export const useSmartFixedNav = ({ aboveContent, nav }: any) => {
  const navRef = useRef<HTMLDivElement>(null)
  const aboveRef = useRef<HTMLDivElement>(null)

  const [navCSS, setNavCSS] = useState<CSS>(navUnfixed)

  const navHeight = navRef.current?.clientHeight || 0
  const aboveHeight = aboveRef.current?.clientHeight || 0

  const newNav = cloneElement(nav, { ref: navRef, style: navCSS })
  const newAboveContent = cloneElement(aboveContent, {
    ref: aboveRef,
    style: { marginBottom: navCSS.position === 'fixed' ? navHeight : 0 }
  })

  const updateNavCSS = useCallback(
    () => setNavCSS(globalThis.scrollY >= aboveHeight ? navFixed : navUnfixed),
    [aboveHeight]
  )

  useIsomorphicLayoutEffect(() => {
    updateNavCSS()
  }, [aboveHeight])

  useEffect(() => {
    globalThis.addEventListener('scroll', updateNavCSS)
  }, [aboveHeight, updateNavCSS])

  return { newAboveContent, newNav }
}

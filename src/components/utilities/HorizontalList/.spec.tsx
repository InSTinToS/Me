import { IHorizontalListForwarded } from './types'

import { HorizontalList } from './index'

import {
  act,
  render,
  renderHook,
  screen,
  waitFor
} from '@testing-library/react'
import React, { useRef } from 'react'

describe('HorizontalList', () => {
  it('should be able paginate to left or right by ref', async () => {
    const { result } = renderHook(() => useRef<IHorizontalListForwarded>(null))

    const children = ['1', '2']
    const ref = result.current

    render(
      <HorizontalList ref={ref}>{children.map(child => child)}</HorizontalList>
    )

    const li = screen.getByRole('listitem')

    expect(li.textContent).toBe(children[0])

    act(() => {
      ref.current?.paginate('right')
    })

    await waitFor(async () => {
      const li = screen.getByRole('listitem')

      expect(li.textContent).toBe(children[1])
    })

    act(() => {
      ref.current?.paginate('left')
    })

    await waitFor(async () => {
      const li = screen.getByRole('listitem')

      expect(li.textContent).toBe(children[0])
    })
  })

  it('should be able paginate to index by ref', async () => {
    const { result } = renderHook(() => useRef<IHorizontalListForwarded>(null))

    const children = ['1', '2', '3', '4', '5']
    const ref = result.current

    render(
      <HorizontalList ref={ref}>{children.map(child => child)}</HorizontalList>
    )

    const li = screen.getByRole('listitem')

    expect(li.textContent).toBe(children[0])

    act(() => {
      ref.current?.paginate(2)
    })

    await waitFor(async () => {
      const li = screen.getByRole('listitem')

      expect(li.textContent).toBe(children[2])
    })
  })
})

import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import SwitchButton from '../SwitchButton'

test('SwitchButton should turned-on when clicks', () => {
  const { getByText } = render(<SwitchButton />)
  const btn = getByText('TURN ON')

  fireEvent.click(btn)

  expect(btn.textContent).toBe('TURN OFF')
})

test('should turned-on when passed isOn', () => {
  const { getByText, debug } = render(<SwitchButton isOn />)
  const btn = getByText('TURN OFF')

  fireEvent.click(btn)

  expect(btn.textContent).toBe('TURN ON')
})

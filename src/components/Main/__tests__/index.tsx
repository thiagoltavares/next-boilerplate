import { render, screen } from '@testing-library/react'

import Main from '../../Main'

describe('<Main />', () => {
  it('Should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /React JS/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

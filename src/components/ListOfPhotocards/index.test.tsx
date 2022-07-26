import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { GET_PHOTOCARDS, ListOfPhotocards } from '.'

const mocks: any = [
  {
    request: {
      query: GET_PHOTOCARDS,
      variables: {
        categoryId: 2,
      },
    },
    result: {
      data: {
        photos: [
          {
            id: '0',
            categoryId: 2,
            src: 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png',
            likes: 7,
          },
          {
            id: '7',
            categoryId: 2,
            src: 'https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            likes: 40,
          },
        ],
      },
    },
  },
]

it('renders without error', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ListOfPhotocards />
    </MockedProvider>
  )

  expect(await screen.findByText('loading...')).toBeInTheDocument()
  {
    mocks?.result?.data?.photos?.map(async (photo: any) =>
      expect(
        ((await screen.findByAltText('photocard')) as HTMLImageElement).src
      ).toContain(photo.src)
    )
  }
})

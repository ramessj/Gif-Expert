import { render } from "@testing-library/react"
import  {GifCard}  from "../../src/Components"

describe('Pruebas en <GifCard />', () => {

  const title = ''

  const url = 'https://url.com'

  test('Debe hacer match con el snapshot', () => {
    const {container} = render(<GifCard title={title} url={url}/>)
    
    expect(container).toMatchSnapshot();

  })
})
import { render, screen } from '@testing-library/react';
import { GifCard } from '../../src/Components';

describe( 'Pruebas en <GifCard />', () => {
	const title = 'prueba';

	const url = 'https://media1.giphy.com/dadada.gif';

	test( 'Debe hacer match con el snapshot', () => {
		const { container } = render( <GifCard title={title} url={url} /> );

		expect( container ).toMatchSnapshot();
	} );

	test( 'Debe mostrar la imagen con la URL y el ALT indicado', () => {
		render( <GifCard title={title} url={url} /> );

		const { src, alt } = screen.getByRole( 'img' );

		expect( src ).toBe( url );

		expect( alt ).toBe( title );
	} );
	

	test( 'Debe de mostrar el titulo en el componente', () => {
		render( <GifCard title={title} url={url} /> );

		expect( screen.getByText( title ) ).toBeTruthy();
	} );

	test( 'Si el titulo se envia como un string vacio lo convierte en un string "GIF', () => {
		const emptyTitle = '';

		render( <GifCard title={emptyTitle} url={url} /> );

		const { alt } = screen.getByRole( 'img' );

		expect( alt ).toBe( 'GIF' );
	} );
} );

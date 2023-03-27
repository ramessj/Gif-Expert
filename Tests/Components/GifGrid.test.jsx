import { render, screen } from '@testing-library/react';
import {GifGrid} from '../../src/Components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock( '../../src/hooks/useFetchGifs' );

describe( 'Pruebas en <GifGrid />', () => {
	
	const category = 'Messi';

	test( 'Debe de mostrar el loading inicialmente', () => {

		useFetchGifs.mockReturnValue( {
			gifs: [],
			isLoading: true
		} );

		render( <GifGrid category={category}/> );
		
		expect( screen.getByText( 'Cargando...' ) ).toBeTruthy();

		expect( screen.getByText( category ) ).toBeTruthy();

	} );

	test( 'Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

		const images = [ 
			{
				id: 'ABC',
				title: 'Saitama',
				url: 'https://images.saitama.gif'
			},
			{
				id: 'ABCD',
				title: 'Goku',
				url: 'https://images.goku.gif'
			}
		];

		useFetchGifs.mockReturnValue( {
			gifs: images,
			isLoading: false
		} );

		render( <GifGrid category={category}/> );

		expect( screen.getAllByRole( 'img' ).length ).toBe( 2 );

	} );
} );
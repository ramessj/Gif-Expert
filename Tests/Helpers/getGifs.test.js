import { getGifs } from '../../src/Helpers/getGifs';

describe( 'Pruebas en getGifs', () => {
	test( 'Debe retornar un array de gifs', async () => {
		const gifs = await getGifs( 'Messi' );

		expect( gifs.length ).toBeGreaterThan( 1 );

		expect( gifs[1] ).toEqual( {
			id: expect.any( String ),
			title: expect.any( String ),
			url: expect.any( String ),
		} );
	} );

	test( 'Debe retornar un array de 1 gif si se envia una cadena vacia o la API no encontro resultados', async () => {
		const gifs = await getGifs( '' );

		expect( gifs[0] ).toEqual( {
			id: expect.any( String ),
			title: 'No se encontraron resultados',
			url: expect.any( String ),
		} );
	} );
} );
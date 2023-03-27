import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';


describe( 'Pruebas en el hook de useFetchGifs', () => {
	test( 'Debe de regresar el estado inicial', () => {

		const { result } = renderHook( () => useFetchGifs( 'Dragon Ball' ) );

		const {gifs, isLoading} = result.current;

		expect ( gifs.length ).toBe( 0 );
		
		expect ( isLoading ).toBeTruthy();

	} );

	test( 'Debe de retornar un array de imagenes y el isLoading en false', async() => {

		const { result } = renderHook( () => useFetchGifs( 'Dragon Ball' ) );

		await waitFor( 
			() => expect( result.current.gifs.length ).toBeGreaterThan( 0 )
		);

		const {gifs, isLoading} = result.current;

		expect ( gifs.length ).toBeGreaterThan( 0 );
		
		expect ( isLoading ).toBeFalsy();

	} );
} );
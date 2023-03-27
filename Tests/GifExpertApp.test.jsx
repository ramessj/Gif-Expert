import { render, screen } from '@testing-library/react';
import {GifExpertApp} from '../src/GifExpertApp';

describe( 'Pruebas en <GifExpertApp />', () => {

	//HACER UN MONTON DE PRIUEBAS INNCECASRIAS PERO Q ME LO PIDE EL PROFE 

	test( 'should', () => {


		render( <GifExpertApp /> );

		screen.debug();

	} );
} );
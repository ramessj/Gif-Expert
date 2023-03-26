import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

export const GifCard = ( { title, url } ) => {

	const [ titleName, setTitleName ] = useState( title );
    
	useEffect( ()=>{
		if ( title == '' ) {
			setTitleName( 'GIF' );
            
		}else{
			setTitleName( title );
		}
	}, [] );


	return (
		<div className="card">
			<img src={ url } alt={ titleName } />
			<div className="cardSeparator"/>
			<p>{ titleName }</p>
		</div>
	);
};

GifCard.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired
};


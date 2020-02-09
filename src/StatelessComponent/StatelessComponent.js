import React from 'react';
import PropTypes from 'prop-types';

const StatelessComponent = (props) =>  (
        <article>
            {
                props.count === 0 ?
                <p>Você não clicou?</p> :
                <p>Você clicou {props.count} vezes?</p>
            }
            <button onClick={() => console.log(props.count)}>
                Clica aqui
            </button>
        </article>
);

StatelessComponent.propTypes = {
 count: PropTypes.number,
};
export default StatelessComponent;
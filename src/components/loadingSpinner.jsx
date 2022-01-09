import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { GeneralContext } from '../contexts/generalContext';

const LoadingSpinner = ({name}) => {

    const { loading } = useContext(GeneralContext);

    if (loading ) {
    return (
        <Spinner
            as="span"
            variant="warning"
            role="status"
            aria-hidden="true"
            animation="border">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
    } else {
        return (
            <>{name}</>
        );
    }
}

export default LoadingSpinner;
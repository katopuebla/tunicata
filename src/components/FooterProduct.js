import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { GeneralContext } from '../contexts/generalContext';
import { ProductContext } from '../contexts/productContext';
import LoadingSpinner from './loadingSpinner';

const FooterProduct = ({onCloseEdit}) => {
    const { setLoading } = useContext(GeneralContext);
    const { isEdit } = useContext(ProductContext);
        if (isEdit) {
            return (
              <Modal.Footer>
                <Button variant="secondary" onClick={onCloseEdit}>Cerrar</Button>
                <Button variant="primary" type="submit" onClick={() => {setLoading(true)}}>
                  <LoadingSpinner name={'Guardar'} />
                </Button>
              </Modal.Footer>
            );
          } else {
            return (
              <Modal.Footer>
              </Modal.Footer>
            );
          }
}
 
export default FooterProduct;
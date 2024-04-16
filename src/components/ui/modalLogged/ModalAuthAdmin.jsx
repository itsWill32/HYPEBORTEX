import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import GlobalLink from '../link/Link';
import './ModalAuthAdmin.css';

const style = {
  width: 150,
  height: 30,
  bgcolor: 'background.paper',
  p: 4,
  borderRadius: 2,
  marginLeft: 130,
  marginTop: 10,
  color: 'black',
};

export default function ModalAuthAdmin({ isOpenAd, handleCloseAd }) {
  return (
    <div>
      <Modal
        open={isOpenAd}
        onClose={handleCloseAd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='container-modalAuthAd'>
            <GlobalLink  valueStr={'Cerrar Sesion'} url={'/'} customClassLink={'link-LogouthAd'} />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
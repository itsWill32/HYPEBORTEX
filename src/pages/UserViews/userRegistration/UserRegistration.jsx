import GlobalButton from '../../../components/ui/button/Button';
import './UserRegistration.css'
import GlobalInput from '../../../components/ui/input/Input';

export default function UserRegistration() {
    return (
        <div className='completeRegister'>
            <div className='container-completeRegister'>
                <div className='container-register-left'>
                <GlobalInput name={''} type={'text'} withLabel={true} label={'nombre completo:'} placeholder={'nombre'} custoClassInput={'input-cpmpleteRegistro'} />
                <GlobalInput type={'text'} withLabel={true} label={'apellidos completos:'} placeholder={'nombre'} custoClassInput={'input-cpmpleteRegistro'} /> 
                <GlobalInput type={'text'} withLabel={true} label={'cuidad:'} placeholder={'nombre'} custoClassInput={'input-cpmpleteRegistro'} /> 
                <GlobalInput type={'text'} withLabel={true} label={'provincia:'} placeholder={'nombre'} custoClassInput={'input-cpmpleteRegistro'} />  
                </div>
                <div className='container-register-right'>
                <GlobalInput type={'text'} withLabel={true} label={'codigo postal:'} placeholder={'nombre'} custoClassInput={'input-cpmpleteRegistro'} />
                <GlobalInput type={'text'} withLabel={true} label={'direccion(descripcion):'} placeholder={'nombre'} custoClassInput={'input-cpmpleteRegistro'} /> 
                <GlobalInput type={'text'} withLabel={true} label={'numero telefonico:'} placeholder={'nombre'} custoClassInput={'input-cpmpleteRegistro'} /> 
                <GlobalInput type={'text'} withLabel={true} label={'correo de cuenta paypal:'} placeholder={'nombre'} custoClassInput={'input-cpmpleteRegistro'} />  
                </div>
            </div>
            <div className="button-register-container">
            <GlobalButton content="Guardar DAtos" customClassButton="button-register" />
            </div>
        </div>
    );
}


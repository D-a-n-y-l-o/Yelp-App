export const FormError = ({ errorMessage }) => {

    const getErrorText = (errorMessage) => {
        const parts = errorMessage.split(':');

        return parts[1];
    }
    return(
        <p className='form-error'>{getErrorText(errorMessage)}</p>
    )
};
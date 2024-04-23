import { useTranslation } from 'react-i18next'

import './login.css'

const Login = () => {

    const [t] = useTranslation("global");

    return(
        <div className='wrapperLogin'>
            <form action="" className='formLogin'>
                <h2>{t ('login.inicioSesion')}</h2>
                <label htmlFor="">{t ('login.usuario')}</label>
                <input type="text" placeholder={t ('login.placeholderUser')} />
                <label htmlFor="">{t ('login.password')}</label>
                <input type="password" placeholder={t ('login.placeholderPassword')} />
                <button>Submit</button>
            </form>
            <div className='register'>
            <p>{t ('login.register')}</p>
            <p className='signUp'>{t ('login.signUp')}</p>
            </div>
        </div>
    )
}

export default Login;
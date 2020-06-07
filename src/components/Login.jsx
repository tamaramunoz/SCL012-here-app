import React, { Fragment, useState } from 'react'
import '../styles/Login.css'

const Login = () => {

    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [isRegister, setIsRegister] = useState(true)

    const procesarDatos = (e) => {
        e.preventDefault()
        if(!mail.trim()){
            setError('Ingrese email')
            return
        }

        if(!password.trim()){
            setError('Ingrese contraseña')
            return
        }

        if(password.length < 6){
            setError('Ingrese contraseña mayor a 6 carácteres')
            return
        }

        setError(null)
        console.log('Pasando todas las validaciones');
    }


    return (
        <Fragment>
            <div>
                <header className='header-login'>
                    <p>
                        {
                            isRegister ? 'Registro de usuarios' : 'Inicio de Sesión'
                        }
                    </p>
                </header>

                <div className="main-login-container">
                    <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                        <form className="form-login-container" onSubmit={procesarDatos}>
                            {
                                error && (
                                    <div className="alert alert-danger">
                                        {error}
                                    </div>
                                )
                            }
                            <input
                                type="email"
                                className="inputLogin"
                                placeholder="Ingrese email"
                                onChange={e => setMail(e.target.value)}
                                value={mail}
                            />
                            <input
                                type="password"
                                className="inputLogin"
                                placeholder="Ingrese contraseña"
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                            />
                            <button className="buttonLogin" type="submit">
                                {
                                    isRegister ? 'Registrarse' : 'Iniciar Sesión'
                                }
                            </button>

                            <p className="buttonCreatedAccount"
                                onClick={() => setIsRegister(!isRegister)}
                            >
                                {
                                    isRegister ? '¿ Ya tienes cuenta ?' : '¿ No estás registrado ?'
                                }
                            </p>

                        </form>
                    </div>
                </div>


            </div>
        </Fragment>
    )
}

export default Login

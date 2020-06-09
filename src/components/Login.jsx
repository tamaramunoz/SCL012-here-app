import React, { Fragment, useState, useCallback } from 'react'
import '../styles/Login.css'
import { auth, db } from '../backend/firebase'
import { withRouter } from 'react-router-dom'

import Nina from '../views/imagen/niña.png'


const Login = (props) => {

    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [isRegister, setIsRegister] = useState(false)

    const procesarDatos = (e) => {
        e.preventDefault()
        if (!mail.trim()) {
            setError('Ingrese email')
            return
        }

        if (!password.trim()) {
            setError('Ingrese contraseña')
            return
        }

        if (password.length < 6) {
            setError('Ingrese contraseña mayor a 6 carácteres')
            return
        }

        setError(null)
        // console.log('Pasando todas las validaciones');

        if (isRegister) {
            registrar()
        } else {
            login()
        }
    }

    const login = useCallback(async () => {

        try {
            await auth.signInWithEmailAndPassword(mail, password)
            // console.log(res.user);

            setMail('')
            setPassword('')
            setError(null)

            props.history.push('/map')

        } catch (error) {
            console.log(error);
            if (error.code === 'auth/user-not-found') {
                setError('Usuario no registrado')
            }

            if (error.code === 'auth/wrong-password') {
                setError('Contraseña incorrecta')
            }
        }

    }, [mail, password, props.history])


    const registrar = useCallback(async () => {

        try {
            const res = await auth.createUserWithEmailAndPassword(mail, password)
            // console.log(res.user);

            await db.collection('usuarios').doc(res.user.email).set({
                email: res.user.email,
                uid: res.user.uid
            })

            await db.collection(res.user.uid).add({
                local: 'local de ejemplo',
                fecha: Date.now()
            })

            setMail('')
            setPassword('')
            setError(null)

            props.history.push('/map')

        } catch (error) {
            console.log(error);
            if (error.code === 'auth/invalid-email') {
                setError('Email no válido')
            }

            if (error.code === 'auth/email-already-in-use') {
                setError('Este correo ya está en uso')
            }
        }

    }, [mail, password, props.history])

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

                <div className="avatar-register-container">
                    <img src={Nina} alt="Imagen de registro de usuarios" className="avatar-register" />
                </div>
                
            </div>
        </Fragment>
    )
}

export default withRouter(Login)

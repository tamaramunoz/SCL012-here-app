// import React, { Fragment } from 'react'
// import '../Css/login.css'
// import LoginEmail from '../viwes/Init';
// import InicioSesion from '../viwes/Form';

// class LoginView extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isActive: false,
//       isNavbar: true
//     }
    
//   }
//   // Función que cambia el estado del componente a falso
//   handleToggleClick() {
//     this.setState(({ isActive: true }));
//     console.log(this.state.isActive, 'mi estado')
//   }
//   handleClick() {
//     this.setState({ isNavbar: false })
//     console.log(this.state.isNavbar, 'mi estado navbar')
//   }
//   render() {
//     // Si el estado es true me muestra Login
//     if (!this.state.isActive === this.state.isNavbar) {
//       return (
//         <Fragment>
//           <div className="containe">
//             {/* <img
//               src="https://github.com/kaarenzu/Here-Squad2/blob/master/src/Imagenes/logo.png?raw=true"
//               className="logo" /> */}
//             <h5>Planifica tus viajes, siéntete seguro Move Calm te acompaña </h5>
//             {/* Con este boton cambio el estado a falso */}
//             <button type="button" onClick={this.handleToggleClick}
//               className="btn btn-outline-info lg"
//               id="crearCuenta">{this.state.isActive ? 'Crear una cuenta' : 'Crear cuenta'}
//             </button>
//             <button type="button" className="btn btn-outline-info lg"
//               onClick={this.handleClick} id="iniciarSesion">{this.state.isNavbar ? 'Iniciar Sesión' : 'false'}
//             </button>
//           </div>
//         </Fragment>
//       )
//     }
//     return(
//       <Fragment>
//         {this.state.isActive ? <LoginEmail /> : <InicioSesion />}
//       </Fragment>
//     )
//   }
// }
// export default LoginView;




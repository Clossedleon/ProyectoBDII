import { useState } from 'react';
import { useNavigate } from 'react-router';
import { HOME_URL } from '../../constants/urls';
import { loginWithEmailAndPassword, signInWithGoogle } from '../../firebase/auth-service';
import Styles from './LoginPage.module.css';



export function LoginPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });

    const handleOnChange = (event) => {
      const {name, value} = event.target;
      setFormData({
        ...formData,
        [name]: value,
      })
    }

    const onSubmit = async (event) => {
      event.preventDefault();
      const {email, password, ...extraData} =formData;

      if(password != ''){

        const couldLogin = await loginWithEmailAndPassword(formData.email, formData.password, extraData);
  
        if(couldLogin){
          navigate(HOME_URL);
        }

      }

    };

    const handleSignWithGoogle = async () => {
      console.log('registro con google')   
      const finishedSuccessfully = await signInWithGoogle();
      
      if(finishedSuccessfully){
        navigate(HOME_URL);
      }

    }

    return (
      
      <div className={Styles.body}>
      
      <div className={Styles.titleBox}>
        <h1 className={Styles.title}>BIENVENIDO</h1>
      </div>

      <div className={Styles.contentBox}>
        
        <div className={Styles.contentAround}>
          <h1 className={Styles.subtitle}>Iniciar Sesión</h1>
        </div>

        <form onSubmit={onSubmit}>

        <div className={Styles.content}>
          <h1 className={Styles.whiteText}>Email</h1>
          <input type="text" className={Styles.textField} placeholder="Ej. CarteleraCaracas@email.com" name='email' onChange={handleOnChange} />
        </div>

        <div className={Styles.content}>
          <h1 className={Styles.whiteText}>Contraseña</h1>
          <input type="password" className={Styles.textField} placeholder="Tu contraseña, cualquier caracter" name='password' onChange={handleOnChange} />
        </div>

        <div className={Styles.contentAround}>
          <button className={Styles.button}  onClick = {onSubmit}><h1 className={Styles.blackText}>Ingresar</h1></button>
        </div>

        </form>


        <div className={Styles.contentGoogle}>
          <button className={Styles.buttonGoogle} onClick = {handleSignWithGoogle}><h1 className={Styles.blackText}>Continuar con Google</h1></button>
        </div>

      </div>
      
      </div>  
      
    )
  }
  

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { HOME_URL } from '../../constants/urls';
import { registerWithEmailAndPassword, signInWithGoogle } from '../../firebase/auth-service';
import Styles from './RegisterPage.module.css'

export function RegisterPage() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:''
  });

  const handleOnChange = (event) =>{
    const{name, value} = event.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  
  const onSubmit = async (event) => {
    event.preventDefault();
    const {email, password, ...extraData} = formData;
    console.log(formData);
    await registerWithEmailAndPassword(formData.email, formData.password, extraData);

  }

  const handleSignWithGoogle = async () => {
    const finishedSuccessfully = await signInWithGoogle();
    
    if(finishedSuccessfully){
      navigate(HOME_URL);

    }
    
  }

  return (
    <div className={Styles.body}>
    <div className={Styles.titleBox}>
      <h1 className={Styles.title}>Crear Cuenta</h1>
    </div>

    <div className={Styles.contentBox}>
      
      <form onSubmit={onSubmit}>

        <div className={Styles.contentBetween}>
          <h1 className={Styles.whiteText}> Nombre</h1>
          <input type="text" className={Styles.textField} placeholder = 'nombre' name = 'name' onChange={handleOnChange}/>
        </div>

        <div className={Styles.contentBetween}>
          <h1 className={Styles.whiteText}>Email</h1>
          <input type="text" className={Styles.textField} placeholder = 'Ej. CarteleraCaracas@email.com' name = 'email' onChange={handleOnChange}/>
        </div>
        
        <div className={Styles.contentBetween}>
          <h1 className={Styles.whiteText}>Contraseña</h1>
          <input type="password" className={Styles.textField} placeholder = 'Contraseña' name = 'password' onChange={handleOnChange}/>
        </div>

        <div className={Styles.content}>
          <button className={Styles.button}><h1 className={Styles.blackText} onClick={onSubmit}>Crear Cuenta</h1></button>
        </div>

      </form>

      <div className={Styles.contentContinueGoogle}>
        <button className={Styles.button}><h1 className={Styles.blackText} onClick={handleSignWithGoogle}>Continuar con Google</h1></button>
      </div>
    </div>

    </div>
  )
}


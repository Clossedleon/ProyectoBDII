// TODOS LOS METODOS DE AUTENTICACIÓN
import {signInWithPopup,
    signOut,
     createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      getAdditionalUserInfo
   } from 'firebase/auth'
import { auth, googleProvider } from './config';
import { createUserProfile } from './users-service';





export const signInWithGoogle = async () => {
     
   try{

        const result = await signInWithPopup(auth, googleProvider);
        console.log(result);
        
        const { isNewUser } = getAdditionalUserInfo(result);
        
        console.log('NEWUSER', isNewUser);
        
        if(isNewUser){           

            await createUserProfile(result.user.uid, {
                name: result.user.displayName,
                email: result.user.email,
                password: '',
            })

        }

        return true;
    }catch(error){

        console.error(error);

        alert(error);
        
        return false;
    }

};

export const registerWithEmailAndPassword = async (
    email,
    password,
    extraData
) => {
    try{
        const result = await createUserWithEmailAndPassword(auth, email, password);
        console.log("REGISTER EMAIL AND PASSWORD", result);
        await createUserProfile(result.user.uid, {
            email,
            password,
            ...extraData
        });
    }catch(error){
        console.error(error);
        alert(error);
    }
};

export const loginWithEmailAndPassword = async (email, password) => {
    
    try{
        const result = await signInWithEmailAndPassword(auth, email, password);
        console.log('LOGIN', result);
        return true;
    }catch(error){
        console.error(error);
        alert(error);
        return false;
    }

};

export const logout = async () => {
    try{
        await signOut(auth);
    }catch(error){
        Console.log (error);
        alert(error);
    }
};
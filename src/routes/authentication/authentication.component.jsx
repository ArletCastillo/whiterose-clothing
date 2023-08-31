import { 
    signInWithGooglePopUp, 
    createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const Authentication = () => {    
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopUp();
        await createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In with Google popup</button>
            <SignUpForm />
        </div>
    );
}

export default Authentication;
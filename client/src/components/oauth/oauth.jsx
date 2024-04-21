import { AiFillGoogleCircle } from "react-icons/ai";
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
import { app } from "../../firebase/firebase.js";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/user/userSlice.js";
import { useNavigate } from "react-router-dom";

export default function Oauth() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = getAuth(app)
    const handleGoogleClick = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({prompt: 'select_account'});
        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider)
            const res = await fetch('api/auth/google',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: resultsFromGoogle.user.displayName,
                    email: resultsFromGoogle.user.email,
                    googlePhotoUrl: resultsFromGoogle.user.photoURL,
                }),
            })
            const data = await res.json()
            if (res.ok) {
                dispatch(loginSuccess(data))
                navigate('/')
            }
        } catch (error) {
            console.log(error);
        }
  };

  return (
    <button
      type="button"
      className="rounded-md h-10 bg-gradient-to-r from-green-400 to-blue-100 hover:from-pink-500 hover:to-yellow-500 hover:text-white"
      onClick={handleGoogleClick}
    >
      <span className="mx-auto flex justify-center gap-2 font-bold">
        <AiFillGoogleCircle className="w-6 h-6" /> Continue with Google
      </span>
    </button>
  );
}


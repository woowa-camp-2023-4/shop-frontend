import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";


const {persistAtom} = recoilPersist();

export const LoginState = atom({
    key: 'LoginState',
    default: {
        loggedIn: false,
        name: "",
        email: "",
        role: "",
        effects_UNSTABLE: [persistAtom]
    },
});
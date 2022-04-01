import { Children, createContext, useContext } from "react";

// const userDefault = {
//   email: "",
//   user_name: "",
//   savedResume: [],
// };
const UserContext = createContext();
export function useUser() {
  useContext;
}

export default function UserProvider({ children }) {
  const [token, setToken] = useState(false)

  useEffect(() =>{
    const firstLogin = localStorage.getItem('firstLogin')
    if(firstLogin){
        const refreshToken = async () =>{
            const res = await axios.get('/user/refresh')
    
            setToken(res.data.accesstoken)

            setTimeout(() => {
                refreshToken()
            }, 10 * 60 * 1000)
        }
        refreshToken()
    }
},[])
 const state = {
  token: [token, setToken],
 

}

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
}

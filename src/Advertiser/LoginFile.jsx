import { useDispatch, useSelector } from "react-redux";
import { login } from "../api"
import { setCurrentAdvertiser, setToken } from "../state/Actions";
import '../style/login.css'
import { useNavigate } from "react-router";
import swal from "sweetalert";

export const Login=()=>{
 const dis=useDispatch()
 const user = useSelector(s => s.currentAdvertiser)
const nav=useNavigate()
    const loginFunc=(e)=>
    {
     e.preventDefault();
    const advertiser={
    email:e.target[0].value,
    password:e.target[1].value
}
login(advertiser)
.then(success=>{
    dis(setCurrentAdvertiser(success.data.user))
    dis(setToken(success.data.token))
swal("ברוך הבא!,התחברת בהצלחה!","שים 💗, ההתחברות תקפה לחצי שעה בלבד!","success")
nav('/allapartments')
})
.catch(err=>{
    console.log((err.response.data.error));
   swal("שגיאה",err.response.data.error,"error")
    console.log(err);
if(err.response.status==404){
swal("אינך רשום במערכת","הינך מועבר לדף ההרשמה","error")
    nav('/signin')
}
   })
    }

    return<>
    <h1>login file</h1>
    <form onSubmit={(e)=>loginFunc(e)}>
<label htmlFor="email">📧enter email:</label>
<br></br>
<input id="email" type="email" placeholder="email"></input>
<br></br>
<label htmlFor="password">🔑enter password:</label>
<br></br>
<input id="password" type="password" placeholder="password"></input>
<br></br>
<input type="submit" value="login"/>
    </form>
    </>
}
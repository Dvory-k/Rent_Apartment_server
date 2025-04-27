import { useDispatch, useSelector } from "react-redux";
import { login, signIn } from "../api"
import { setCurrentAdvertiser, setToken } from "../state/Actions";
import swal from "sweetalert";
import { useNavigate } from "react-router";


export const SignIn=()=>{
 const dis=useDispatch()
 const user = useSelector(s => s.currentAdvertiser)
const nav=useNavigate()
    const signFunc=(e)=>
    {
     e.preventDefault();
    const advertiser={
    email:e.target[0].value,
    password:e.target[1].value,
    phone:e.target[2].value,
    phone2:e.target[3].value,
    arrApartment:[]
}
signIn(advertiser)
.then(success=>{
    dis(setCurrentAdvertiser(success.data.advertiser))
    dis(setToken(success.data.token))
    console.log(user);
swal("התחברת בהצלחה!!!","ברוך הבא!!","success")
nav('/allapartments')

})
.catch(err=>{console.log(err.response.data.error)
alert(err.response.data.error)})
    }

    return<>
    <h1>sign file</h1>
    <form onSubmit={(e)=>signFunc(e)}>
<label htmlFor="email">📧enter email:</label>
<br></br>
<input id="email" type="email" placeholder="email"></input>
<br></br>
<label htmlFor="password">🔑enter password:</label>
<br></br>
<input id="password" type="password" placeholder="password"></input>
<br></br>
<label htmlFor="phone">☎️enter phone:</label>
<br></br>
<input id="phone" type="text" placeholder="phone"></input>
<br></br>
<label htmlFor="morephone">📞enter more phone:</label>
<br></br>
<input id="morephone" type="text" placeholder="phone"></input>
<br></br>
<input type="submit" value="login"/>
    </form>
    </>
}
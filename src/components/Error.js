import { useRouteError } from "react-router-dom"

const Error = () =>{
    const err = useRouteError()
    return(
        <div className="error">
            <img src={require("../../Photos/istockphoto-1131230925-612x612.jpg")} alt="" />
            <h1>OPPS!!!</h1>
            <h2>Something Went Wrong</h2>
            <h3>Please confirm that the website is properly spelt</h3>
            <h3>{err.status} : {err.statusText}</h3>
        </div>
    )
}
export default Error
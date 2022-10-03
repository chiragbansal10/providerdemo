let name ="Sakib"
let age =25
/*const Smiley = ({nameS,ageS})=>{
    return(
        <div>
            <h1>Smiley</h1>
            <Laugh
            namel={nameS}
            agel={ageS}
            />
        </div>
    )
}*/

const Smiley = ()=>{
    return(
        <div>
            <h1>{name} Smiley</h1>
            <Laugh
            />
        </div>
    )
}

/*const Laugh = ({namel,agel})=>{
    return(
        <div>
            <h1>Laugh</h1>
            <Cry
            name={namel}
            age={agel}
            
            />
        </div>
    )
}*/
const Laugh = ()=>{
    return(
        <div>
            <h1>Laugh</h1>
            <Cry         
            />
        </div>
    )
}
/*const Cry=({name,age})=>{
    return(
        <div>
            <h1>{name} is crying whose age is {age}</h1>
        </div>
    )
}*/
const Cry=()=>{
    return(
        <div>
            <h1>{name} is crying whose age is {age}</h1>
        </div>
    )
}
const App=()=>(
    <div>
<h1>Hello Worlds</h1>
<Smiley 
/*nameS="Sakib"
ageS="25"*/
/>
    </div>
)
export default App
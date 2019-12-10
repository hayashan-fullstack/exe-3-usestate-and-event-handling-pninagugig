import React from "react";
import ReactDOM from "react-dom";



const Header=()=>{
    return(
        <div>
            <table border = '1'>
            <tr>
                <th width ="24%">Detailes</th>
                <th width ="25%">Deadline</th>
                <th width ="25%">Important</th>
                <th width ="24%">Done</th>
            </tr>
            </table>
        </div>
    )
}
const Line=(props)=>{
    return(
        <div>
            <table border = '1'>
            <tr>
                <td width ="25%">{props.line.Detailes}</td>
                <td width ="26%">{props.line.Deadline}</td>
                <td width ="27%">{props.line.Important}</td>
                <td width ="25%">{props.line.Done}</td>
            </tr>
            </table>
        </div>

    )
}
const Doing = (props) =>{
    return (
        props.MyTaskbar.map(line =><Line line={line}/>)
    )
}

const App = () => {
    const MyTaskbar = [
        {
            Detailes: "dentist",
            Deadline: "20-12-2019",
            Important: "Y",
            Done: "✔"
        },
        {
            Detailes: "meeting",
            Deadline: "14-05-2021",
            Important: "Y",
            Done: "✖"
        },
        {
            Detailes: "homework",
            Deadline: "12-12-2012",
            Important: "N",
            Done: "✖"
        },
        {
            Detailes: "trip",
            Deadline: "01-01-2000",
            Important: "N",
            Done: "✔"
        },
        {
            Detailes: "Shopping",
            Deadline: "28-11-2020",
            Important: "Y",
            Done: "✔"
        }
    ];
    return (
        <div style={{margin:'15%' }}>
        <br/>
        <br/>
            <h1>My Task board:</h1>
            <br/>
            <Header/>
            <Doing MyTaskbar={MyTaskbar}/>
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById("root"));




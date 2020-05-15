import React from 'react'

export default function PaigeView(props) {

 let movies = props.info.favoriteMovies.map((element, index)=>{
   return <li> {element}</li>
 })

return <div className="App-content">
         <div className="App-wrapper">
            <div className="App-coumter">{props.current+1}/{props.count}</div>
            <div className="App-name"><span className="underline">{props.info.name['first']} {props.info.name['last']}</span></div>
            <div><span className="App-bold">From:</span>  {props.info.city}, {props.info.country}</div>
            <div><span className="App-bold">Job Title:</span>  {props.info.title}</div>
            <div><span className="App-bold">Employer:</span>  {props.info.employer}</div>
            <div className="App-movies">
            <span className="App-bold App-movies">Favorite Movies:</span>
               <ol className="App-list">{movies}</ol>
            </div>
         </div>
      </div>
}
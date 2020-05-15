import React from 'react'

export default function PaigeView(props) {

 let movies = props.info.favoriteMovies.map((element, index)=>{
   return <li> {element}</li>
 })

return <div>
      <div>{props.current+1}/{props.count}</div>
      <div>{props.info.name['first']} {props.info.name['last']}</div>
      <div>From:  {props.info.city}, {props.info.country}</div>
      <div>Employer:  {props.info.employer}</div>
      <div>
         <h3>Favorite Movies:</h3>
         <ol>{movies}</ol>
      </div>
      </div>
}
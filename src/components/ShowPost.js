import React from 'react'
import { useParams } from 'react-router-dom'

export default function ShowPost(props) {
   const { postId } = useParams()
   const data = props.data[postId]

   return (
      <div>
         <h1>{data.post_title}</h1>
      </div>
   )
}

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ShowPost(props) {
   const { postId } = useParams()
  
   //const data = props.data[postId]

   let [data, setData] = useState({})

   useEffect(() => {
      const fetchData = async () => {
         const response = await fetch(`http://localhost:3000/posts/${postId}`)
         const resData = await response.json()
         setData(resData)
      }
      fetchData()
   }, [])

   return (
      <div>
         <h1>{data.post_title}</h1>
      </div>
   )
}

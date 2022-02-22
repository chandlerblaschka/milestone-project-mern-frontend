import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

export default function ShowPost(props) {
   const { postId } = useParams()
   //const data = props.data[postId]

   let [data, setData] = useState({})

   useEffect(() => {
      const fetchData = async () => {
         const response = await fetch(`http://localhost:3000/posts`)
         const resData = await response.json()
         setData(resData[postId])
         console.log(resData)
      }
      fetchData()
   }, [])

   return (
      <div>
         <h1>{data.post_title}</h1>
      </div>
   )
}

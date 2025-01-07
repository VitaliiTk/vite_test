import { useState, useEffect } from 'react'
import axios from 'axios'

import './Posts.css'

function Posts() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((error) => console.error('Ошибка:', error))
  }, [])

  if (loading) return <p>Загрузка...</p>

  return (
    <section id="Posts">
      <h2>Posts</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </section>
  )
}

export default Posts

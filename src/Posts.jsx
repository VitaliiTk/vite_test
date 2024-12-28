import { useState, useEffect } from 'react'
import axios from 'axios'

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
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}

export default Posts

// import React, { useState, useEffect } from "react"
// import axios from "axios"



// const SearchForm = () => {
//     const [keywords, setKeywords] = useState('')
//     const [fetchedData, setFetchedData] = useState('')
  
//     async function fetchData() {
//       const { data } = await axios.post('http://127.0.0.1:8000/api/posts/', keywords)
//       setFetchedData(data)
//     }
  
//     useEffect(() => {
//       fetchData()
//     }, [])
  
//     const handleSubmit = e => {
//       e.preventDefault()
//       fetchData()
//     }
  
//     return (
//       <div>
//         <form onSubmit={handleSubmit}>
//           <div className="input-field">
//             <input placeholder="Search whatever you wish" type="text" value={keywords} onChange={e => setKeywords(e.target.value)}
//             />
//           </div>
//         </form>
//       </div>
//     )
//   }
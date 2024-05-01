import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function APIFLETCH() {
    const [get, setGet] = useState([]);
    console.log(get)
    useEffect(() => {
        axios.get("https://reactnd-books-api.udacity.com/books", {
            headers: { Authorization: "whatever-you-want" },
        })
            .then((response) => {
                setGet(response.data.books)
                
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    console.log("getttt", get[0])

    return (
        <div>
            <div className="book">

                {
                   Array.isArray(get)  && get.length != 0 && (
                        get.map((value, index) => {
                            return (
                            <div key={index}>
                                <h1>Title: {value?.title}</h1>
                                <img src={value?.imageLinks?.smallThumbnail} alt="find error or connection lost" />
                            <p>{value.description}</p>
                            </div>
                            )
                        })

                    )
                }


            </div>
        </div>
    )
}

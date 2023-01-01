import useSWR from "https://esm.sh/swr?external=react";
import useAsync from "ultra/hooks/use-async.js"

async function getData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data = await res.json()
    return data
}

export default function Test({id}: {id: string}){
    const data = useSWR(id, useAsync(getData))

    return <div>{JSON.stringify(data)}</div>
}
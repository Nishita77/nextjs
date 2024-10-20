"use client"
export default function ErrorBoundary({error,reset}){
    return <h1>{error.message} <button onClick={reset}>Try again</button></h1>
} 
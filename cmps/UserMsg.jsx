import { eventBusService } from "../services/event-bus.service.js"

const { useState, useEffect, useRef } = React

export function UserMsg(){

    const [msg, setMsg] = useState(null)
    const timoutRef = useRef()

    useEffect(() => {
        const unsubscribe = eventBusService.on('show-user-msg', msg => {
            clearTimeout(timoutRef.current)
            setMsg(msg)
            timoutRef.current = setTimeout(() => {
                setMsg(null)
            }, 3000);
        })
        return unsubscribe
    } , [])

    if(!msg) return null
    
    function closeMsg(){
        clearTimeout(timoutRef.current)
        setMsg(null)
    }

    return (
        <section className={`user-msg ${msg.type}`}>
            <p>{msg.txt}</p>
            <button onClick={closeMsg}>X</button>
        </section>
    )
}
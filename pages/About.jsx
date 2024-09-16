import { utilService } from "../services/util.service.js"

export function About(){
    return (
        <section className="about">
            <h2>Our mission is to make books accessible to anyone, anywhere, anytime!</h2>
            <p>{utilService.makeLorem(25)}</p>
        </section>
    )
}
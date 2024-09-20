const {useState} = React

export function LongText({txt, length = 100}){

    const [isShown, setIsShown] = useState(false)
    let shortTxt = txt.substring(0, length) 

    if(isShown){
        return (
            <p className="long-text">
                {txt} <span onClick={() => setIsShown(false)}> Show less...</span>
            </p>
        )
    }
    return (
        <p className="long-text">
            {shortTxt} <span onClick={() => setIsShown(true)}> Show more...</span>
        </p>
    )
}
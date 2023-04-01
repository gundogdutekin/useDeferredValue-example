import { useMemo,useDeferredValue } from "react"

function Characters({input}) {
   const deferredInput = useDeferredValue(input)
    const myList=useMemo(()=>{ 
        const myArray=[]
        for(let i = 0; i <30000; i++) {
          myArray.push(<div key={i}>{deferredInput}</div>)
        }
        return myArray
       
    },[deferredInput])
    return myList
}

export default Characters;
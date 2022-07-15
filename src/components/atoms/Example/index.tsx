import { useExampleState } from "../../../core/adapter/hooks/useExampleState"
export const ExampleAtomCOMP = () => { 
    const [example, setExample] = useExampleState()
    setExample("dave")
    return <div>oi state: {example}</div>
}
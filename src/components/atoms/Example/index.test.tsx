import ReactDOM from 'react-dom'
import React from 'react'
import {describe, it, expect, vi} from 'vitest' 
import { ExampleAtomCOMP } from './index'
interface ATOM<t> { 
    key: string, 
    default: t
}
vi.mock("recoil", () => { 
    return { 
        useRecoilState() {  
            const example = "dave";
            const setExample = (str:string) => str
            return [ 
                example, 
                setExample
            ]
        }, 
        atom: (obj: ATOM<string>) => obj.default 
    }
})

describe("example testing", () => { 
  it("should how name", () => { 
    const element = document.createElement("div")
    ReactDOM.render( <ExampleAtomCOMP />, element)
    expect(element.textContent).toMatch("dave")
  })
})
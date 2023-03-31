import React from 'react'
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../Header'


describe("header-render",()=>{
    let headerRender;
    beforeEach(()=>{
        render(<Header/>)
        headerRender =screen.getByText("Emoji Search")
    })
    test('Header kısmının ekranda gözükmesi gerek', () => {
        expect(headerRender).toBeInTheDocument()
    });
})
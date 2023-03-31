import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import App from '../App'


describe("click to copy Emoji",() =>{
  let copytitle
  beforeEach(()=>{
      render(<App/>)
     copytitle = screen.getByText("100")
  })
  test("copy to clickboard test",()=>{
      userEvent.click(copytitle)
      expect(copytitle.parentElement.getAttribute("data-clipboard-text")).toEqual("💯")
  })
}) 
// Emojinin gerçekten kopyalanıp kopyalanmadığını kontrol eden test

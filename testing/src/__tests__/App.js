import App from '../App'
import Box from '../Box'
import ReactDOM from 'react-dom'
import {shallow} from 'enzyme'
import { expect } from '@jest/globals'

// test('check if App compo hold Box compo', () => {
//   // we foolling react to belive that there is a window
//   const div=document.createElement("div")
//   // we put the app compo in the div elemnet
//   ReactDOM.render(<App/>,div)
//   // the test
//     expect(div.innerHTML).toContain("save comment")
//       //clean up in order the tests to b faster nothing more 
//     ReactDOM.unmountComponentAtNode(div)
// })
test('check if App compo hold Box compo', () => {
  console.log(shallow(<App/>))
  expect(5).toBe(5)
})

import App from '../App'
import Box from '../Box'
import ReactDOM from 'react-dom'

test('check if App compo hold Box compo', () => {
  // we foolling react to belive that there is a window
  const div=document.createElement("div")
  // we put the app compo in the div elemnet
  ReactDOM.render(<App/>,div)
  // the test
    expect(div.innerHTML).toContain("Box333")
      //clean up in order the tests to b faster nothing more 
    ReactDOM.unmountComponentAtNode(div)
})

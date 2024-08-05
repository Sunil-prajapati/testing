import './App.css'
import Props from './components/PropsTesting/Props'
import Api from './components/api/Api'
import Button from './components/button/Button'
import Input from './components/input/Input'

function App() {

  return (
    <div>
      <Input />
      <Button />
      <Props name="Jai ahree" />
      <Api />
    </div>
  )
}

export default App

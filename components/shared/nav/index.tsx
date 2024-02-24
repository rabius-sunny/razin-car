import Logobar from './logobar'
import Menubar from './menubar'
import Topbar from './topbar'

export default function Navbar() {
  return (
    <nav>
      <Topbar />
      <Logobar />
      <Menubar />
    </nav>
  )
}

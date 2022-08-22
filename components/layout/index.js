import Header from './header'
import Main from './main.js'

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen space-y-5'>
      <Header />
      <Main>{children}</Main>
    </div>
  )
}

export default Layout

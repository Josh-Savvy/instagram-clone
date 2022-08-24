import Header from './header'
import Main from './main.js'

const Layout = ({ children, className }) => {
  return (
    <div className='min-h-screen space-y-5'>
      <Header className={className} />
      <Main>{children}</Main>
    </div>
  )
}

export default Layout

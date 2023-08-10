import '@styles/globals.css';

// file importation
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "Promptopia",
    description: 'Discover & Share AI Prompts'
}

const RootLayout = ({ children }) => {
  return (
    <Provider>
      <html lang="en">
          <div className="main">
              <div className="gradient"></div>
          </div>
          <main className="app">
              <Nav />
              {children}
          </main>
      </html>
    </Provider>

  )
}

export default RootLayout
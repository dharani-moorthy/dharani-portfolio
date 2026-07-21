import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-white"
      >
        Skip to main content
      </a>
      <MainLayout>
        <Home />
      </MainLayout>
    </>
  )
}

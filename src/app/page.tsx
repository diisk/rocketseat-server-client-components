import { GithubUser } from './components/GithubUser'
import { Suspense } from 'react'
import { DialogProvider } from './contexts/DialogContext'

export default async function Home() {

  return (
    <DialogProvider>
      <Suspense fallback={<p>Carregando...</p>}>
        <GithubUser username='diisk'></GithubUser>
      </Suspense>
      <Suspense fallback={<p>Carregando...</p>}>
        <GithubUser username='diego3g'></GithubUser>
      </Suspense>
    </DialogProvider>
  )
}

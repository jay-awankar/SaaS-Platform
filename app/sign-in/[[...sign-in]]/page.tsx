import { SignIn } from '@clerk/nextjs'

const Page = () => {
  return (
    <main className='flex items-center min-h-screen bg-transparent'>
        <SignIn />
    </main>
  )
}

export default Page
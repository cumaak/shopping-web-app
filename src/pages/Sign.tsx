import React, { useState } from 'react'
import SignUpForm from '../components/signUpForm'
import SignInForm from '../components/signInForm'

const Sign = () => {
    const [signUp, setSignUp] = useState<boolean>(false)

  return (
    <main className='px-4 lg:px-40'>
        <section className='flex flex-col'>
            <div>
                <button onClick={()=> setSignUp(false)}>Sign In</button>
                <button onClick={()=> setSignUp(true)}>Sign Up</button>
            </div>
            {signUp == true ? <SignUpForm/> : <SignInForm/>}
        </section>
    </main>
  )
}

export default Sign
import React from 'react'

function Login() {
  return (
    <div className="px-24 flex items-center justify-center py-14 myclass">
      <div className="container max-w-screen-lg">
        <div>
          {/* <h2 className="font-semibold text-xl text-gray-600">Register</h2> */}

          <div className="rounded register-card shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Login</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                <form action="#" method='post' className="register grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              
                  <div className="md:col-span-5">
                    <label htmlFor="email">Email Address</label>
                    <input type="text" name="email" id="email" className="h-10 mt-1 rounded px-4 w-full"  placeholder="email@domain.com" />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full" placeholder=""  />
                  </div>

                  <div className="md:col-span-5 text-right pt-4">
                    <div className="inline-flex items-end">
                      <button className="btn font-medium py-2 px-4 rounded">Submit</button>
                    </div>
                  </div>
              

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

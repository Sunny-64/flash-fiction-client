import React from 'react'

function Register() {
  return (
    <div className="px-24 flex items-center justify-center py-14">
      <div className="container max-w-screen-lg">
        <div>
          {/* <h2 className="font-semibold text-xl text-gray-600">Register</h2> */}

          <div className="rounded register-card shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Register</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                <form action="#" method='post' className="register grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Full Name</label>
                    <input type="text" name="full_name" id="full_name" className="h-10 mt-1 rounded px-4 w-full"  />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">Email Address</label>
                    <input type="text" name="email" id="email" className="h-10 mt-1 rounded px-4 w-full"  placeholder="email@domain.com" />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="email">Mobile</label>
                    <input type="text" name="email" id="email" className="h-10 mt-1 rounded px-4 w-full"  placeholder="email@domain.com" />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="email">Date of Birth</label>
                    <input type="text" name="email" id="email" className="h-10 mt-1 rounded px-4 w-full"  placeholder="email@domain.com" />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="address">Address / Street</label>
                    <input type="text" name="address" id="address" className="h-10 mt-1 rounded px-4 w-full"  placeholder="" />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="address">Country</label>
                    <input type="text" name="address" id="address" className="h-10 mt-1 rounded px-4 w-full"  placeholder="" />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="address">State</label>
                    <input type="text" name="address" id="address" className="h-10 mt-1 rounded px-4 w-full"  placeholder="" />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="state">State / province</label>
                    <div className="h-10 input-border flex rounded items-center mt-1">
                      <input name="state" id="state" placeholder="State" className="px-4 w-full"  style={{border : "none", height : "100%", width : "100%"}} />
                    </div>
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="zipcode">Zipcode</label>
                    <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full" placeholder=""  />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full" placeholder=""  />
                  </div>

                  {/* <div className="md:col-span-5">
                    <label htmlFor="email">Profile Picture</label>
                    <input type="file" name="email" id="email" className="h-10 mt-1 rounded px-4 w-full"  placeholder="email@domain.com" style={{paddingTop : "6px"}}/>
                  </div> */}


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

export default Register

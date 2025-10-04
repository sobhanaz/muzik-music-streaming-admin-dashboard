<template>
  <section class="login-content overflow-hidden">
    <div class="row no-gutters align-items-center bg-white">
      <div class="col-md-12 col-lg-6 align-self-center">
        <div class="row justify-content-center">
          <div class="col-md-12 col-lg-6 align-self-center">
            <router-link :to="{ name: 'home.dashboard' }" class="navbar-brand d-flex align-items-center mb-3 justify-content-center text-primary">
              <div class="logo-normal">
                <brand-logo></brand-logo>
              </div>
              <h2 class="logo-title ms-3 mb-0" data-setting="app_name"><brand-name></brand-name></h2>
            </router-link>
          </div>
          <div class="col-md-9">
            <div class="card auth-card d-flex justify-content-center mb-0">
              <div class="card-body">
                <h2 class="mb-2 text-center">Sign Up</h2>
                <p class="text-center">Create your <brand-name></brand-name> account.</p>
                <form>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="full-name" class="form-label">Full Name</label>
                        <input id="full-name" type="text" class="form-control" placeholder="John" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="last-name" class="form-label">Last Name</label>
                        <input id="last-name" type="text" class="form-control" placeholder="Doe" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="email" class="form-label">Email</label>
                        <input id="email" type="email" class="form-control" placeholder="xyz@example.com" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="phone" class="form-label">Phone No.</label>
                        <input id="phone" type="text" class="form-control" placeholder="123456789" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="password" class="form-label">Password</label>
                        <input id="password" type="password" class="form-control" placeholder=" " />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="confirm-password" class="form-label">Confirm Password</label>
                        <input id="confirm-password" type="text" class="form-control" placeholder=" " />
                      </div>
                    </div>
                    <div class="col-lg-12 d-flex justify-content-center">
                      <div class="form-check mb-3">
                        <input id="customCheck1" type="checkbox" class="form-check-input" />
                        <label class="form-check-label" for="customCheck1">I agree with the terms of use</label>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary">Sign Up</button>
                  </div>
                  <p class="text-center my-3">or sign in with other accounts?</p>
                  <div class="d-flex justify-content-center">
                    <ul class="list-group list-group-horizontal list-group-flush">
                      <li class="list-group-item border-0 pb-0">
                        <a href="#"><img src="/assets/images/brands/gm.svg" alt="gm" loading="lazy" /></a>
                      </li>
                      <li class="list-group-item border-0 pb-0">
                        <a href="#"><img src="/assets/images/brands/fb.svg" alt="fb" loading="lazy" /></a>
                      </li>
                      <li class="list-group-item border-0 pb-0">
                        <a href="#"><img src="/assets/images/brands/im.svg" alt="im" loading="lazy" /></a>
                      </li>
                      <li class="list-group-item border-0 pb-0">
                        <a href="#"><img src="/assets/images/brands/li.svg" alt="li" loading="lazy" /></a>
                      </li>
                    </ul>
                  </div>
                  <p class="mt-3 text-center">Already have an Account <router-link :to="{ name: 'auth.login' }">Sign In</router-link></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 d-lg-block d-none bg-primary p-0 overflow-hidden">
        <img src="/assets/images/auth/01.jpg" class="img-fluid gradient-main" alt="images" loading="lazy" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>

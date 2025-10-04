<template>
  <section class="login-content overflow-hidden">
    <div class="row no-gutters align-items-center bg-white">
      <div class="col-md-12 col-lg-6 align-self-center">
        <router-link :to="{ name: 'home.dashboard' }" class="navbar-brand d-flex align-items-center mb-3 justify-content-center text-primary">
          <brand-logo></brand-logo>
          <h2 class="logo-title ms-3 mb-0" data-setting="app_name"><brand-name></brand-name></h2>
        </router-link>
        <div class="row justify-content-center pt-5">
          <div class="col-md-7">
            <div class="card d-flex mb-0 iq-auth-form">
              <div class="card-body">
                <h2 class="mb-2">Account De-activate</h2>
                <p class="">Enter your details to de-activate your account</p>
                <form>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="form-group">
                        <label for="email" class="form-label">Email</label>
                        <input id="email" type="email" class="form-control" aria-describedby="email" placeholder="xyz@example.com" />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group">
                        <label for="name" class="form-label">Username</label>
                        <input id="name" type="text" class="form-control" aria-describedby="name" placeholder="XYZ" />
                      </div>
                    </div>
                  </div>
                  <div class="d-flex">
                    <router-link :to="{ name: 'auth.account-deactivated' }"><button type="submit" class="btn btn-primary">De-activate</button></router-link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 d-lg-block d-none bg-primary p-0 overflow-hidden">
        <img src="/assets/images/auth/01.jpg" class="img-fluid" alt="images" loading="lazy" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>

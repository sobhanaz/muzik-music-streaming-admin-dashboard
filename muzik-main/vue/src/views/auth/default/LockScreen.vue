<template>
  <section class="login-content">
    <b-row class="m-0 align-items-center bg-white vh-100">
      <b-col md="6 p-0">
        <b-card class="card-transparent auth-card shadow-none d-flex justify-content-center mb-0">
          <router-link :to="{ name: 'home.dashboard' }" class="navbar-brand d-flex align-items-center mb-3">
            <brand-logo></brand-logo>
            <h2 class="logo-title ms-3 mb-0"><brand-name></brand-name></h2>
          </router-link>
          <img src="/assets/images/avatars/01.png" class="rounded avatar-80 mb-3" alt="" />
          <h4 class="mb-2">Hi ! Ruben Dokidis</h4>
          <p>Enter your password to access the admin.</p>
          <form>
            <div class="row">
              <div class="col-lg-12">
                <div class="floating-label form-group">
                  <label for="password" class="form-label">Password</label>
                  <input id="password" type="password" class="form-control" aria-describedby="password" placeholder=" " />
                </div>
              </div>
            </div>
            <b-button type="submit" variant="primary">Login</b-button>
          </form>
        </b-card>
      </b-col>
      <div class="col-md-6 d-md-block d-none bg-primary p-0 vh-100 overflow-hidden">
        <img src="/assets/images/auth/01.jpg" class="img-fluid gradient-main animated-scaleX" alt="images" loading="lazy" />
      </div>
    </b-row>
  </section>
</template>

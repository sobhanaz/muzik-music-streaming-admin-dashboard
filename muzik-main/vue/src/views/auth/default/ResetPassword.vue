<template>
  <section class="login-content">
    <div class="row m-0 align-items-center bg-white vh-100">
      <div class="col-md-6 d-md-block d-none bg-primary p-0 vh-100 overflow-hidden">
        <img src="/assets/images/auth/01.jpg" class="img-fluid gradient-main animated-scaleX" alt="images" loading="lazy" />
      </div>
      <div class="col-md-6 p-0">
        <div class="card card-transparent auth-card shadow-none d-flex justify-content-center mb-0">
          <div class="card-body">
            <router-link :to="{ name: 'home.dashboard' }" class="navbar-brand d-flex align-items-center mb-3 justify-content-center text-primary">
              <brand-logo></brand-logo>
              <h2 class="logo-title ms-3 mb-0"><brand-name></brand-name></h2>
            </router-link>
            <h2 class="mb-2">Reset Password</h2>
            <p>Enter your email address and we'll send you an email with instructions to reset your password.</p>
            <form>
              <div class="row">
                <div class="col-lg-12">
                  <div class="floating-label form-group">
                    <label for="email" class="form-label">Email</label>
                    <input id="email" type="email" class="form-control" aria-describedby="email" placeholder=" " />
                  </div>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Reset</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

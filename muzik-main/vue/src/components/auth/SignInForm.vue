<template>
  <b-card>
    <h3 class="text-center">Sign In</h3>
    <p class="text-center">Sign in to stay connected</p>
    <form>
      <div class="form-group">
        <label class="form-label" for="email-id">Email address</label>
        <input id="email-id" type="email" class="form-control mb-0" placeholder="Enter email" />
      </div>
      <div class="form-group">
        <label class="form-label" for="password">Password</label>
        <input id="password" type="email" class="form-control mb-0" placeholder="Enter Password" autocomplete="current-password" />
      </div>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="form-check d-inline-block pt-1 mb-0">
          <input id="customCheck11" type="checkbox" class="form-check-input" />
          <label class="form-check-label" for="customCheck11">Remember Me</label>
        </div>
        <router-link :to="{ name: 'animated.auth.reset-password' }">Forget password</router-link>
      </div>
      <div class="text-center pb-3">
        <button type="button" class="btn btn-primary">Sign in</button>
      </div>
    </form>
    <p class="text-center">Or sign in with other accounts?</p>
    <div class="d-flex justify-content-center">
      <ul class="list-group list-group-horizontal list-group-flush">
        <li class="list-group-item border-0 pb-0">
          <a href="#"><img src="/assets/images/brands/fb.svg" alt="fb" loading="lazy" /></a>
        </li>
        <li class="list-group-item border-0 pb-0">
          <a href="#"><img src="/assets/images/brands/gm.svg" alt="gm" loading="lazy" /></a>
        </li>
        <li class="list-group-item border-0 pb-0">
          <a href="#"><img src="/assets/images/brands/im.svg" alt="im" loading="lazy" /></a>
        </li>
        <li class="list-group-item border-0 pb-0">
          <a href="#"><img src="/assets/images/brands/li.svg" alt="li" loading="lazy" /></a>
        </li>
      </ul>
    </div>
    <p class="text-center">Don't have account?<router-link :to="{ name: 'animated.auth.register' }">Click here to sign up.</router-link></p>
  </b-card>
</template>

<script setup></script>

<style lang="scss" scoped></style>

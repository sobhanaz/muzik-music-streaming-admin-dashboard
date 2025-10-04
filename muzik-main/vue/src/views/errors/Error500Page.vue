<template>
<div class="vh-100">
    <div class="container">
        <div class="row align-items-center align-self-center vh-100">
            <div class="col-sm-12 text-center">
                <img src="/assets/images/error/07.png" class="img-fluid w-50">
                <h2 class="mb-0 mt-4 ">Oops! This Page is Not Working.</h2>
                <p class="mt-2 mb-4">The requested is Internal Server Error.</p>
                <div class="mt-4">
                    <router-link class="btn btn-primary" :to="{ name: 'home.dashboard' }">Back to Home</router-link>
                </div>
            </div>
        </div>
    </div>   
</div>
</template>

<template>
  <b-row>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Slides only</h4>
          </div>
        </b-card-header>
        <div class="mt-2 d-flex flex-wrap gap-1">
          <div class="card-body">
            <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="/assets/images/page-img/img-1.jpg" class="d-block w-100" alt="#" />
                </div>
                <div class="carousel-item">
                  <img src="/assets/images/page-img/img-1.jpg" class="d-block w-100" alt="#" />
                </div>
                <div class="carousel-item">
                  <img src="/assets/images/page-img/img-1.jpg" class="d-block w-100" alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Slides With Controls</h4>
          </div>
        </b-card-header>

        <div class="mt-2 d-flex flex-wrap gap-1">
          <b-card-body>
            <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item">
                  <img src="/assets/images/page-img/img-1.jpg" class="d-block w-100" alt="#" />
                </div>
                <div class="carousel-item active carousel-item-start">
                  <img src="/assets/images/page-img/img-1.jpg" class="d-block w-100" alt="#" />
                </div>
                <div class="carousel-item carousel-item-next carousel-item-start">
                  <img src="/assets/images/page-img/img-1.jpg" class="d-block w-100" alt="#" />
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
              </a>
            </div>
          </b-card-body>
        </div>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Slides With Indicators</h4>
          </div>
        </b-card-header>

        <div class="mt-2 d-flex flex-wrap gap-1">
          <b-card-body>
            <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
              <ol class="carousel-indicators">
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class=""></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class=""></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="/assets/images/page-img/img-1.jpg" class="d-block w-100" alt="#" />
                </div>
                <div class="carousel-item">
                  <img src="/assets/images/page-img/img-1.jpg" class="d-block w-100" alt="#" />
                </div>
                <div class="carousel-item">
                  <img src="/assets/images/page-img/img-1.jpg" class="d-block w-100" alt="#" />
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
              </a>
            </div>
          </b-card-body>
        </div>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Offcanvas components</h4>
          </div>
        </b-card-header>

        <div class="mt-2 d-flex flex-wrap gap-1">
          <b-card-body>
            <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
              <ol class="carousel-indicators">
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class=""></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class=""></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="active" aria-current="true"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item">
                  <img src="/assets/images/page-img/img-1.jpg" class="d-block w-100" alt="#" />
                </div>
                <div class="carousel-item">
                  <img src="/assets/images/page-img/img-1.jpg" class="d-block w-100" alt="#" />
                </div>
                <div class="carousel-item active">
                  <img src="/assets/images/page-img/img-1.jpg" class="d-block w-100" alt="#" />
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
              </a>
            </div>
          </b-card-body>
        </div>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Offcanvas components</h4>
          </div>
        </b-card-header>

        <div class="mt-2 d-flex flex-wrap gap-1">
          <b-card-body>
            <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
            <div class="bd-example">
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class=""></li>
                  <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class=""></li>
                  <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" class="active" aria-current="true"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item">
                    <img src="/assets/images/page-img/img-1.jpg" class="d-block w-100" alt="#" />
                    <div class="carousel-caption d-none d-md-block">
                      <h4 class="text-white">First slide label</h4>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src="/assets/images/page-img/img-1.jpg" class="d-block w-100" alt="#" />
                    <div class="carousel-caption d-none d-md-block">
                      <h4 class="text-white">Second slide label</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                  <div class="carousel-item active">
                    <img src="/assets/images/page-img/img-1.jpg" class="d-block w-100" alt="#" />
                    <div class="carousel-caption d-none d-md-block">
                      <h4 class="text-white">Third slide label</h4>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
              </div>
            </div>
          </b-card-body>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>

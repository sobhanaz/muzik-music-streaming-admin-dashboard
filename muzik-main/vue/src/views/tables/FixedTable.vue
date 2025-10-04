<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-header d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Basic Table</h4>
          </div>
        </div>
        <div class="card-body table-fixed p-0">
          <div class="table-responsive mt-4">
            <table id="basic-table" class="table table-striped mb-0" role="grid">
              <thead>
                <tr>
                  <th>Companies</th>
                  <th>Members</th>
                  <th>Budget</th>
                  <th>Status</th>
                  <th>Completion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <img class="rounded img-fluid avatar-40 me-3 bg-soft-primary" src="/assets/images/dashboard/64.jpg" alt="profile" loading="lazy" />
                      <h6>Soft UI XD Version</h6>
                    </div>
                  </td>
                  <td>
                    <div class="iq-media-group iq-media-group-1">
                      <a href="#" class="iq-media-1">
                        <div class="icon iq-icon-box-3 rounded-pill">SP</div>
                      </a>
                      <a href="#" class="iq-media-1">
                        <div class="icon iq-icon-box-3 rounded-pill">PP</div>
                      </a>
                      <a href="#" class="iq-media-1">
                        <div class="icon iq-icon-box-3 rounded-pill">MM</div>
                      </a>
                    </div>
                  </td>
                  <td>$14000</td>
                  <td><div class="text-info">Pending</div></td>
                  <td>
                    <div class="d-flex align-items-center mb-2">
                      <h6>60%</h6>
                    </div>
                    <!-- <div class="progress bg-soft-info shadow-none w-100" style="height: 6px">
                                <div class="progress-bar bg-info" data-toggle="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                              </div> -->
                    <b-progress :max="100" class="mb-3" style="height: 6px">
                      <b-progress-bar :value="60" variant="info"></b-progress-bar>
                    </b-progress>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <img class="rounded img-fluid avatar-40 me-3 bg-soft-primary" src="/assets/images/avatars/16.png" alt="profile" loading="lazy" />
                      <h6>Add Progress Track</h6>
                    </div>
                  </td>
                  <td>
                    <div class="iq-media-group iq-media-group-1">
                      <a href="#" class="iq-media-1">
                        <div class="icon iq-icon-box-3 rounded-pill">SP</div>
                      </a>
                      <a href="#" class="iq-media-1">
                        <div class="icon iq-icon-box-3 rounded-pill">PP</div>
                      </a>
                    </div>
                  </td>
                  <td>$3000</td>
                  <td><div class="text-danger">Pending</div></td>
                  <td>
                    <div class="d-flex align-items-center mb-2">
                      <h6>10%</h6>
                    </div>
                    <b-progress :max="100" class="mb-3" style="height: 6px">
                      <b-progress-bar :value="10" variant="danger"></b-progress-bar>
                    </b-progress>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <img class="rounded img-fluid avatar-40 me-3 bg-soft-primary" src="/assets/images/avatars/16.png" alt="profile" loading="lazy" />
                      <h6>Fix Platform Errors</h6>
                    </div>
                  </td>
                  <td>
                    <div class="iq-media-group iq-media-group-1">
                      <a href="#" class="iq-media-1">
                        <div class="icon iq-icon-box-3 rounded-pill">SP</div>
                      </a>
                      <a href="#" class="iq-media-1">
                        <div class="icon iq-icon-box-3 rounded-pill">PP</div>
                      </a>
                    </div>
                  </td>
                  <td>Not set</td>
                  <td><div class="text-success">Completed</div></td>
                  <td>
                    <div class="d-flex align-items-center mb-2">
                      <h6>100%</h6>
                    </div>
                    <b-progress :max="100" class="mb-3" style="height: 6px">
                      <b-progress-bar :value="100" variant="success"></b-progress-bar>
                    </b-progress>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <img class="rounded img-fluid avatar-40 me-3 bg-soft-primary" src="/assets/images/avatars/18.png" alt="profile" loading="lazy" />
                      <h6>Launch Our Mobile App</h6>
                    </div>
                  </td>
                  <td>
                    <div class="iq-media-group iq-media-group-1">
                      <a href="#" class="iq-media-1">
                        <div class="icon iq-icon-box-3 rounded-pill">SP</div>
                      </a>
                      <a href="#" class="iq-media-1">
                        <div class="icon iq-icon-box-3 rounded-pill">PP</div>
                      </a>
                      <a href="#" class="iq-media-1">
                        <div class="icon iq-icon-box-3 rounded-pill">AP</div>
                      </a>
                      <a href="#" class="iq-media-1">
                        <div class="icon iq-icon-box-3 rounded-pill">DP</div>
                      </a>
                    </div>
                  </td>
                  <td>$20500</td>
                  <td><div class="text-success">Completed</div></td>
                  <td>
                    <div class="d-flex align-items-center mb-2">
                      <h6>100%</h6>
                    </div>
                    <b-progress :max="100" class="mb-3" style="height: 6px">
                      <b-progress-bar :value="100" variant="success"></b-progress-bar>
                    </b-progress>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <img class="rounded img-fluid avatar-40 me-3 bg-soft-primary" src="/assets/images/avatars/19.png" alt="profile" loading="lazy" />
                      <h6>Add the New Pricing Page</h6>
                    </div>
                  </td>
                  <td>
                    <div class="iq-media-group iq-media-group-1">
                      <a href="#" class="iq-media-1">
                        <div class="icon iq-icon-box-3 rounded-pill">SP</div>
                      </a>
                    </div>
                  </td>
                  <td>$500</td>
                  <td><div class="text-primary">On Schedule</div></td>
                  <td>
                    <div class="d-flex align-items-center mb-2">
                      <h6>25%</h6>
                    </div>
                    <b-progress :max="100" class="mb-3" style="height: 6px">
                      <b-progress-bar :value="25" variant="primary"></b-progress-bar>
                    </b-progress>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <img class="rounded img-fluid avatar-40 me-3 bg-soft-primary" src="/assets/images/dashboard/64.jpg" alt="profile" loading="lazy" />
                      <h6>Redesign New Online Shop</h6>
                    </div>
                  </td>
                  <td>
                    <div class="iq-media-group iq-media-group-1">
                      <a href="#" class="iq-media-1">
                        <div class="icon iq-icon-box-3 rounded-pill">SP</div>
                      </a>
                      <a href="#" class="iq-media-1">
                        <div class="icon iq-icon-box-3 rounded-pill">PP</div>
                      </a>
                    </div>
                  </td>
                  <td>$2000</td>
                  <td><div class="text-warning">Completed</div></td>
                  <td>
                    <div class="d-flex align-items-center mb-2">
                      <h6>40%</h6>
                    </div>
                    <b-progress :max="100" class="mb-3" style="height: 6px">
                      <b-progress-bar :value="40" variant="warning"></b-progress-bar>
                    </b-progress>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

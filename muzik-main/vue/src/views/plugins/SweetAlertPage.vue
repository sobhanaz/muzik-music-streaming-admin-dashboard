<template>
  <b-row>
    <b-col lg="12">
      <b-card>
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <div class="d-flex flex-wrap align-items-center">
            <div class="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
              <h4 class="me-2 h4">{{ $t('sidebar.sweetalert') }}</h4>
            </div>
          </div>
          <small
            >For more Information regarding Sweet Alert Plugin refer
            <a href="https://www.npmjs.com/package/vue-sweetalert2">Documentation</a>
          </small>
        </div>
      </b-card>
    </b-col>
  </b-row>
  <b-row>
    <b-col lg="6">
      <b-card>
        <b-card-title>{{ $t('sidebar.basic-message') }}</b-card-title>
        <b-card-text>A short communication sent from one person to another or the central theme or idea of a communication.</b-card-text>
        <b-card-body class="text-center">
          <button class="btn btn-primary" @click="basicAlert">{{ $t('sidebar.try') }}</button>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="6">
      <b-card>
        <b-card-title>{{ $t('sidebar.text') }}</b-card-title>
        <b-card-text>Image title text is an attribute used to provide additional information about the image as well as displayed as a tooltip.</b-card-text>
        <b-card-body class="text-center">
          <button class="btn btn-primary" @click="titleAlert">{{ $t('sidebar.try') }}</button>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="6">
      <b-card>
        <b-card-title>{{ $t('sidebar.a-modal') }}</b-card-title>
        <b-card-text>Modal-header class is used to define the style for the header of the modal and footer define the style for the footer of the modal.</b-card-text>
        <b-card-body class="text-center">
          <button class="btn btn-primary" @click="modalAlert">{{ $t('sidebar.try') }}</button>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="6">
      <b-card>
        <b-card-title>{{ $t('sidebar.custom-dialog') }}</b-card-title>
        <b-card-text>It set using the position property by providing custom X and Y coordinates also positioned inside the target.</b-card-text>
        <b-card-body class="text-center">
          <button class="btn btn-primary" @click="custompostionedAlert">{{ $t('sidebar.try') }}</button>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="6">
      <b-card>
        <b-card-title>{{ $t('sidebar.confirm-dialog') }}</b-card-title>
        <b-card-text>Confirm dialog with a function attached to the "Confirm"-button and specified message, along with an OK and a Cancel button.</b-card-text>
        <b-card-body class="text-center">
          <button class="btn btn-primary" @click="confirmAlert">{{ $t('sidebar.try') }}</button>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="6">
      <b-card>
        <b-card-title>{{ $t('sidebar.custom-image') }}</b-card-title>
        <b-card-text>Custom images do not include the data from any attached block volumes. For information about backing up volumes.</b-card-text>
        <b-card-body class="text-center">
          <button class="btn btn-primary" @click="customimageAlert">{{ $t('sidebar.try') }}</button>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="6">
      <b-card>
        <b-card-title>{{ $t('sidebar.message') }}</b-card-title>
        <b-card-text>A message with custom width, padding, background and animated Nyan Cat.</b-card-text>
        <b-card-body class="text-center">
          <button class="btn btn-primary" @click="custommessageAlert">{{ $t('sidebar.try') }}</button>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="6">
      <b-card>
        <b-card-title>{{ $t('sidebar.area-lables') }}</b-card-title>
        <b-card-text>ARIA labels to create accessible element descriptions. ... if a button has both text content and an aria-label.</b-card-text>
        <b-card-body class="text-center">
          <button class="btn btn-primary" @click="labelAlert">{{ $t('sidebar.try') }}</button>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="6">
      <b-card>
        <b-card-title>{{ $t('sidebar.3buttons') }}</b-card-title>
        <b-card-text>There are three functions for adding Buttons to Android Dialog, setPositiveButton(int textId, DialogInterface).</b-card-text>
        <b-card-body class="text-center">
          <button class="btn btn-primary" @click="multiplebuttonAlert">{{ $t('sidebar.try') }}</button>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col lg="6">
      <b-card>
        <b-card-title>{{ $t('sidebar.ajaxrequest') }}</b-card-title>
        <b-card-text>The ajax() method in jQuery is used to perform an AJAX request or asynchronous HTTP request.</b-card-text>
        <b-card-body class="text-center">
          <button class="btn btn-primary" @click="ajaxAlert">{{ $t('sidebar.try') }}</button>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
export default {
  name: 'SweetAlert',
  methods: {
    basicAlert() {
      this.$swal({
        title: 'Hello! This is a Basic Message.',
        backdrop: 'rgba(60,60,60,0.8)'
      })
    },
    titleAlert() {
      this.$swal({
        title: 'The Internet?',
        text: 'That thing is still around? question',
        backdrop: 'rgba(60,60,60,0.8)'
      })
    },
    modalAlert() {
      this.$swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        backdrop: 'rgba(60,60,60,0.8)',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    },
    custompostionedAlert() {
      this.$swal({
        position: 'top-end',
        icon: 'success',
        backdrop: `
        rgba(60,60,60,0.8)`,
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 55000
      })
    },
    confirmAlert() {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        backdrop: 'rgba(60,60,60,0.8)',
        confirmButtonText: 'Yes, delete it!',
        confirmButtonColor: '#c03221'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal('Deleted!', 'Your file has been deleted.', 'success')
        }
      })
    },
    customimageAlert() {
      this.$swal({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: 'assets/images/pro/plugins/img2.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        backdrop: 'rgba(60,60,60,0.8)'
      })
    },
    custommessageAlert() {
      this.$swal({
        title: 'Custom width, padding, background.',
        width: 600,
        padding: '3em',
        background: '#fff url(/assets/images/pro/plugins/img1.jpeg)',
        backdrop: `rgba(60,60,60,0.8)
              url("../assets/images/pro/plugins/nyan-cat.gif")
              left top
              no-repeat`
      })
    },
    labelAlert() {
      this.$swal({
        title: '<strong>HTML Example</strong>',
        icon: 'info',
        html: 'You can use <b->bold text</b-card>, ' + '<a href="//sweetalert2.github.io">links</a> ' + 'and other HTML tags',
        backdrop: 'rgba(60,60,60,0.8)',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText: '<i class="fa fa-thumbs-down"></i> Cancel',
        cancelButtonAriaLabel: 'Thumbs down, cancel!'
      })
    },
    multiplebuttonAlert() {
      this.$swal({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: "Don't save",
        backdrop: `
  rgba(60,60,60,0.8)`
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal('Saved!', '', 'success')
        } else if (result.isDenied) {
          this.$swal('Changes are not saved', '', 'info')
        }
      })
    },
    ajaxAlert() {
      this.$swal({
        title: 'Submit your Github username',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        backdrop: 'rgba(60,60,60,0.8)',
        confirmButtonText: 'Look up',
        showCancelButton: true,
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          return fetch(`//api.github.com/users/${login}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error(response.statusText)
              }
              return response.json()
            })
            .catch((error) => {
              this.$swal.showValidationMessage(`Request failed: ${error}`)
            })
        },
        allowOutsideClick: () => !this.$swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url,
            backdrop: 'rgba(60,60,60,0.8)'
          })
        }
      })
    }
  }
}
</script>

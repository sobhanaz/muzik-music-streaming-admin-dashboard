<template>
  <b-row>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Popovers</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <b-button id="popover" variant="danger" size="lg">Click to toggle popover</b-button>

          <b-popover target="popover" triggers="click" placement="right">
            <template #title>Popover Title</template>
            And here's some amazing content. It's very engaging. Right?
          </b-popover>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Dismiss on next click</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <b-button id="popover" variant="danger" size="lg">Click to toggle popover</b-button>

          <b-popover target="popovers" triggers="click" placement="left">
            <template #title>Popover Title</template>
            And here's some amazing content. It's very engaging. Right?
          </b-popover>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Disabled elements</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Elements with the <code>disabled</code> attribute aren’t interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you’ll want to trigger the popover from a wrapper <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code> and override the <code>pointer-events</code> on the disabled element.</p>
          <b-button v-b-popover.click.start="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" variant="primary" :disabled="true">Disabled Button</b-button>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Hover elements</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>For disabled popover triggers, you may also prefer <code>data-trigger="hover"</code> so that the popover appears as immediate visual feedback to your users as they may not expect to <em>click</em> on a disabled element.</p>
          <b-button v-b-popover.click.start="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" variant="primary" :disabled="true">Disabled Button</b-button>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Four directions</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Four options are available: top, right, bottom, and left aligned.</p>
          <div class="iq-avatars mt-2 d-flex flex-wrap gap-2">
            <b-button v-b-popover.click.top="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'">Popover on top</b-button>
            <b-button v-b-popover.click.right="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'">Popover on Right</b-button>
            <b-button v-b-popover.click.bottom="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'">Popover on Bottom</b-button>
            <b-button v-b-popover.click.start="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'">Popover on Left</b-button>
          </div>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Popovers With Color</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Four options are available: top, right, bottom, and left aligned.</p>
          <div class="iq-avatars mt-2 d-flex flex-wrap gap-2">
            <b-button v-b-popover.click.top="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" variant="primary">Popover on top</b-button>
            <b-button v-b-popover.click.right="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" variant="success">Popover on Right</b-button>
            <b-button v-b-popover.click.bottom="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" variant="danger">Popover on Bottom</b-button>
            <b-button v-b-popover.click.start="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" variant="info">Popover on Left</b-button>
          </div>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Popovers With Color</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Four options are available: top, right, bottom, and left aligned.</p>
          <div class="iq-avatars mt-2 d-flex flex-wrap gap-2">
            <b-button v-b-popover.click.top="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" variant="soft-primary">Popover on top</b-button>
            <b-button v-b-popover.click.right="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" variant="soft-success">Popover on Right</b-button>
            <b-button v-b-popover.click.bottom="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" variant="soft-danger">Popover on Bottom</b-button>
            <b-button v-b-popover.click.start="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" variant="soft-info">Popover on Left</b-button>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>

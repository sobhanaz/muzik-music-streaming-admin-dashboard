<template>
  <b-row>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Tooltips</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <div class="iq-avatars mt-2 d-flex flex-wrap gap-1">
            <p>Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left. The data-bs-placement attribute specifies the tooltip position.</p>
            <b-button v-b-tooltip.hover title="Tooltip on top">Tooltip on top</b-button>
            <b-button v-b-tooltip.hover.bottom title="Tooltip on bottom">Tooltip on Bottom</b-button>
            <b-button v-b-tooltip.hover.right title="Tooltip on right">Tooltip on Right</b-button>
            <b-button v-b-tooltip.hover.left title="Tooltip on left">Tooltip on Left</b-button>
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Disabled elements</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Elements with the <code>disabled</code> attribute aren’t interactive, meaning users cannot focus, hover, or click them to trigger a tooltip (or popover). As a workaround, you’ll want to trigger the tooltip from a wrapper <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>, ideally made keyboard-focusable using <code>tabindex="0"</code>, and override the <code>pointer-events</code> on the disabled element.</p>
          <span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" title="Disabled tooltip">
            <b-button v-b-tooltip.hover :disabled="true" variant="primary" title="Tooltip on disabled"> Disabled Button</b-button>
          </span>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Tooltips</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <div class="iq-avatars mt-2 d-flex flex-wrap gap-1">
            <p>Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left. The data-bs-placement attribute specifies the tooltip position.</p>
            <b-button v-b-tooltip.hover variant="primary" title="Tooltip on top">Tooltip on top</b-button>
            <b-button v-b-tooltip.hover.bottom variant="success" title="Tooltip on bottom">Tooltip on Bottom</b-button>
            <b-button v-b-tooltip.hover.right variant="danger " title="Tooltip on right">Tooltip on Right</b-button>
            <b-button v-b-tooltip.hover.left variant="info " title="Tooltip on left">Tooltip on Left</b-button>
          </div>
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Tooltips</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <div class="iq-avatars mt-2 d-flex flex-wrap gap-1">
            <p>Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left. The data-bs-placement attribute specifies the tooltip position.</p>
            <b-button v-b-tooltip.hover variant="soft-primary" title="Tooltip on top">Tooltip on top</b-button>
            <b-button v-b-tooltip.hover.bottom variant="soft-success" title="Tooltip on bottom">Tooltip on Bottom</b-button>
            <b-button v-b-tooltip.hover.right variant="soft-danger " title="Tooltip on right">Tooltip on Right</b-button>
            <b-button v-b-tooltip.hover.left variant="soft-info " title="Tooltip on left">Tooltip on Left</b-button>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="12">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Hover elements</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Hover over the buttons below to see the tooltip.</p>
          <b-a v-b-tooltip.hover text="primary" class="text-primary" title="Some tooltip text!">Hover Over Me</b-a>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>

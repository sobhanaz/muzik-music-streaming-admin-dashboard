
import TabNav from '@/components/bootstrap/tab/TabNav.vue'
import TabNavItems from '@/components/bootstrap/tab/TabNavItems.vue'
import TabContent from '@/components/bootstrap/tab/TabContent.vue'
import TabContentItem from '@/components/bootstrap/tab/TabContentItem.vue'
// Tab Components
import TabButton from '@/components/bootstrap/tab/TabButton.vue'
import TabPane from '@/components/bootstrap/tab/TabPane.vue'

// Brand Components
import BrandLogo from '@/components/custom/logo/BrandLogo.vue'
import BrandName from '@/components/custom/logo/BrandName.vue'

// Icon Components
import IconComponent from '@/components/icons/IconComponent.vue'

// Form Components
import SelectComponent from '@/components/custom/select/SelectComponent.vue'
import QtyButton from '@/components/custom/elements/QtyButton.vue'

export default {
  install(app) {
    app.component('TabNav', TabNav )
    app.component('TabNavItems', TabNavItems )
    app.component('TabContent', TabContent )
    app.component('TabContentItem', TabContentItem )
    // Tab Components
    app.component('TabButton', TabButton )
    app.component('TabPane', TabPane )

    // Brand Components
    app.component('BrandLogo', BrandLogo )
    app.component('BrandName', BrandName )

    // Icon Components
    app.component('IconComponent', IconComponent )

    // Form Components
    app.component('SelectComponent', SelectComponent )
    app.component('QtyButton', QtyButton )
  }
}

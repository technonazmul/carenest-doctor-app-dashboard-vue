<template>
    <div class="sidebar-contact">
        <div class="toggle-theme"  data-bs-toggle="offcanvas" data-bs-target="#theme-setting"><i class="ti ti-settings"></i></div>
    </div>
    <div class="sidebar-themesettings offcanvas offcanvas-end" id="theme-setting">
        <div class="offcanvas-header d-flex align-items-center justify-content-between bg-primary">
            <div>
                <h5 class="text-white mb-0">Theme Customizer</h5>
            </div>
            <button type="button" class="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="themesettings-inner offcanvas-body">
            <div class="accordion accordion-bordered" id="settingtheme">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button text-gray-9 fw-semibold fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#layoutsetting" aria-expanded="true" aria-controls="collapsecustomicon1One">
                            Select Layouts
                        </button>
                    </h2>
                    <div id="layoutsetting" class="accordion-collapse collapse show">
                        <div class="accordion-body">
                            <div class="theme-content">
                                <div class="row g-3">
                                    <div class="col-4">
                                        <div class="theme-layout" @click="handleUpdateTheme('data-layout', 'default')">
                                            <input type="radio" name="LayoutTheme" id="defaultLayout" value="default" :checked="themeSettings['data-layout'] === 'default'">
                                            <label for="defaultLayout">
                                                <span class="d-block mb-2 layout-img">
                                                    <span class="theme-check rounded-circle"><i class="ti ti-check"></i></span>
                                                    <img src="@/assets/img/theme/default.svg" alt="img">
                                                </span>                                     
                                                <span class="layout-type">Default</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="theme-layout" @click="handleUpdateTheme('data-layout', 'mini')">
                                            <input type="radio" name="LayoutTheme" id="miniLayout" value="mini" :checked="themeSettings['data-layout'] === 'mini'">
                                            <label for="miniLayout">
                                                <span class="d-block mb-2 layout-img">
                                                <span class="theme-check rounded-circle"><i class="ti ti-check"></i></span>
                                                    <img src="@/assets/img/theme/mini.svg" alt="img">
                                                </span>                                    
                                                <span class="layout-type">Mini</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="theme-layout" @click="handleUpdateTheme('data-layout', 'hoverview')">
                                            <input type="radio" name="LayoutTheme" id="hoverviewLayout" value="hoverview" :checked="themeSettings['data-layout'] === 'hoverview'">
                                            <label for="hoverviewLayout">
                                                <span class="d-block mb-2 layout-img">
                                                <span class="theme-check rounded-circle"><i class="ti ti-check"></i></span>
                                                    <img src="@/assets/img/theme/mini.svg" alt="img">
                                                </span>                                    
                                                <span class="layout-type">Hover View</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="theme-layout" @click="handleUpdateTheme('data-layout', 'hidden')">
                                            <input type="radio" name="LayoutTheme" id="hiddenLayout" value="hidden" :checked="themeSettings['data-layout'] === 'hidden'"> 
                                            <label for="hiddenLayout">
                                                <span class="d-block mb-2 layout-img">
                                                <span class="theme-check rounded-circle"><i class="ti ti-check"></i></span>
                                                    <img src="@/assets/img/theme/full-width.svg" alt="img">
                                                </span>                                    
                                                <span class="layout-type">Hidden</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="theme-layout" @click="handleUpdateTheme('data-layout', 'full-width')">
                                            <input type="radio" name="LayoutTheme" id="full-widthLayout" value="full-width" :checked="themeSettings['data-layout'] === 'full-width'">
                                            <label for="full-widthLayout">
                                                <span class="d-block mb-2 layout-img">
                                                <span class="theme-check rounded-circle"><i class="ti ti-check"></i></span>
                                                    <img src="@/assets/img/theme/full-width.svg" alt="img">
                                                </span>                                    
                                                <span class="layout-type">Full Width</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button text-gray-9 fw-semibold fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarcolorsetting" aria-expanded="true">
                            Sidebar Color
                        </button>
                    </h2>
                    <div id="sidebarcolorsetting" class="accordion-collapse collapse show">
                        <div class="accordion-body">
                        <div class="theme-content">
                        <h6 class="fs-14 fw-medium mb-2">Solid Colors</h6>
                        <div class="d-flex align-items-center flex-wrap">
                                <div class="theme-colorselect m-1 me-2" @click="handleUpdateTheme('data-sidebar', 'light')">
                                    <input type="radio" name="sidebar" id="lightSidebar" value="light" :checked="themeSettings['data-sidebar'] === 'light'">
                                    <label for="lightSidebar" class="d-block rounded mb-2">
                                        <span class="theme-check rounded-circle"><i class="ti ti-check"></i></span>
                                    </label>
                                </div>
                                <div class="theme-colorselect m-1 me-2" @click="handleUpdateTheme('data-sidebar', 'sidebar2')">
                                    <input type="radio" name="sidebar" id="sidebar2Sidebar" value="sidebar2" :checked="themeSettings['data-sidebar'] === 'sidebar2'">
                                    <label for="sidebar2Sidebar" class="d-block rounded bg-white mb-2">
                                        <span class="theme-check rounded-circle"><i class="ti ti-check"></i></span>
                                    </label>
                                </div>
                                <div class="theme-colorselect m-1 me-2" @click="handleUpdateTheme('data-sidebar', 'sidebar3')">
                                    <input type="radio" name="sidebar" id="sidebar3Sidebar" value="sidebar3" :checked="themeSettings['data-sidebar'] === 'sidebar3'">
                                    <label for="sidebar3Sidebar" class="d-block rounded bg-dark mb-2">
                                        <span class="theme-check rounded-circle"><i class="ti ti-check"></i></span>
                                    </label>
                                </div>
                                <div class="theme-colorselect m-1 me-2" @click="handleUpdateTheme('data-sidebar', 'sidebar4')">
                                    <input type="radio" name="sidebar" id="sidebar4Sidebar" value="sidebar4" :checked="themeSettings['data-sidebar'] === 'sidebar4'">
                                    <label for="sidebar4Sidebar" class="d-block rounded bg-primary mb-2">
                                        <span class="theme-check rounded-circle"><i class="ti ti-check"></i></span>
                                    </label>
                                </div>
                                <div class="theme-colorselect m-1 me-2" @click="handleUpdateTheme('data-sidebar', 'sidebar5')">
                                    <input type="radio" name="sidebar" id="sidebar5Sidebar" value="sidebar5" :checked="themeSettings['data-sidebar'] === 'sidebar5'">
                                    <label for="sidebar5Sidebar" class="d-block rounded bg-secondary mb-2">
                                        <span class="theme-check rounded-circle"><i class="ti ti-check"></i></span>
                                    </label>
                                </div>
                                <div class="theme-colorselect m-1 me-2" @click="handleUpdateTheme('data-sidebar', 'sidebar6')">
                                    <input type="radio" name="sidebar" id="sidebar6Sidebar" value="sidebar6" :checked="themeSettings['data-sidebar'] === 'sidebar6'">
                                    <label for="sidebar6Sidebar" class="d-block rounded bg-info mb-2">
                                        <span class="theme-check rounded-circle"><i class="ti ti-check"></i></span>
                                    </label>
                                </div>    
                                <div class="theme-colorselect m-1 me-2" @click="handleUpdateTheme('data-sidebar', 'sidebar7')">
                                    <input type="radio" name="sidebar" id="sidebar7Sidebar" value="sidebar7" :checked="themeSettings['data-sidebar'] === 'sidebar7'">
                                    <label for="sidebar7Sidebar" class="d-block rounded bg-success mb-2">
                                        <span class="theme-check rounded-circle"><i class="ti ti-check"></i></span>
                                    </label>
                                </div>      
                            </div>
                            <h6 class="fs-14 fw-medium mb-2">Gradient Colors</h6>
                            <div class="d-flex align-items-center flex-wrap">
                                <div class="theme-colorselect m-1 me-2" @click="handleUpdateTheme('data-sidebar', 'gradientsidebar1')">
                                    <input type="radio" name="sidebar" id="gradientsidebar1Sidebar" value="gradientsidebar1" :checked="themeSettings['data-sidebar'] === 'gradientsidebar1'">
                                    <label for="gradientsidebar1Sidebar" class="d-block rounded bg-primary bg-gradient">
                                        <span class="theme-check rounded-circle"><i class="ti ti-check"></i></span>
                                    </label>
                                </div>
                                <div class="theme-colorselect m-1 me-2" @click="handleUpdateTheme('data-sidebar', 'gradientsidebar2')">
                                    <input type="radio" name="sidebar" id="gradientsidebar2Sidebar" value="gradientsidebar2" :checked="themeSettings['data-sidebar'] === 'gradientsidebar2'">
                                    <label for="gradientsidebar2Sidebar" class="d-block rounded bg-secondary bg-gradient">
                                        <span class="theme-check rounded-circle"><i class="ti ti-check"></i></span>
                                    </label>
                                </div>
                                <div class="theme-colorselect m-1 me-2" @click="handleUpdateTheme('data-sidebar', 'gradientsidebar3')">
                                    <input type="radio" name="sidebar" id="gradientsidebar3Sidebar" value="gradientsidebar3" :checked="themeSettings['data-sidebar'] === 'gradientsidebar3'">
                                    <label for="gradientsidebar3Sidebar" class="d-block rounded bg-success bg-gradient">
                                        <span class="theme-check rounded-circle"><i class="ti ti-check"></i></span>
                                    </label>
                                </div>
                                <div class="theme-colorselect m-1 me-2" @click="handleUpdateTheme('data-sidebar', 'gradientsidebar4')">
                                    <input type="radio" name="sidebar" id="gradientsidebar4Sidebar" value="gradientsidebar4" :checked="themeSettings['data-sidebar'] === 'gradientsidebar4'">
                                    <label for="gradientsidebar4Sidebar" class="d-block rounded bg-info bg-gradient">
                                        <span class="theme-check rounded-circle"><i class="ti ti-check"></i></span>
                                    </label>
                                </div>
                                <div class="theme-colorselect m-1 me-2" @click="handleUpdateTheme('data-sidebar', 'gradientsidebar5')">
                                    <input type="radio" name="sidebar" id="gradientsidebar5Sidebar" value="gradientsidebar5" :checked="themeSettings['data-sidebar'] === 'gradientsidebar5'">
                                    <label for="gradientsidebar5Sidebar" class="d-block rounded bg-dark bg-gradient">
                                        <span class="theme-check rounded-circle"><i class="ti ti-check"></i></span>
                                    </label>
                                </div>
                                <div class="theme-colorselect m-1 me-2" @click="handleUpdateTheme('data-sidebar', 'gradientsidebar6')">
                                    <input type="radio" name="sidebar" id="gradientsidebar6Sidebar" value="gradientsidebar6" :checked="themeSettings['data-sidebar'] === 'gradientsidebar6'">
                                    <label for="gradientsidebar6Sidebar" class="d-block rounded bg-danger bg-gradient">
                                        <span class="theme-check rounded-circle"><i class="ti ti-check"></i></span>
                                    </label>
                                </div>    
                            </div>
                        </div>
                        </div>
                    </div>
                </div>    
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button text-gray-9 fw-semibold fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#colorsetting" aria-expanded="true">
                            Top Bar Color
                        </button>
                    </h2>
                    <div id="colorsetting" class="accordion-collapse collapse show">
                        <div class="accordion-body pb-1">
                            <div class="theme-content">
                                <h6 class="fs-14 fw-medium mb-2">Solid Colors</h6>
                                <div class="d-flex align-items-center flex-wrap topbar-background">
                                    <div class="theme-colorselect mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'white')">
                                        <input type="radio" name="topbar" id="whiteTopbar" value="white" :checked="themeSettings['data-topbar'] === 'white'">
                                        <label for="whiteTopbar" class="white-topbar">
                                            <span class="theme-check rounded-circle"><i class="ti ti-check"></i></span>
                                        </label>
                                    </div>
                                    <div class="theme-colorselect mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'topbar1')">
                                        <input type="radio" name="topbar" id="topbar1Topbar" value="topbar1" :checked="themeSettings['data-topbar'] === 'topbar1'">
                                        <label for="topbar1Topbar" class="bg-light"><span class="theme-check rounded-circle"><i class="ti ti-check"></i></span></label>
                                    </div>
                                    <div class="theme-colorselect mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'topbar2')">
                                        <input type="radio" name="topbar" id="topbar2Topbar" value="topbar2" :checked="themeSettings['data-topbar'] === 'topbar2'">
                                        <label for="topbar2Topbar" class="bg-dark"><span class="theme-check rounded-circle"><i class="ti ti-check"></i></span></label>
                                    </div>
                                    <div class="theme-colorselect mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'topbar3')">
                                        <input type="radio" name="topbar" id="topbar3Topbar" value="topbar3" :checked="themeSettings['data-topbar'] === 'topbar3'">
                                        <label for="topbar3Topbar" class="bg-primary"><span class="theme-check rounded-circle"><i class="ti ti-check"></i></span></label>
                                    </div>
                                    <div class="theme-colorselect mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'topbar4')">
                                        <input type="radio" name="topbar" id="topbar4Topbar" value="topbar4" :checked="themeSettings['data-topbar'] === 'topbar4'">
                                        <label for="topbar4Topbar" class="bg-secondary"><span class="theme-check rounded-circle"><i class="ti ti-check"></i></span></label>
                                    </div>                   
                                    <div class="theme-colorselect mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'topbar5')">
                                        <input type="radio" name="topbar" id="topbar5Topbar" value="topbar5" :checked="themeSettings['data-topbar'] === 'topbar5'">
                                        <label for="topbar5Topbar" class="bg-info"><span class="theme-check rounded-circle"><i class="ti ti-check"></i></span></label>
                                    </div>                   
                                    <div class="theme-colorselect mb-3" @click="handleUpdateTheme('data-topbar', 'topbar6')">
                                        <input type="radio" name="topbar" id="topbar6Topbar" value="topbar6" :checked="themeSettings['data-topbar'] === 'topbar6'">
                                        <label for="topbar6Topbar" class="bg-success"><span class="theme-check rounded-circle"><i class="ti ti-check"></i></span></label>
                                    </div> 
                                </div>
                                <h6 class="fs-14 fw-medium mb-2">Gradient Colors</h6>
                                <div class="d-flex align-items-center flex-wrap topbar-background">
                                    <div class="theme-colorselect mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'gradienttopbar1')">
                                        <input type="radio" name="topbar" id="gradienttopbar1Topbar" value="gradienttopbar1" :checked="themeSettings['data-topbar'] === 'gradienttopbar1'">
                                        <label for="gradienttopbar1Topbar" class="bg-primary bg-gradient">
                                            <span class="theme-check rounded-circle"><i class="ti ti-check"></i></span>
                                        </label>
                                    </div>
                                    <div class="theme-colorselect mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'gradienttopbar2')">
                                        <input type="radio" name="topbar" id="gradienttopbar2Topbar" value="gradienttopbar2" :checked="themeSettings['data-topbar'] === 'gradienttopbar2'">
                                        <label for="gradienttopbar2Topbar" class="bg-secondary bg-gradient "><span class="theme-check rounded-circle"><i class="ti ti-check"></i></span></label>
                                    </div>
                                    <div class="theme-colorselect mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'gradienttopbar3')">
                                        <input type="radio" name="topbar" id="gradienttopbar3Topbar" value="gradienttopbar3" :checked="themeSettings['data-topbar'] === 'gradienttopbar3'">
                                        <label for="gradienttopbar3Topbar" class="bg-success bg-gradient"><span class="theme-check rounded-circle"><i class="ti ti-check"></i></span></label>
                                    </div>
                                    <div class="theme-colorselect mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'gradienttopbar4')">
                                        <input type="radio" name="topbar" id="gradienttopbar4Topbar" value="gradienttopbar4" :checked="themeSettings['data-topbar'] === 'gradienttopbar4'">
                                        <label for="gradienttopbar4Topbar" class="bg-info bg-gradient"><span class="theme-check rounded-circle"><i class="ti ti-check"></i></span></label>
                                    </div>
                                    <div class="theme-colorselect mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'gradienttopbar5')">
                                        <input type="radio" name="topbar" id="gradienttopbar5Topbar" value="gradienttopbar5" :checked="themeSettings['data-topbar'] === 'gradienttopbar5'">
                                        <label for="gradienttopbar5Topbar" class="bg-dark bg-gradient"><span class="theme-check rounded-circle"><i class="ti ti-check"></i></span></label>
                                    </div>                   
                                    <div class="theme-colorselect mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'gradienttopbar6')">
                                        <input type="radio" name="topbar" id="gradienttopbar6Topbar" value="gradienttopbar6" :checked="themeSettings['data-topbar'] === 'gradienttopbar6'">
                                        <label for="gradienttopbar6Topbar" class="bg-danger bg-gradient"><span class="theme-check rounded-circle"><i class="ti ti-check"></i></span></label>
                                    </div>                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    	
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button text-gray-9 fw-semibold fs-16" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarcolor" aria-expanded="true">
                            Theme Colors
                        </button>
                    </h2>
                    <div id="sidebarcolor" class="accordion-collapse collapse show">
                        <div class="accordion-body pb-2">
                            <div class="theme-content">
                                <div class="d-flex align-items-center flex-wrap">
                                    <div class="theme-colorsset me-2 mb-2" @click="handleUpdateTheme('data-color', 'primary')">
                                        <input type="radio" name="color" id="primaryColor" value="primary" :checked="themeSettings['data-color'] === 'primary'">
                                        <label for="primaryColor" class="primary-clr"></label>
                                    </div>
                                    <div class="theme-colorsset me-2 mb-2" @click="handleUpdateTheme('data-color', 'secondary')">
                                        <input type="radio" name="color" id="secondaryColor" value="secondary" :checked="themeSettings['data-color'] === 'secondary'">
                                        <label for="secondaryColor" class="secondary-clr"></label>
                                    </div>
                                    <div class="theme-colorsset me-2 mb-2" @click="handleUpdateTheme('data-color', 'success')">
                                        <input type="radio" name="color" id="successColor" value="success" :checked="themeSettings['data-color'] === 'success'">
                                        <label for="successColor" class="success-clr"></label>
                                    </div>
                                    <div class="theme-colorsset me-2 mb-2" @click="handleUpdateTheme('data-color', 'danger')">
                                        <input type="radio" name="color" id="dangerColor" value="danger" :checked="themeSettings['data-color'] === 'danger'">
                                        <label for="dangerColor" class="danger-clr"></label>
                                    </div>
                                    <div class="theme-colorsset me-2 mb-2" @click="handleUpdateTheme('data-color', 'info')">
                                        <input type="radio" name="color" id="infoColor" value="info" :checked="themeSettings['data-color'] === 'info'">
                                        <label for="infoColor" class="info-clr"></label>
                                    </div>
                                    <div class="theme-colorsset me-2 mb-2" @click="handleUpdateTheme('data-color', 'warning')">
                                        <input type="radio" name="color" id="warningColor" value="warning" :checked="themeSettings['data-color'] === 'warning'">
                                        <label for="warningColor" class="warning-clr"></label>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div> 
        </div>
        <div class="p-3 border-top">
            <div class="row gx-3">
                <div class="col-6">
                    <a href="#" id="resetbutton" class="btn btn-light close-theme w-100" @click.prevent="handleResetTheme"><i class="ti ti-restore me-1"></i>Reset</a>
                </div>
                <div class="col-6">
                    <a href="https://1.envato.market/9WJ2g0" target="_blank" class="btn btn-primary w-100"><i class="ti ti-shopping-cart-plus me-1"></i>Buy Product</a>
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
export default {
    data(){
        return{
            themeSettings: {
                'data-layout': 'default', // initial
                'data-width': 'default',  // initial
                'data-sidebar': 'light',  // initial
                'data-size': 'default',  // initial
                'data-topbar': 'white',  // initial
                'data-sidebarbg': 'default',  // initial
                'data-color': 'primary',  // initial
            },
            miniSidebar: false,
            expandMenu: false,
            dataLayout: 'default',
            dataWidth: 'default',
            dataSidebar: 'default',
            dataSize: 'default',
            dataTopbar: 'default',
            dataSidebarbg: 'default',
            dataColor: 'default',
        }
    },
    mounted() {
        this.updateBodyClasses();

        // Set initial value on <html> tag
        document.documentElement.setAttribute('data-layout', this.themeSettings['data-layout']);
        document.documentElement.setAttribute('data-width', this.themeSettings['data-width']);
        document.documentElement.setAttribute('data-sidebar', this.themeSettings['data-sidebar']);
        document.documentElement.setAttribute('data-size', this.themeSettings['data-size']);
        document.documentElement.setAttribute('data-topbar', this.themeSettings['data-topbar']);
        document.documentElement.setAttribute('data-sidebarbg', this.themeSettings['data-sidebarbg']);
        document.documentElement.setAttribute('data-color', this.themeSettings['data-color']);
    },
    methods: {
        handleUpdateTheme(key, value) {
            this.themeSettings[key] = value;
            document.documentElement.setAttribute(key, value);

            // sync local vars if needed
            if (key === 'data-layout') this.dataLayout = value;
            if (key === 'data-width') this.dataWidth = value;
            if (key === 'data-sidebar') this.dataSidebar = value;
            if (key === 'data-size') this.dataSize = value;
            if (key === 'data-topbar') this.dataTopbar = value;
            if (key === 'data-sidebarbg') this.dataSidebarbg = value;
            if (key === 'data-color') this.dataColor = value;

            this.updateBodyClasses();
        },
        updateBodyClasses() {
            const body = document.body;

            // reset
            body.classList.remove('mini-sidebar', 'expand-menu', 'layout-box-mode');

            // apply conditions
            if (
                this.miniSidebar ||
                this.themeSettings['data-layout'] === 'mini' ||
                this.themeSettings['data-size'] === 'compact'
            ) {
                body.classList.add('mini-sidebar');
            }

            if (
                (this.expandMenu && this.miniSidebar) ||
                (this.expandMenu && this.themeSettings['data-layout'] === 'mini')
            ) {
                body.classList.add('expand-menu');
            }

            if (this.themeSettings['data-width'] === 'box') {
                body.classList.add('layout-box-mode', 'mini-sidebar');
            }
        },
        handleResetTheme() {
            const defaults = {
                'data-layout': 'default',
                'data-width': 'default',
                'data-sidebar': 'light',
                'data-size': 'default',
                'data-topbar': 'white',
                'data-sidebarbg': 'default',
                'data-color': 'primary',
            };

            Object.entries(defaults).forEach(([key, value]) => {
                this.themeSettings[key] = value;
                document.documentElement.setAttribute(key, value);
            });

            this.miniSidebar = false;
            this.expandMenu = false;
            this.updateBodyClasses();
        },
    },
}
</script>
<template>
  <layouts-header :title="title" :text="text" :text1="text1" />
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
    Start Page Content
  ========================= -->

  <div class="page-wrapper cardhead">
    <!-- Start Content -->
    <div class="content">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">Chartjs</h3>
          </div>
        </div>
      </div>
      <!-- End Page Header -->

      <!-- start row -->
      <div class="row">
        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Bar Chart</div>
            </div>
            <div class="card-body">
              <div>
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...barchartjs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Transparency</div>
            </div>
            <div class="card-body">
              <div>
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...transparencychartJs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Gradient Bar Chart</div>
            </div>
            <div class="card-body">
              <div>
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...gradientchartJs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Horizontal Bar Chart</div>
            </div>
            <div class="card-body">
              <div class="chartjs-wrapper-demo">
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...horizontalchartJs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Horizontal Bar Chart Style2</div>
            </div>
            <div class="card-body">
              <div class="chartjs-wrapper-demo">
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...horizontal2chartJs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Vertical Stacked Bar Chart</div>
            </div>
            <div class="card-body">
              <div class="chartjs-wrapper-demo">
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...verticalchartJs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Horizontal Stacked Bar Chart</div>
            </div>
            <div class="card-body">
              <div class="chartjs-wrapper-demo">
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...horizontal3ChartJs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Line Chart</div>
            </div>
            <div class="card-body">
              <div class="chartjs-wrapper-demo">
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...linechartJs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Donut Chart</div>
            </div>
            <div class="card-body">
              <div class="chartjs-wrapper-demo">
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...donutchartJs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Pie Chart</div>
            </div>
            <div class="card-body">
              <div class="chartjs-wrapper-demo">
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...piechartJs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Area Chart</div>
            </div>
            <div class="card-body">
              <div class="chartjs-wrapper-demo">
                <vue3-chart-js
                  class="chartjs-chart"
                  v-bind="{ ...areachartJs }"
                ></vue3-chart-js>
              </div>
            </div>
          </div>
        </div>
        <!-- /Chart -->
      </div>
      <!-- end row -->
    </div>
    <!-- End Content -->

    <!-- Start Footer -->
    <div
      class="footer d-sm-flex align-items-center justify-content-between bg-white py-2 px-4 border-top"
    >
      <p class="text-dark mb-0">
        &copy; 2025 <a href="javascript:void(0);" class="link-primary">Kanakku</a>, All
        Rights Reserved
      </p>
      <p class="text-dark">Version : 1.3.8</p>
    </div>
    <!-- End Footer -->
  </div>

  <!-- ========================
End Page Content
========================= -->
</template>
<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import {
  barchartjs,
  transparencychartJs,
  gradientchartJs,
  horizontalchartJs,
  horizontal2chartJs,
  verticalchartJs,
  horizontal3ChartJs,
  linechartJs,
  areachartJs,
  donutchartJs,
  piechartJs,
} from "./data";
export default {
  data() {
    return {
      barchartjs: barchartjs,
      transparencychartJs: transparencychartJs,
      gradientchartJs: gradientchartJs,
      horizontalchartJs: horizontalchartJs,
      horizontal2chartJs: horizontal2chartJs,
      verticalchartJs: verticalchartJs,
      horizontal3ChartJs: horizontal3ChartJs,
      linechartJs: linechartJs,
      areachartJs: areachartJs,
      donutchartJs: donutchartJs,
      piechartJs: piechartJs,
      title: "Home",
      text1: "Chart",
      text: "Chart JS",
    };
  },
  components: {
    Vue3ChartJs,
  },
};
</script>

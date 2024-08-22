/* eslint-disable no-unused-vars */
// prettier-ignore
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Features page components
import FeaturesOne from "layouts/sections/page-sections/featuers/components/FeaturesOne";
import FeaturesTwo from "layouts/sections/page-sections/featuers/components/FeaturesOne/index2.js";
import FeaturesThree from "layouts/sections/page-sections/featuers/components/FeaturesOne/index3.js";

// Features page components code
import featuresOneCode from "layouts/sections/page-sections/featuers/components/FeaturesOne/code";

function Features() {
  return (
    // prettier-ignore
    <BaseLayout
      title="LiDAR Engineering"
      breadcrumb={[
        { label: "Geospatial & Remote Sensing", route: "/sections/page-sections/features" },
        { label: "LiDAR" },
      ]}
    >
      <View title="Features 1">
        <FeaturesOne />
      </View>
      <View title="Features 2" >
        <FeaturesTwo />
      </View>
      <View title="Features 3" >
        <FeaturesThree />
      </View>
    </BaseLayout>
  );
}

export default Features;

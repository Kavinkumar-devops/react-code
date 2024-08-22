/* eslint-disable no-unused-vars */
// prettier-ignore
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Features page components
import FeaturesOne from "layouts/sections/orthophoto/featuers/components/FeaturesOne";
import FeaturesTwo from "layouts/sections/orthophoto/featuers/components/FeaturesOne/index2.js";
import FeaturesThree from "layouts/sections/orthophoto/featuers/components/FeaturesOne/index3.js";

// Features page components code
import featuresOneCode from "layouts/sections/orthophoto/featuers/components/FeaturesOne/code";

function Features() {
  return (
    // prettier-ignore
    <BaseLayout
      title="Mapping Engineering"
      breadcrumb={[
        { label: "Geospatial & Remote Sensing", route: "/sections/orthophoto/featuers" },
        { label: "Mapping" },
      ]}
    >
      <View title="Mapping">
        <FeaturesOne />
      </View>
      <View title="Mobile Mapping" >
        <FeaturesTwo />
      </View>
      <View title="Features 3" >
        <FeaturesThree />
      </View>
    </BaseLayout>
  );
}

export default Features;

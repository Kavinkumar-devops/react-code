/* eslint-disable no-unused-vars */
// prettier-ignore
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Features page components
import FeaturesOne from "layouts/sections/BIM/featuers/components/FeaturesOne";
import FeaturesTwo from "layouts/sections/BIM/featuers/components/FeaturesOne/index2.js";
import FeaturesThree from "layouts/sections/BIM/featuers/components/FeaturesOne/index3.js";

// Features page components code
import featuresOneCode from "layouts/sections/BIM/featuers/components/FeaturesOne/code";

function Features() {
  return (
    // prettier-ignore
    <BaseLayout
      title="Design & Build with BIM"
      breadcrumb={[
        { label: "Geospatial & Remote Sensing", route: "/sections/BIM/features" },
        { label: "Mapping" },
      ]}
    >
      <View title="Images">
        <FeaturesOne />
      </View>
      <View title="Title 2" >
        <FeaturesTwo />
      </View>
      <View title="Title 3" >
        <FeaturesThree />
      </View>
    </BaseLayout>
  );
}

export default Features;

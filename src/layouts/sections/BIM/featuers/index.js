/* eslint-disable no-unused-vars */
// prettier-ignore
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Features page components
<<<<<<< HEAD
import FeaturesOne from "layouts/sections/BIM/featuers/components/FeaturesOne";
import FeaturesTwo from "layouts/sections/BIM/featuers/components/FeaturesOne/index2.js";
import FeaturesThree from "layouts/sections/BIM/featuers/components/FeaturesOne/index3.js";

// Features page components code
import featuresOneCode from "layouts/sections/BIM/featuers/components/FeaturesOne/code";
=======
import FeaturesOne from "layouts/sections/orthophoto/featuers/components/FeaturesOne";
import FeaturesTwo from "layouts/sections/orthophoto/featuers/components/FeaturesOne/index2.js";
import FeaturesThree from "layouts/sections/orthophoto/featuers/components/FeaturesOne/index3.js";

// Features page components code
import featuresOneCode from "layouts/sections/orthophoto/featuers/components/FeaturesOne/code";
>>>>>>> origin/main

function Features() {
  return (
    // prettier-ignore
    <BaseLayout
<<<<<<< HEAD
      title="Design & Build with BIM"
=======
      title="Mapping Engineering"
>>>>>>> origin/main
      breadcrumb={[
        { label: "Geospatial & Remote Sensing", route: "/sections/BIM/features" },
        { label: "Mapping" },
      ]}
    >
<<<<<<< HEAD
      <View title="Images">
        <FeaturesOne />
      </View>
      <View title="Title 2" >
        <FeaturesTwo />
      </View>
      <View title="Title 3" >
=======
      <View title="Mapping">
        <FeaturesOne />
      </View>
      <View title="Mobile Mapping" >
        <FeaturesTwo />
      </View>
      <View title="Features 3" >
>>>>>>> origin/main
        <FeaturesThree />
      </View>
    </BaseLayout>
  );
}

export default Features;

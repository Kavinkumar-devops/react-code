import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// PageHeaders page components
<<<<<<< HEAD
import HeaderOne from "layouts/sections/BIM/page-headers/components/HeaderOne";

// PageHeaders page components code
import headerOneCode from "layouts/sections/BIM/page-headers/components/HeaderOne/code";
=======
import HeaderOne from "layouts/sections/page-sections/page-headers/components/HeaderOne";

// PageHeaders page components code
import headerOneCode from "layouts/sections/page-sections/page-headers/components/HeaderOne/code";
>>>>>>> origin/main

function PageHeaders() {
  return (
    <BaseLayout
<<<<<<< HEAD
      title="Design & Build with BIM"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/BIM/page-headers" },
=======
      title="Page Headers"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/page-headers" },
>>>>>>> origin/main
        { label: "Page Headers" },
      ]}
    >
      <View title="Header 1" code={headerOneCode} height="40rem">
        <HeaderOne />
      </View>
    </BaseLayout>
  );
}

export default PageHeaders;

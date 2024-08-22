import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// PageHeaders page components
import HeaderOne from "layouts/sections/BIM/page-headers/components/HeaderOne";

// PageHeaders page components code
import headerOneCode from "layouts/sections/BIM/page-headers/components/HeaderOne/code";

function PageHeaders() {
  return (
    <BaseLayout
      title="Design & Build with BIM"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/BIM/page-headers" },
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

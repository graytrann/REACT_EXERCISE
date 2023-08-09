import React from "react";
import PageContentElements from "./PageContentElements";

export default function PageContent() {
  return (
    <section className="pt-4">
      <div className="container px-lg-5">
        <div className="row gx-lg-5">
          <PageContentElements />
        </div>
      </div>
    </section>
  );
}

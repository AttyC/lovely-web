import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

  //  "ctaButton": {
  //       "openNewTab": true,
  //       "label": "Resume",
  //       "url": "/LovelyWebResume.pdf"
  //     },

export default function PrivacyPage() {
  return (
    <>
      <Seo title="Privacy Policy" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="privacy" heading="Privacy Policy" />
      </Page>
    </>
  );
}

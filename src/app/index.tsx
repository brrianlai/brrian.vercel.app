import { lazy, Suspense } from "react";

import Introduction from "../components/layouts/Introduction";
import Background from "../components/layouts/Background";
import Contact from "../components/layouts/Contact";
import Education from "../components/layouts/Education";
import Projects from "../components/layouts/Projects";
import WorkExperience from "../components/layouts/WorkExperience";
import VolunteerExperience from "../components/layouts/VolunteerExperience";

const Gallery = lazy(() => import("../components/layouts/Gallery"));

export function IndexComponent() {
  return (
    <div>
      <Introduction />
      <Background />
      <Education />
      <Projects />
      <WorkExperience />
      <VolunteerExperience />
      <Contact />
      <Suspense>
        <Gallery />
      </Suspense>
    </div>
  );
}

import "./Home.scss";

import { AboutTestify } from "../AboutTestify";
import { DefaultLayout } from "../layouts/DefaultLayout";

export function Home() {
  return (
    <DefaultLayout>
      <AboutTestify className="home-about-section" />
    </DefaultLayout>
  );
}

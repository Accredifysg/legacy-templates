import Head from "next/head";
import FramelessViewerPageContainer from "../src/components/FramelessViewer/FramelessViewerPageContainer";
import { PrintWatermark } from "../src/utils/PrintWatermark";

const FramelessViewerPage = () => (
  <div style={{ position: "relative" }}>
    <Head>
      <title>Accredify Legacy Template Renderer</title>
    </Head>
    <PrintWatermark />
    <FramelessViewerPageContainer />
  </div>
);

export default FramelessViewerPage;

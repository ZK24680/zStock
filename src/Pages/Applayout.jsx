import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

function Applayout() {
  return (
    <section className="app">
      <PageNav type={"app"} />
      <AppNav />
    </section>
  );
}

export default Applayout;

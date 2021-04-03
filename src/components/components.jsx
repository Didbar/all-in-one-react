import Clock from "./Clock/clock";
import Calculator from "./TemperatureCalculator/calculator";
import FilterableProductTable from "./FilterableProductTable/filterableProductTable";

const Components = () => {
  return (
    <section className="react__components">
      <h2>Components Goes Here</h2>
      <Clock />
      <Calculator />
      <FilterableProductTable />
    </section>
  );
};

export default Components;

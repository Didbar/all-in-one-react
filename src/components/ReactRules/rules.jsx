const Rules = () => {
  return (
    <section className="react__rules">
      <h2>Rules Goes Here</h2>
      <h3>
        All React components must act like pure functions with respect to their
        props.
      </h3>
      <h3>
        Do Not Modify State Directly! We Should Use <code>setState()</code>{" "}
      </h3>
      <h3>Keys Must Only Be Unique Among Siblings </h3>
      <h3>
        For Forms Fully-Fledged Solutions is{" "}
        <a
          href="https://jaredpalmer.com/formik"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Formik
        </a>
      </h3>
      <h3>There should be a single “source of truth”</h3>
    </section>
  );
};

export default Rules;

const heading1 = React.createElement(
    "h1",
    {
      id: "title",
    },
    "विश्वाला नमस्कार!"
  );
  const heading2 = React.createElement(
    "h2",
    {
      id: "title",
    },
    "नमस्कार सर्वांना!"
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  const container = React.createElement("div", { id: "container" }, [
    heading1,
    heading2,
  ]);
  root.render(container);
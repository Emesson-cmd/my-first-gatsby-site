const steps = [
    {
      selector: '[data-tour="1"]',
      content: "text 1",
      highlightedSelectors: [".modal-content"],
      mutationObservables: [".modal"]
    },
    { selector: '[data-tour="2"]', content: "text 2" },
    { selector: '[data-tour="3"]', content: "text 3" }
  ];
  
  export default steps;
  
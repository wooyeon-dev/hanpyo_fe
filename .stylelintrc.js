module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-scss", "stylelint-order"],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "order/properties-order" :[

      // Box Model
      "display",
      "float",
      "width",
      "height",
      "margin",
      "padding",

      // Positioning
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",

      // flex
      "flex",
      "flex-direction",
      "flex-wrap",
      "flex-flow",
      "flex-basis",
      "flex-grow",
      "flex-shrink",

      // grid
      "grid-template-rows",
      "grid-template-columns",
      "grid-column",
      "grid-column-start",
      "grid-column-end",
      "grid-row",
      "grid-row-start",
      "grid-row-end",
      "grid-template-areas",
      "grid-auto-flow",
      "gap",
      "row-gap",
      "column-gap",

      // sort
      "place-items",
      "place-content",
      "place-self",
      "justify-content",
      "justify-items",
      "justify-self",
      "align-content",
      "align-items",
      "align-self",

      // Typography
      "color",
      "font",
      "line-height",
      "text-align",

      // Visual
      "background-color",
      "border",
      "border-radius",
      "opacity",

      // Animation
      "transition",

      // Misc
      "user_select"
    ],
  }
};

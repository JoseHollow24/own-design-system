const componentProps = {
  name: { type: String, reflect: true },
  pages: {
    type: Number,
    reflect: true,
    value: 10,
  },
  selectPage: {
    type: Number,
    reflect: true,
    value: 1,
  },
  shadow: {
    type: Boolean,
    reflect: true,
    value: false,
  },
};

export default componentProps;

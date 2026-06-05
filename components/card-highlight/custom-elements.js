export default {
  component: 'dsh-card-highlights',
  args: {
    color: 'a6',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['a6', 'r6', 'n6', 'v6', 't6', 'l6', 'm6', 'x6', 'a1'],
    },
  },
};

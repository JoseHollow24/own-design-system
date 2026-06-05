export default {
  component: 'dsh-card-headline',
  args: {
    segment: 'blue',
    variant: 'info',
    img: 'https://www.w3schools.com/howto/img_mountains_wide.jpg',
    amount: '$9.990',
    buttonText: 'Ver beneficio',
    buttonLink: 'https://www.google.com',
    target: '_self',
    descriptionFont: 'default',
    descriptionFontMobile: 'default',
  },
  argTypes: {
    segment: {
      control: 'select',
      options: ['default', 'blue', 'purple', 'slate'],
    },
    variant: {
      control: 'select',
      options: ['info', 'custom'],
    },
    descriptionFont: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    descriptionFontMobile: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    img: { control: 'text' },
    amount: { control: 'text' },
    buttonText: { control: 'text' },
    buttonLink: { control: 'text' },
    target: { control: 'select', options: ['_self', '_blank'] },
  },
};

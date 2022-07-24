export const args = {
  variant: 'light',
  imageSource:
    'https://d5cplpsrt2s33.cloudfront.net/m/24c1b33e4e8ceda1/WIDE_1440_560_X2-hero_kv_neu_kv_breit_web.jpg',
};

export const argTypes = {
  variant: {
    control: 'radio',
    options: ['light', 'dark'],
  },
  imageSource: {
    control: 'text',
  },
};

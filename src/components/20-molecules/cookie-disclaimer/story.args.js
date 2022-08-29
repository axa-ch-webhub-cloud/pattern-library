export const args = {
  buttonname: 'Accept',
  title: 'Terms and conditions of data protection',
  description:
    'We use cookies and analysis tools to improve the user friendliness of the Internet website and personalise the advertising of AXA and advertising partners. More details:',
  slot: 'Data protection',
  href: 'https://axa.ch/de/informationen/datenschutz.html',
  fixed: false,
};

export const argTypes = {
  buttonname: { control: 'text' },
  title: { control: 'text' },
  description: { control: 'text' },
  slot: { control: 'text' },
  href: { control: 'text' },
  fixed: { control: 'boolean' },
};

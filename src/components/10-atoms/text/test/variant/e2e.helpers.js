export const textsDesktop = {
  1: {
    fontSize: '20px',
    lineHeight: '30px',
    letterSpacing: '0.2px',
  },
  2: {
    fontSize: '18px',
    lineHeight: '27px',
    letterSpacing: '0.18px',
  },
  3: {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.32px',
  },
  4: {
    fontSize: '14px',
    lineHeight: '17px',
    letterSpacing: '0.28px',
  },
};
export const textsMobile = {
  1: {
    fontSize: '20px',
    lineHeight: '30px',
    letterSpacing: '0.2px',
  },
  2: {
    fontSize: '18px',
    lineHeight: '27px',
    letterSpacing: '0.18px',
  },
  3: {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.32px',
  },
  4: {
    fontSize: '14px',
    lineHeight: '17px',
    letterSpacing: '0.28px',
  },
};

export const fontFamilyPrimary = '"Source Sans Pro", Arial, sans-serif';

export const marginBottom = {
  1: '24px',
  2: '22px',
  3: '20px',
  4: '18px',
};

export const getTextStyles = el => {
  const styles = window.getComputedStyle(el);

  return [
    styles.fontSize,
    styles.lineHeight,
    styles.letterSpacing,
    styles.fontFamily,
    styles.fontWeight,
    styles.fontStyle,
  ];
};

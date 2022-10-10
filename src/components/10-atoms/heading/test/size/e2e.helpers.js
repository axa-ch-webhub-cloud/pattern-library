export const headlinesDesktop = {
  1: {
    fontSize: '62px',
    lineHeight: '72px',
    letterSpacing: '-0.62px',
  },
  2: {
    fontSize: '48px',
    lineHeight: '54px',
    letterSpacing: '-0.48px',
  },
  3: {
    fontSize: '36px',
    lineHeight: '42px',
    letterSpacing: '-0.36px',
  },
  4: {
    fontSize: '28px',
    lineHeight: '32px',
    letterSpacing: '-0.28px',
  },
  5: {
    fontSize: '24px',
    lineHeight: '29px',
    letterSpacing: '-0.24px',
  },
  6: {
    fontSize: '20px',
    lineHeight: '26px',
    letterSpacing: '-0.2px',
  },
};
export const headlinesMobile = {
  1: {
    fontSize: '36px',
    lineHeight: '40px',
    letterSpacing: '-0.36px',
  },
  2: {
    fontSize: '30px',
    lineHeight: '34px',
    letterSpacing: '-0.3px',
  },
  3: {
    fontSize: '28px',
    lineHeight: '32px',
    letterSpacing: '-0.28px',
  },
  4: {
    fontSize: '25px',
    lineHeight: '29px',
    letterSpacing: '-0.25px',
  },
  5: {
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '-0.2px',
  },
  6: {
    fontSize: '18px',
    lineHeight: '20px',
    letterSpacing: '-0.18px',
  },
};

export const fontFamilyPrimary = '"Source Sans Pro", Arial, sans-serif';

export const marginTopAndBottom = {
  1: '20px',
  2: '18px',
  3: '16px',
  4: '14px',
  5: '12px',
  6: '10px',
};

export const getHeadingStyles = el => {
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

import AXATestimonials from './index';

describe('Testimonials', () => {
  test('firstUpdated() should call methods (with correct arguments)', () => {
    AXATestimonials.prototype.inlineStyles = jest.fn();

    AXATestimonials.prototype.firstUpdated();

    expect(AXATestimonials.prototype.inlineStyles).toHaveBeenCalledWith('childStyles');
  });
});

import { Container } from "@/components/ui/container";
import TestimonialCards from "@/components/ui/testimonial-v2";
import { testimonials } from "@/content/testimonials";

/** Customer endorsements render only when approved content exists. */
export function TestimonialsSection() {
  if (testimonials.length === 0) return null;
  return (
    <section id="testimonials" aria-label="Testimonials" className="pb-20 md:pb-28">
      <Container width="wide" className="flex flex-col gap-8">
        <TestimonialCards testimonials={testimonials} />
      </Container>
    </section>
  );
}

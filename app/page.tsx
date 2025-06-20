import { CheckCircle, MapPin, Shield, Star, Users, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CallbackButton } from "@/components/callback-button"

export default function IVTherapyLanding() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Sticky CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-orange-500 p-4 md:hidden">
        <CallbackButton className="w-full bg-white text-orange-500 hover:bg-gray-100 font-bold text-xl py-6">
          50% Off – Book Now
        </CallbackButton>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <Badge className="mb-4 bg-red-500 text-white px-4 py-2 text-sm font-semibold">
                  LIMITED TIME: 50% OFF FIRST VISIT
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Why Smart Orange County Residents Are Choosing{" "}
                  <span className="text-orange-500">Mobile IV Therapy</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  You're tired. You're hungover. You're sick. You're burned out.
                  <br />
                  <strong>IV therapy that comes to YOU, anywhere in Orange County.</strong>
                </p>

                {/* Social Proof */}
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 mb-8 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-orange-500" />
                    <span className="font-semibold">1,000+ Trusted Clients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="font-semibold">1000+ 5-Star Reviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    <span className="font-semibold">Doctor Approved</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto lg:mx-0 mb-8">
                  <p className="text-2xl font-bold text-gray-900 mb-2">
                    <span className="line-through text-gray-400">$300</span>{" "}
                    <span className="text-orange-500">$150</span>
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Same medical-grade care you'd get in a hospital — for half the price, in your living room.
                  </p>
                  <CallbackButton className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg md:text-xl py-6 px-4 md:px-8">
                    CLAIM YOUR 50% OFF DRIP →
                  </CallbackButton>
                  <p className="text-xs text-gray-500 mt-2">100% Satisfaction Guarantee — or your money back</p>
                </div>

                <p className="text-sm text-red-600 font-semibold">⚠️ Only 4 spots left this week — Offer ends soon</p>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/hero-iv-therapy.png"
                    alt="Professional nurse administering IV therapy to a relaxed client"
                    className="w-full h-auto object-cover"
                  />

                  {/* Testimonial Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white">
                    <p className="text-sm md:text-base font-medium mb-3 leading-relaxed">
                      "After a wedding weekend, I was completely depleted. Soothe IV came to my hotel room and I was
                      back to normal within hours!"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        M
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Michelle T.</p>
                        <p className="text-xs text-gray-300">Newport Beach</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg">
                  Licensed RN
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg">
                  45 Min Session
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why People Call Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why People Call Us (And Why You Will Too)
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Hungover and can't move? We're on the way.",
                "Feel something coming on? Boost immunity now.",
                "Feel like your energy is at 40%? We'll help you get back to 100%.",
                "Dehydrated or jet lagged after a trip? We fix that in under an hour.",
                "Exhausted from work or workouts? Recharge at home.",
                "Big event coming up? Glow from the inside out.",
              ].map((reason, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="pt-6">
                    <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-4" />
                    <p className="font-medium text-gray-700">{reason}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works — Simple, Fast, Direct</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-500">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Book your appointment</h3>
                <p className="text-gray-600">
                  Choose the time and place that works for you. Need help? Call us anytime.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-500">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">We drive to you</h3>
                <p className="text-gray-600">
                  Your nurse arrives with everything needed, ready to begin. Many clients are seen same-day.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-500">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Relax and recover</h3>
                <p className="text-gray-600">
                  Sit back while your IV is administered. Most clients finish in 45 minutes or less.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <CallbackButton className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg md:text-xl px-6 md:px-10 py-6">
                SCHEDULE YOUR 50% OFF DRIP →
              </CallbackButton>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Care */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Administered by nurses. Trusted across Orange County.
            </h2>
            <p className="text-xl text-center text-gray-700 mb-12">
              Your IV treatment is not left to chance. It is reviewed, approved, and delivered by a team of highly
              trained, licensed professionals.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Every treatment is cleared by a doctor",
                "Vital signs are checked before infusion",
                "Vein access is guaranteed",
                "Ingredients are clinical-grade and performance-proven",
                "Nurses are trained in emergency protocol for total safety",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="font-medium text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-lg font-semibold text-gray-800 mt-8">
              This isn't a spa service — this is medical therapy, delivered professionally and discreetly.
            </p>
            <div className="text-center mt-8">
              <CallbackButton className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg md:text-xl px-6 md:px-10 py-6">
                CLAIM YOUR 50% OFF DRIP →
              </CallbackButton>
            </div>
          </div>
        </div>
      </section>

      {/* Feel the Shift */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Feel the Shift in Minutes</h2>

            <div className="text-left max-w-3xl mx-auto mb-8 space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Imagine this: you're sitting in your favorite chair. Maybe it's at home, maybe at the office. A
                registered nurse just inserted an IV line — painless, quick — and in less than 5 minutes, you feel it.
              </p>

              <div className="text-center my-6">
                <p className="text-2xl font-bold text-orange-500 mb-2">Clarity.</p>
                <p className="text-2xl font-bold text-blue-500 mb-2">Calm.</p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                A wave of hydration, energy, and recovery that sweeps through your body.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                You're not in a clinic. You're not surrounded by coughing strangers. And you're not checking your watch
                in a waiting room.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                You're exactly where you want to be. And you're getting exactly what your body needs.
              </p>

              <p className="text-xl text-gray-800 font-bold mt-6">
                Welcome to Soothe IV — Orange County's mobile IV therapy service. For a limited time, first-time clients
                receive 50% off.
              </p>
            </div>

            <CallbackButton className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg md:text-xl px-6 md:px-10 py-6 mb-4">
              CLAIM YOUR 50% OFF DRIP →
            </CallbackButton>

            <p className="text-sm text-gray-600 font-medium">
              100% Satisfaction Guarantee — feel the difference or your money back
            </p>
          </div>
        </div>
      </section>

      {/* IV Formulas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Formulas That Fit Your Goals</h2>
            <p className="text-lg text-center text-gray-600 mb-2">
              Your IV treatment is not left to chance. It is <strong>reviewed, approved,</strong>
            </p>
            <p className="text-lg text-center text-gray-600 mb-8">
              <strong>and delivered</strong> by a team of highly trained, licensed professionals.
            </p>

            <div className="text-center mb-8">
              <div className="inline-block bg-orange-100 px-6 py-3 rounded-lg relative">
                <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  50% OFF
                </div>
                <p className="text-3xl font-bold">
                  <span className="line-through text-gray-400">$300</span> <span className="text-orange-500">$150</span>{" "}
                  <span className="text-lg font-normal text-orange-400">ALL IVS FOR A LIMITED TIME</span>
                </p>
              </div>
            </div>

            <p className="text-center text-gray-600 mb-12">Every treatment is cleared by a doctor.</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Revive & Thrive IV */}
              <div className="bg-blue-100 rounded-2xl p-6 flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Revive & Thrive IV</h3>
                  <p className="text-gray-700 font-medium mb-4">The Ultimate Hangover Recovery Solution</p>
                  <div className="mb-4">
                    <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">Hangovers</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/70 px-3 py-1 rounded-full text-sm">High-dose vitamin C</span>
                    <span className="bg-white/70 px-3 py-1 rounded-full text-sm">Zinc</span>
                    <span className="bg-white/70 px-3 py-1 rounded-full text-sm">Glutathione</span>
                  </div>
                </div>
                <div className="ml-6 flex-shrink-0">
                  <img
                    src="/images/revive-thrive-iv.avif"
                    alt="Revive & Thrive IV Bag"
                    className="w-32 h-40 object-contain"
                  />
                </div>
              </div>

              {/* Vitality Infusion IV */}
              <div className="bg-orange-100 rounded-2xl p-6 flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Vitality Infusion IV</h3>
                  <p className="text-gray-700 font-medium mb-4">Energy & Performance Formula</p>
                  <div className="mb-4">
                    <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">Fatigue</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/70 px-3 py-1 rounded-full text-sm">Energy blends with B-complex</span>
                    <span className="bg-white/70 px-3 py-1 rounded-full text-sm">Amino Acids</span>
                  </div>
                </div>
                <div className="ml-6 flex-shrink-0">
                  <img
                    src="/images/vitality-infusion-iv.avif"
                    alt="Vitality Infusion IV Bag"
                    className="w-32 h-40 object-contain"
                  />
                </div>
              </div>

              {/* Glow and Radiate IV */}
              <div className="bg-pink-100 rounded-2xl p-6 flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Glow and Radiate IV</h3>
                  <p className="text-gray-700 font-medium mb-4">Glowing Skin, Hair and Nails</p>
                  <div className="mb-4">
                    <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">Beauty</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/70 px-3 py-1 rounded-full text-sm">Skin-brightening glutathione</span>
                    <span className="bg-white/70 px-3 py-1 rounded-full text-sm">hydration support</span>
                  </div>
                </div>
                <div className="ml-6 flex-shrink-0">
                  <img
                    src="/images/glow-radiate-iv.avif"
                    alt="Glow and Radiate IV Bag"
                    className="w-32 h-40 object-contain"
                  />
                </div>
              </div>

              {/* Vital Defense IV */}
              <div className="bg-green-100 rounded-2xl p-6 flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Vital Defense IV</h3>
                  <p className="text-gray-700 font-medium mb-4">Your Ultimate Immune Shield</p>
                  <div className="mb-4">
                    <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">Immunity</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/70 px-3 py-1 rounded-full text-sm">High-dose vitamin C</span>
                    <span className="bg-white/70 px-3 py-1 rounded-full text-sm">Zinc</span>
                    <span className="bg-white/70 px-3 py-1 rounded-full text-sm">Glutathione</span>
                  </div>
                </div>
                <div className="ml-6 flex-shrink-0">
                  <img
                    src="/images/vital-defense-iv.avif"
                    alt="Vital Defense IV Bag"
                    className="w-32 h-40 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Liquid Gold IV - Full Width */}
            <div className="bg-yellow-100 rounded-2xl p-6 flex items-center justify-between mb-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Liquid Gold IV</h3>
                <p className="text-gray-700 font-medium mb-4">
                  The Ultimate Hydration Experience, Your Body's Reset Button
                </p>
                <div className="mb-4">
                  <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">Hydration</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/70 px-3 py-1 rounded-full text-sm">
                    Dehydrated or jet lagged after a trip?
                  </span>
                  <span className="bg-white/70 px-3 py-1 rounded-full text-sm">We fix that in under an hour.</span>
                </div>
              </div>
              <div className="ml-6 flex-shrink-0">
                <img src="/images/liquid-gold-iv.avif" alt="Liquid Gold IV Bag" className="w-32 h-40 object-contain" />
              </div>
            </div>

            {/* Call to Action Card */}
            <div className="bg-blue-200 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Not sure which one's right?</h3>
              <p className="text-xl text-gray-700 mb-6">Give us a call or text and we'll help you decide!</p>
              <CallbackButton className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl px-10 py-6 rounded-full mb-4">
                <span className="mr-2">CLAIM YOUR 50%</span>
                <span className="bg-white text-orange-500 rounded-full px-2 py-1 text-sm">💰</span>
              </CallbackButton>
              <div className="text-sm">
                <p className="font-semibold text-blue-700">Save 50% off today</p>
                <p className="text-gray-600">(only 4 spots left, ends this week)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Real Stories, Real Relief</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  quote:
                    "I couldn't believe how quickly I felt better. The IV hit me in the middle of a migraine and within 20 minutes it was fading.",
                  author: "Diana S.",
                  location: "Newport Beach",
                },
                {
                  quote: "I felt flu symptoms coming on, booked same-day, and felt 70% better within the hour.",
                  author: "Sarah G.",
                  location: "Newport Beach",
                },
                {
                  quote: "I do this before every big trip and after long work weeks. Game-changer.",
                  author: "Robert M.",
                  location: "Laguna Beach",
                },
                {
                  quote: "The skin IV made me feel like I'd slept 12 hours and drank 2 gallons of water.",
                  author: "Jessica L.",
                  location: "Irvine",
                },
                {
                  quote: "This saved me the morning after my friend's wedding. Felt 100% better within an hour.",
                  author: "Michelle T.",
                  location: "Orange",
                },
                {
                  quote: "Better skin, more energy, less brain fog. I'm hooked.",
                  author: "Jessica L.",
                  location: "San Clemente",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="pt-0">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                    <p className="font-semibold text-gray-900">
                      — {testimonial.author}, {testimonial.location}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">We Guarantee It Works. Period.</h2>
            <p className="text-xl text-gray-700 mb-8">
              If you don't feel a difference after your drip, we'll make it right. No questions asked and no risk.
            </p>
            <p className="text-lg font-semibold text-gray-800 mb-8">
              That's not just marketing — it's our professional commitment.
              <br />
              Your wellness is our priority.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: "Is it safe?",
                  answer:
                    "Yes. All IVs are administered by licensed registered nurses, with oversight from a medical director.",
                },
                {
                  question: "What if I'm scared of needles?",
                  answer: "We use gentle techniques and numbing options. Most clients barely feel a thing.",
                },
                {
                  question: "What if I don't know which drip to choose?",
                  answer:
                    "Our nurse will recommend the perfect treatment based on your goals. You can just text us or call us and we will help you out!",
                },
                {
                  question: "How long does it take?",
                  answer: "Around 45 minutes, from setup to completion",
                },
                {
                  question: "How does IV Therapy work?",
                  answer:
                    "This isn't hype. This isn't a trend. This is functional medicine — mobile, fast, and proven. Our proven ingredients are clinically safe, tested and are designed to fix your problems.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Only a Few Openings Left This Week</h2>
            <p className="text-xl mb-8">
              We keep our appointments limited so every client gets 5-star care. Don't wait. This 50% off deal goes
              fast.
            </p>
            <p className="text-lg mb-8 font-semibold">
              Only a few spots remain this week. Book now to secure your 50% off session.
            </p>
            <CallbackButton className="bg-white text-orange-500 hover:bg-gray-100 font-bold text-xl md:text-2xl px-8 md:px-16 py-6 md:py-7 mb-8">
              BOOK MY 50% OFF DRIP →
            </CallbackButton>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>Registered Nurses</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                <span>Safe & Effective</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span>Premium Ingredients</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Trusted in OC</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

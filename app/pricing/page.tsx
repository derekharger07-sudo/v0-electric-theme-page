import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Check, X, ChevronDown } from 'lucide-react'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Simple, Transparent Pricing
          </h1>
          <p className="text-muted-foreground text-lg">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Starter Plan */}
          <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Perfect for individuals and small businesses starting out
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold">$29</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </div>
            
            <Button variant="outline" className="w-full mb-6">
              Start Free Trial
            </Button>

            <div>
              <p className="font-semibold mb-4 text-primary">What's included:</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Access to 5,000+ ads</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Basic ad analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Platform detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Export data (CSV)</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-muted-foreground/40 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Advanced filters</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-muted-foreground/40 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Competitor tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-muted-foreground/40 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">API access</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-muted-foreground/40 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Priority support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Professional Plan - Most Popular */}
          <div className="bg-card border-2 border-primary rounded-2xl p-8 relative shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/20 transition-all">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
                Most Popular
              </span>
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Best for growing businesses and serious marketers
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold">$79</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </div>
            
            <Button className="w-full mb-6 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30">
              Start Free Trial
            </Button>

            <div>
              <p className="font-semibold mb-4 text-primary">What's included:</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Access to all 33,000+ ads</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Advanced ad analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Platform detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Export data (CSV, JSON)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Advanced filters</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Competitor tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-muted-foreground/40 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">API access</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Priority support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-sm text-muted-foreground mb-6">
                For agencies and teams that need everything
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold">$199</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </div>
            
            <Button variant="outline" className="w-full mb-6">
              Start Free Trial
            </Button>

            <div>
              <p className="font-semibold mb-4 text-primary">What's included:</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Unlimited ad access</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Advanced ad analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Platform detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Export data (all formats)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Advanced filters</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Competitor tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>API access</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Priority support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-card border border-border rounded-lg">
              <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-accent/50 transition-colors rounded-lg">
                <span className="font-medium">Can I change plans later?</span>
                <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-5 pb-5 text-sm text-muted-foreground">
                Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </div>
            </details>

            <details className="group bg-card border border-border rounded-lg">
              <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-accent/50 transition-colors rounded-lg">
                <span className="font-medium">What payment methods do you accept?</span>
                <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-5 pb-5 text-sm text-muted-foreground">
                We accept all major credit cards, PayPal, and bank transfers for annual subscriptions.
              </div>
            </details>

            <details className="group bg-card border border-border rounded-lg">
              <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-accent/50 transition-colors rounded-lg">
                <span className="font-medium">Is there a free trial?</span>
                <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-5 pb-5 text-sm text-muted-foreground">
                Yes! All plans come with a 14-day free trial. No credit card required to start.
              </div>
            </details>

            <details className="group bg-card border border-border rounded-lg">
              <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-accent/50 transition-colors rounded-lg">
                <span className="font-medium">Can I cancel anytime?</span>
                <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-5 pb-5 text-sm text-muted-foreground">
                You can cancel your subscription at any time. You'll retain access until the end of your billing period.
              </div>
            </details>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 border border-primary/20">
          <h2 className="text-3xl font-bold mb-4 text-balance">
            Ready to find your next winning product?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
            Join thousands of successful entrepreneurs using Adnuvra to grow their businesses.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30">
            Start Your Free Trial
          </Button>
        </div>
      </main>
    </div>
  )
}

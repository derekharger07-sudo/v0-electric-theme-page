import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Search, TrendingUp, Target, Users, Check } from 'lucide-react'
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-xs font-medium">
            TRACK 13,000+ FACEBOOK & INSTAGRAM ADS
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
            Discover Winning Products &<br />High-Performing Ads
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
            Track thousands of e-commerce ads to uncover winning products, viral campaigns, and top-performing Facebook and Instagram creatives in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-xl shadow-primary/40 transition-all hover:shadow-2xl hover:shadow-primary/50">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>Join over 10,000+ happy customers</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Track Ad Performance</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Monitor 13,000+ Facebook and Instagram ads and analyze their success in real-time.
                </p>
                <a href="#" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
                  Get Started - it's free
                  <span>→</span>
                </a>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Facebook Ads Library</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Discover, analyze, and learn from real high-performing Facebook Ads campaigns.
                </p>
                <a href="#" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
                  Get Started - it's free
                  <span>→</span>
                </a>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Trending Products</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Track e-commerce winning products with the highest profit margin potential.
                </p>
                <a href="#" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
                  Get Started - it's free
                  <span>→</span>
                </a>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Competitor Research</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Easily search thousands of ads to find competitors selling your target products.
                </p>
                <a href="#" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
                  Get Started - it's free
                  <span>→</span>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Section 1 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-12">
                  <div className="w-24 h-24 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <BarChart3 className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-4">Dashboard Preview</p>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 md:order-2">
              <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs font-medium">
                <BarChart3 className="w-3 h-3 inline mr-1" />
                Professional Tracker
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
                Track Thousands of Facebook Ads with One Click
              </h2>
              <p className="text-muted-foreground mb-6 text-pretty">
                Uncover successful campaigns, sequencing ads, spy on rapidly-growing products and discover thousands of profitable ideas at lightning-fast speed.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Quickly identify winning products</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Monitor ad performance in real-time</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Track competitor campaigns effortlessly</span>
                </li>
              </ul>
              <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30">
                Try it now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs font-medium">
                <Search className="w-3 h-3 inline mr-1" />
                Professional Tracker
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
                Discover Winning Products Today
              </h2>
              <p className="text-muted-foreground mb-6 text-pretty">
                Find the hottest trending e-commerce products with proven demand. Our AI-powered system tracks thousands of successful ads to identify products that are selling right now.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Real-time product trend analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Profit margin estimation tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Access to winning ad creatives</span>
                </li>
              </ul>
              <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30">
                Start discovering
              </Button>
            </div>
            <div>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-12">
                  <div className="w-24 h-24 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <TrendingUp className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-4">Products Dashboard</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Adnuvra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

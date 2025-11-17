'use client'

import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Sparkles, TrendingUp, Zap } from 'lucide-react'
import { useState } from 'react'

export default function AIPage() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Powered by badge */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4" />
            <span>Powered by Advanced Ad Intelligence</span>
          </div>
        </div>

        {/* Hero section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Find Winning Products with Adnuvra AI
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Discover trending products, analyze ad angles, and uncover profitable opportunities
            with AI-powered insights.
          </p>
        </div>

        {/* Search bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-primary/30 to-blue-600/20 rounded-xl blur-xl animate-pulse opacity-50" />
            
            <div className="relative">
              <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-400 via-primary to-blue-600 rounded-xl opacity-30 blur animate-pulse" />
              <div className="relative flex items-center gap-2 bg-white rounded-xl p-2 border-2 border-transparent">
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Ask Adnuvra AI to find winning products, analyze ads, and more..."
                  className="flex-1 px-6 py-3 rounded-lg border-0 bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 transition-all"
                />
                <Button 
                  size="lg"
                  disabled={!searchValue.trim()}
                  className={`px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-all whitespace-nowrap ${
                    !searchValue.trim() ? 'opacity-30' : 'opacity-100'
                  }`}
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Suggestion chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-20">
          <span className="text-sm text-muted-foreground">Try:</span>
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full border-border hover:bg-accent hover:border-primary transition-all"
          >
            Top dropshipping products this week
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full border-border hover:bg-accent hover:border-primary transition-all"
          >
            Best performing ad angles for skincare
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full border-border hover:bg-accent hover:border-primary transition-all"
          >
            Trending products on TikTok
          </Button>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-3">AI-Powered Insights</h3>
            <p className="text-sm text-muted-foreground">
              Advanced algorithms analyze millions of ads
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-3">Real-Time Trends</h3>
            <p className="text-sm text-muted-foreground">
              Stay ahead with live market intelligence
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-3">Instant Results</h3>
            <p className="text-sm text-muted-foreground">
              Get actionable insights in seconds
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

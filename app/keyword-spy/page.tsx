'use client'

import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { TrendingUp, Calendar } from 'lucide-react'

// Sample trend data
const generateTrendData = (keyword: string) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return months.map((month, index) => ({
    month,
    interest: Math.floor(Math.random() * 60) + 40, // Random interest between 40-100
  }))
}

export default function KeywordSpyPage() {
  const [searchValue, setSearchValue] = useState('')
  const [hasSearched, setHasSearched] = useState(false)
  const [trendData, setTrendData] = useState<any[]>([])
  const [selectedPeriod, setSelectedPeriod] = useState('12months')
  const [currentKeyword, setCurrentKeyword] = useState('')

  const handleSearch = () => {
    if (searchValue.trim()) {
      setTrendData(generateTrendData(searchValue))
      setCurrentKeyword(searchValue)
      setHasSearched(true)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const periods = [
    { label: 'Last 7 Days', value: '7days' },
    { label: 'Last 30 Days', value: '30days' },
    { label: 'Last 3 Months', value: '3months' },
    { label: 'Last 6 Months', value: '6months' },
    { label: 'Last 12 Months', value: '12months' },
    { label: 'Last 5 Years', value: '5years' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Keyword Spy
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Discover trending keywords and analyze search interest over time
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
                  onKeyPress={handleKeyPress}
                  placeholder="Enter a keyword or topic to analyze trends..."
                  className="flex-1 px-6 py-3 rounded-lg border-0 bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 transition-all"
                />
                <Button 
                  size="lg"
                  onClick={handleSearch}
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
        {!hasSearched && (
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <span className="text-sm text-muted-foreground">Popular searches:</span>
            {['dropshipping', 'AI tools', 'ecommerce', 'social media marketing'].map((suggestion) => (
              <Button
                key={suggestion}
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchValue(suggestion)
                  setTrendData(generateTrendData(suggestion))
                  setCurrentKeyword(suggestion)
                  setHasSearched(true)
                }}
                className="rounded-full border-border hover:bg-accent hover:border-primary transition-all"
              >
                {suggestion}
              </Button>
            ))}
          </div>
        )}

        {/* Results section */}
        {hasSearched && (
          <div className="max-w-6xl mx-auto">
            {/* Keyword header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Search Interest: {currentKeyword}</h2>
                </div>
              </div>

              {/* Time period filters */}
              <div className="flex flex-wrap items-center gap-3">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Time period:</span>
                {periods.map((period) => (
                  <button
                    key={period.value}
                    onClick={() => setSelectedPeriod(period.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedPeriod === period.value
                        ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                        : 'border border-border hover:border-primary hover:bg-accent'
                    }`}
                  >
                    {period.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Chart */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="month" 
                    stroke="#6b7280"
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis 
                    stroke="#6b7280"
                    style={{ fontSize: '12px' }}
                    label={{ value: 'Interest', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="interest" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--primary))', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Stats cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-sm text-muted-foreground mb-2">Average Interest</h3>
                <p className="text-3xl font-bold text-primary">
                  {Math.floor(trendData.reduce((sum, item) => sum + item.interest, 0) / trendData.length)}
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-sm text-muted-foreground mb-2">Peak Interest</h3>
                <p className="text-3xl font-bold text-primary">
                  {Math.max(...trendData.map(item => item.interest))}
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-sm text-muted-foreground mb-2">Trend Direction</h3>
                <p className="text-3xl font-bold text-green-600">↑ Growing</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

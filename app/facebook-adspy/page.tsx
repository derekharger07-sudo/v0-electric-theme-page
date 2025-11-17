'use client'

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Search, Camera, Upload, RotateCcw } from 'lucide-react'
import { useState } from 'react'

export default function FacebookAdspyPage() {
  const [selectedFilters, setSelectedFilters] = useState({
    all: true,
    dropshipping: false,
    ecommerce: false,
    tiktokSpark: false,
    allPages: true,
    surveyPage: false,
    advertorial: false,
    productPage: false,
    collectionPage: false,
    allPlatforms: true,
    facebook: false,
    tiktok: false,
    allPlatformTypes: true,
    shopify: false,
    woocommerce: false,
    wix: false,
    squarespace: false,
    bigcommerce: false,
    wordpress: false,
    magento: false,
    prestashop: false,
    webflow: false,
    custom: false,
  })

  const [timeFilter, setTimeFilter] = useState('all')
  const [searchType, setSearchType] = useState('product-keyword')

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => ({ ...prev, [filter]: !prev[filter] }))
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">Facebook Adspy</h1>
        
        {/* Search Bar */}
        <div className="flex gap-3 mb-8">
          <select 
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="px-4 py-3 border border-border rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="product-keyword">Product Keyword</option>
            <option value="url">URL</option>
            <option value="advertiser">Advertiser Name</option>
          </select>
          
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by keyword, URL, or advertiser name"
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <Button variant="outline" size="icon" className="shrink-0">
            <Camera className="w-5 h-5" />
          </Button>
          
          <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 px-8">
            Search
          </Button>
        </div>

        {/* Filters Section */}
        <div className="space-y-4 mb-8">
          {/* Row 1: Ad Type Filters */}
          <div className="flex flex-wrap gap-3">
            <label className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
              <input 
                type="checkbox" 
                checked={selectedFilters.all}
                onChange={() => toggleFilter('all')}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm">All</span>
            </label>
            
            <label className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
              <input 
                type="checkbox"
                checked={selectedFilters.dropshipping}
                onChange={() => toggleFilter('dropshipping')}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm">📦 Dropshipping</span>
            </label>
            
            <label className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
              <input 
                type="checkbox"
                checked={selectedFilters.ecommerce}
                onChange={() => toggleFilter('ecommerce')}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm">🛒 E-commerce</span>
            </label>
            
            <label className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
              <input 
                type="checkbox"
                checked={selectedFilters.tiktokSpark}
                onChange={() => toggleFilter('tiktokSpark')}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm">⚡ TikTok Spark Ads</span>
            </label>
          </div>

          {/* Row 2: Page Type Filters */}
          <div className="flex flex-wrap gap-3">
            <label className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
              <input 
                type="checkbox"
                checked={selectedFilters.allPages}
                onChange={() => toggleFilter('allPages')}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm">All Pages</span>
            </label>
            
            <label className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
              <input 
                type="checkbox"
                checked={selectedFilters.surveyPage}
                onChange={() => toggleFilter('surveyPage')}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm">📋 Survey Page</span>
            </label>
            
            <label className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
              <input 
                type="checkbox"
                checked={selectedFilters.advertorial}
                onChange={() => toggleFilter('advertorial')}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm">📰 Advertorial</span>
            </label>
            
            <label className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
              <input 
                type="checkbox"
                checked={selectedFilters.productPage}
                onChange={() => toggleFilter('productPage')}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm">🛍️ Product Page</span>
            </label>
            
            <label className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
              <input 
                type="checkbox"
                checked={selectedFilters.collectionPage}
                onChange={() => toggleFilter('collectionPage')}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm">📚 Collection Page</span>
            </label>
          </div>

          {/* Row 3: Platform Filters */}
          <div className="flex flex-wrap gap-3">
            <label className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
              <input 
                type="checkbox"
                checked={selectedFilters.allPlatforms}
                onChange={() => toggleFilter('allPlatforms')}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm">All Platforms</span>
            </label>
            
            <label className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
              <input 
                type="checkbox"
                checked={selectedFilters.facebook}
                onChange={() => toggleFilter('facebook')}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm">📘 Facebook</span>
            </label>
            
            <label className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
              <input 
                type="checkbox"
                checked={selectedFilters.tiktok}
                onChange={() => toggleFilter('tiktok')}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm">🎵 TikTok</span>
            </label>
          </div>

          {/* Row 4: E-commerce Platform Filters */}
          <div className="flex flex-wrap gap-3">
            <label className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
              <input 
                type="checkbox"
                checked={selectedFilters.allPlatformTypes}
                onChange={() => toggleFilter('allPlatformTypes')}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm">All</span>
            </label>
            
            <label className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
              <input 
                type="checkbox"
                checked={selectedFilters.shopify}
                onChange={() => toggleFilter('shopify')}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm">🛍️ Shopify</span>
            </label>
            
            <label className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
              <input 
                type="checkbox"
                checked={selectedFilters.woocommerce}
                onChange={() => toggleFilter('woocommerce')}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm">WooCommerce</span>
            </label>
            
            <label className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
              <input 
                type="checkbox"
                checked={selectedFilters.wix}
                onChange={() => toggleFilter('wix')}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm">Wix</span>
            </label>
            
            <label className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
              <input 
                type="checkbox"
                checked={selectedFilters.squarespace}
                onChange={() => toggleFilter('squarespace')}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm">Squarespace</span>
            </label>
            
            <label className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
              <input 
                type="checkbox"
                checked={selectedFilters.bigcommerce}
                onChange={() => toggleFilter('bigcommerce')}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm">BigCommerce</span>
            </label>
            
            <label className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
              <input 
                type="checkbox"
                checked={selectedFilters.wordpress}
                onChange={() => toggleFilter('wordpress')}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm">WordPress</span>
            </label>
            
            <label className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
              <input 
                type="checkbox"
                checked={selectedFilters.magento}
                onChange={() => toggleFilter('magento')}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm">Magento</span>
            </label>
            
            <label className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
              <input 
                type="checkbox"
                checked={selectedFilters.prestashop}
                onChange={() => toggleFilter('prestashop')}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm">PrestaShop</span>
            </label>
            
            <label className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
              <input 
                type="checkbox"
                checked={selectedFilters.webflow}
                onChange={() => toggleFilter('webflow')}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm">Webflow</span>
            </label>
            
            <label className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
              <input 
                type="checkbox"
                checked={selectedFilters.custom}
                onChange={() => toggleFilter('custom')}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm">⚙️ Custom</span>
            </label>
          </div>
        </div>

        {/* Dropdown Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <select className="px-4 py-2.5 border border-border rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Ecom Category</option>
          </select>
          
          <select className="px-4 py-2.5 border border-border rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Currency</option>
          </select>
          
          <select className="px-4 py-2.5 border border-border rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Country/Region</option>
          </select>
          
          <select className="px-4 py-2.5 border border-border rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Language</option>
          </select>
          
          <select className="px-4 py-2.5 border border-border rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>📅 First Seen</option>
          </select>
          
          <select className="px-4 py-2.5 border border-border rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>📅 Last Seen</option>
          </select>
          
          <select className="px-4 py-2.5 border border-border rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Ad Run Time (days)</option>
          </select>
          
          <select className="px-4 py-2.5 border border-border rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Monthly Visits</option>
          </select>
          
          <select className="px-4 py-2.5 border border-border rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Duplicates</option>
          </select>
          
          <select className="px-4 py-2.5 border border-border rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Advertiser Ads</option>
          </select>
          
          <select className="px-4 py-2.5 border border-border rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>CTA Button</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setTimeFilter('all')}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
              timeFilter === 'all'
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                : 'bg-white text-foreground border border-border hover:border-primary'
            }`}
          >
            All Time
          </button>
          
          <button
            onClick={() => setTimeFilter('yesterday')}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
              timeFilter === 'yesterday'
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                : 'bg-white text-foreground border border-border hover:border-primary'
            }`}
          >
            Yesterday
          </button>
          
          <button
            onClick={() => setTimeFilter('7days')}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
              timeFilter === '7days'
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                : 'bg-white text-foreground border border-border hover:border-primary'
            }`}
          >
            Last 7 Days
          </button>
          
          <button
            onClick={() => setTimeFilter('30days')}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
              timeFilter === '30days'
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                : 'bg-white text-foreground border border-border hover:border-primary'
            }`}
          >
            Last 30 Days
          </button>
          
          <button
            onClick={() => setTimeFilter('90days')}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
              timeFilter === '90days'
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                : 'bg-white text-foreground border border-border hover:border-primary'
            }`}
          >
            Last 90 Days
          </button>
          
          <button
            onClick={() => setTimeFilter('6months')}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
              timeFilter === '6months'
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                : 'bg-white text-foreground border border-border hover:border-primary'
            }`}
          >
            Last 6 Months
          </button>
          
          <button
            onClick={() => setTimeFilter('year')}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
              timeFilter === 'year'
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                : 'bg-white text-foreground border border-border hover:border-primary'
            }`}
          >
            Last Year
          </button>
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between pt-6 border-t border-border">
          <div className="flex items-center gap-3">
            <select className="px-4 py-2 border border-border rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Sort by: End Date</option>
              <option>Sort by: Start Date</option>
              <option>Sort by: Popularity</option>
            </select>
            
            <button className="text-sm text-primary hover:underline">
              Edit Filters
            </button>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10"
            >
              Save Current Search
            </Button>
            
            <select className="px-4 py-2 border border-border rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Select Saved Search</option>
            </select>
            
            <Button variant="outline" size="icon">
              <RotateCcw className="w-4 h-4" />
            </Button>
            
            <Button variant="outline" size="icon">
              <Upload className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

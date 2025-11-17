'use client'

import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, TrendingUp, Heart, Eye, Play, X, Package } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function DashboardPage() {
  // Sample ad data
  const topPerformingAds = Array(5).fill(null).map((_, i) => ({
    id: i,
    platform: 'Facebook',
    title: 'Placeholder',
    brandName: 'Brand Name',
    views: '12.1k',
    likes: '1.2k'
  }))

  const trendingAds = Array(5).fill(null).map((_, i) => ({
    id: i + 5,
    platform: 'Facebook',
    title: 'Placeholder',
    brandName: 'Brand Name',
    views: '12.1k',
    likes: '1.2k'
  }))

  // State for products modal
  const [isProductModalOpen, setIsProductModalOpen] = useState(false)
  const [loadedProducts, setLoadedProducts] = useState<any[]>([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const modalScrollRef = useRef<HTMLDivElement>(null)

  const generateProducts = (startIndex: number, count: number) => {
    return Array(count).fill(null).map((_, i) => ({
      id: startIndex + i,
      name: `Product ${startIndex + i + 1}`,
      brand: 'Brand Name',
      price: `$${(Math.random() * 100 + 20).toFixed(2)}`,
      sales: `${(Math.random() * 500 + 100).toFixed(0)}`,
      engagement: `${(Math.random() * 50 + 10).toFixed(1)}%`
    }))
  }

  useEffect(() => {
    if (isProductModalOpen && loadedProducts.length === 0) {
      setLoadedProducts(generateProducts(0, 8))
      setPage(1)
    }
  }, [isProductModalOpen])

  const handleScroll = () => {
    if (!modalScrollRef.current || isLoading) return

    const { scrollTop, scrollHeight, clientHeight } = modalScrollRef.current
    
    // Load more when scrolled to bottom (with 100px buffer)
    if (scrollTop + clientHeight >= scrollHeight - 100) {
      setIsLoading(true)
      
      // Simulate loading delay
      setTimeout(() => {
        const newProducts = generateProducts(page * 8, 8)
        setLoadedProducts(prev => [...prev, ...newProducts])
        setPage(prev => prev + 1)
        setIsLoading(false)
      }, 500)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Track and analyze ads across platforms.</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search for ads, keywords, or brands..."
              className="pl-10 h-11"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-muted-foreground">Total Ads Tracked</h3>
                <TrendingUp className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="text-3xl font-bold mb-1">1,234</p>
              <p className="text-xs text-green-600">+12% from last month</p>
            </CardContent>
          </Card>

          <Link href="/dashboard/products">
            <Card className="border-border/50 cursor-pointer hover:border-primary/50 transition-colors h-full">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-muted-foreground">High Performing Products Scraped Today</h3>
                  <Heart className="w-4 h-4 text-muted-foreground" />
                </div>
                <p className="text-3xl font-bold mb-1">89</p>
                <p className="text-xs text-green-600">+4 this week</p>
              </CardContent>
            </Card>
          </Link>

          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-muted-foreground">Top Performers</h3>
                <TrendingUp className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="text-3xl font-bold mb-1">24</p>
              <p className="text-xs text-primary">High engagement ads</p>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-muted-foreground">Analytics Views</h3>
                <Eye className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="text-3xl font-bold mb-1">567</p>
              <p className="text-xs text-primary">+23% increase</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zmWnTl28l67hjAI3RSWqk4ygSrCcwu.png" 
                  alt="Facebook" 
                  className="w-6 h-6 rounded-full object-cover"
                />
                <h3 className="text-xl font-bold">Facebook Ads</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                View trending and analyze Facebook ad campaigns
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 transition-all">
                Explore Ads
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-a9cw2f1nMwp9hhU46WNgKhSIZwhEWw.png" 
                  alt="TikTok" 
                  className="w-6 h-6 rounded-full object-cover"
                />
                <h3 className="text-xl font-bold">TikTok Ads</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Discover trending TikTok advertisements
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 transition-all">
                Explore Ads
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LTYlSNtmksLaaG2TDtiRBQo2ewKt0a.png" 
                  alt="Google Trends" 
                  className="w-6 h-6 object-contain"
                />
                <h3 className="text-xl font-bold">Keyword Research</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Find high performing keywords and phrases
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 transition-all">
                Start Research
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* High Performing Ads Scraped Today */}
        <Card className="border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zmWnTl28l67hjAI3RSWqk4ygSrCcwu.png" 
                alt="Facebook" 
                className="w-6 h-6 rounded-full object-cover"
              />
              <h2 className="text-xl font-bold">High Performing Ads Scraped Today</h2>
            </div>

            {/* Top Performing Section */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-primary mb-4">Top Performing</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {topPerformingAds.map((ad) => (
                  <Card key={ad.id} className="border-border/50">
                    <CardContent className="p-4">
                      <div className="text-xs text-muted-foreground mb-2">{ad.platform}</div>
                      
                      {/* Placeholder Image */}
                      <div className="bg-gray-100 rounded-lg aspect-video mb-3 flex items-center justify-center">
                        <Play className="w-8 h-8 text-gray-400" />
                      </div>

                      {/* Ad Info */}
                      <h4 className="font-bold text-sm mb-1 text-primary">
                        Ad Title: <span className="text-foreground">{ad.title}</span>
                      </h4>
                      <p className="text-xs text-muted-foreground mb-3">{ad.brandName}</p>

                      {/* Metrics */}
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{ad.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          <span>{ad.likes}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Trending Now Section */}
            <div>
              <h3 className="text-sm font-medium mb-4">Trending Now</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {trendingAds.map((ad) => (
                  <Card key={ad.id} className="border-border/50">
                    <CardContent className="p-4">
                      <div className="text-xs text-muted-foreground mb-2">{ad.platform}</div>
                      
                      {/* Placeholder Image */}
                      <div className="bg-gray-100 rounded-lg aspect-video mb-3 flex items-center justify-center">
                        <Play className="w-8 h-8 text-gray-400" />
                      </div>

                      {/* Ad Info */}
                      <h4 className="font-bold text-sm mb-1 text-primary">
                        Ad Title: <span className="text-foreground">{ad.title}</span>
                      </h4>
                      <p className="text-xs text-muted-foreground mb-3">{ad.brandName}</p>

                      {/* Metrics */}
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{ad.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          <span>{ad.likes}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {isProductModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center gap-2">
                <Package className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">High Performing Products</h2>
              </div>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => {
                  setIsProductModalOpen(false)
                  setLoadedProducts([])
                  setPage(1)
                }}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Modal Content with Scroll */}
            <div 
              ref={modalScrollRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto p-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {loadedProducts.map((product) => (
                  <Card key={product.id} className="border-border/50 hover:border-primary/50 transition-colors">
                    <CardContent className="p-4">
                      {/* Product Image Placeholder */}
                      <div className="bg-gray-100 rounded-lg aspect-square mb-3 flex items-center justify-center">
                        <Package className="w-12 h-12 text-gray-400" />
                      </div>

                      {/* Product Info */}
                      <h3 className="font-bold text-sm mb-1">{product.name}</h3>
                      <p className="text-xs text-muted-foreground mb-2">{product.brand}</p>
                      
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-bold text-primary">{product.price}</span>
                        <span className="text-xs text-green-600">{product.engagement}</span>
                      </div>

                      <div className="text-xs text-muted-foreground">
                        {product.sales} sales
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Loading Indicator */}
              {isLoading && (
                <div className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent"></div>
                  <p className="text-sm text-muted-foreground mt-2">Loading more products...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

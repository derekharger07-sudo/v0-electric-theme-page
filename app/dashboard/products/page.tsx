'use client'

import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Package } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export default function ProductsPage() {
  const [loadedProducts, setLoadedProducts] = useState<any[]>([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

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
    // Load initial products
    setLoadedProducts(generateProducts(0, 8))
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (isLoading) return

      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = window.innerHeight
      
      // Load more when scrolled to bottom (with 300px buffer)
      if (scrollTop + clientHeight >= scrollHeight - 300) {
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

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [page, isLoading])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Package className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">High Performing Products</h1>
          </div>
          <p className="text-muted-foreground">Products scraped today with high engagement and sales</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
  )
}

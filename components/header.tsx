'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { LayoutGrid, LogOut } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export function Header() {
  const [isAdDropdownOpen, setIsAdDropdownOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true'
    const email = localStorage.getItem('userEmail') || ''
    setIsLoggedIn(loggedIn)
    setUserEmail(email)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userEmail')
    setIsLoggedIn(false)
    setUserEmail('')
    window.location.href = '/'
  }

  const getInitial = () => {
    return userEmail.charAt(0).toUpperCase() || 'U'
  }

  return (
    <nav className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">A</span>
            </div>
            <span className="font-bold text-lg">Adnuvra</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <div 
              className="relative"
              onMouseEnter={() => setIsAdDropdownOpen(true)}
              onMouseLeave={() => setIsAdDropdownOpen(false)}
            >
              <button className="text-sm px-4 py-2 rounded-full border border-muted-foreground/30 text-muted-foreground hover:text-foreground hover:bg-primary/10 hover:border-primary transition-all">
                Ad Intelligence
              </button>
              {isAdDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-48">
                  <div className="bg-card border border-border rounded-lg shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    <Link href="/ai" className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-accent transition-colors">
                      <LayoutGrid className="w-4 h-4 text-muted-foreground" />
                      All
                    </Link>
                    <Link href="/facebook-adspy" className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-accent transition-colors">
                      <Image 
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zmWnTl28l67hjAI3RSWqk4ygSrCcwu.png"
                        alt="Facebook"
                        width={16}
                        height={16}
                        className="w-4 h-4 rounded-full object-cover"
                      />
                      Facebook Adspy
                    </Link>
                    <Link href="/tiktok-adspy" className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-accent transition-colors">
                      <Image 
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-a9cw2f1nMwp9hhU46WNgKhSIZwhEWw.png"
                        alt="TikTok"
                        width={16}
                        height={16}
                        className="w-4 h-4 rounded-full"
                      />
                      TikTok Adspy
                    </Link>
                    <Link href="/ai" className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-accent transition-colors">
                      <Image 
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LTYlSNtmksLaaG2TDtiRBQo2ewKt0a.png"
                        alt="Keyword Spy"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                      Keyword Spy
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/ai" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              AI
            </Link>
            <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
          </div>
          {!isLoggedIn ? (
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30" asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          ) : (
            <div 
              className="relative"
              onMouseEnter={() => setIsProfileDropdownOpen(true)}
              onMouseLeave={() => setIsProfileDropdownOpen(false)}
            >
              <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                {getInitial()}
              </button>
              {isProfileDropdownOpen && (
                <div className="absolute top-full right-0 pt-2 w-48">
                  <div className="bg-card border border-border rounded-lg shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-2 text-sm border-b border-border">
                      <p className="font-medium truncate">{userEmail}</p>
                    </div>
                    <Link href="/dashboard" className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-accent transition-colors">
                      Dashboard
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-accent transition-colors w-full text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

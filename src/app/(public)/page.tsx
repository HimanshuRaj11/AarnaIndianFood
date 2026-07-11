import React from "react";
import Link from "next/link";
import { Utensils, Star, ShieldCheck, MapPin, ChevronRight, Award } from "lucide-react";

export default function PublicHomePage() {
  const featuredDishes = [
    {
      name: "Tandoori Butter Chicken",
      desc: "Charcoal-grilled chicken simmered in rich creamy tomato butter sauce with hand-ground spices.",
      price: "₹380.00",
      tag: "Best Seller",
      imageText: "🍗"
    },
    {
      name: "Paneer Tikka Masala",
      desc: "Marinated cottage cheese blocks wood-fired in clay oven, cooked in a spicy onion tomato masala.",
      price: "₹320.00",
      tag: "Vegetarian Special",
      imageText: "🧀"
    },
    {
      name: "Hyderabadi Dum Biryani",
      desc: "Fragrant basmati rice layered with spiced meat and fresh herbs, slow-cooked in traditional clay pot.",
      price: "₹350.00",
      tag: "Popular",
      imageText: "🍛"
    }
  ];

  return (
    <div className="space-y-20 pb-20 select-none">
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-zinc-950 overflow-hidden border-b border-zinc-900">
        {/* Abstract Background Art */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.06),transparent_60%)] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/25 to-transparent" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-widest rounded-full">
            <Award className="w-3.5 h-3.5" />
            <span>Award-Winning Authentic Culinary Art</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1] max-w-4xl mx-auto">
            Experience the Royal Flavors of <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Ancient India</span>
          </h1>
          
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Savor the legacy of hand-blended spices, clay oven baking, and slow-cooked rich curries prepared in our traditional kitchen.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/menu"
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold rounded-xl shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm"
            >
              <span>Order Online Now</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/branches"
              className="w-full sm:w-auto px-8 py-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-extrabold rounded-xl text-sm transition-all flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-amber-500" />
              <span>Find Our Branches</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Items Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-[10px] text-amber-500 font-extrabold uppercase tracking-widest block">Signature Dishes</span>
          <h2 className="text-3xl font-black text-white">Handcrafted Culinary Masterpieces</h2>
          <p className="text-zinc-400 text-xs sm:text-sm">Our guest-favorites, prepared with passion and authentic family secrets.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDishes.map((dish, i) => (
            <div
              key={i}
              className="bg-zinc-900/40 border border-zinc-850 hover:border-amber-500/20 rounded-2xl p-6 flex flex-col justify-between group hover:bg-zinc-900/60 transition-all duration-300 relative overflow-hidden"
            >
              <div>
                <div className="flex justify-between items-start gap-4">
                  <div className="text-4xl p-3 bg-zinc-900 border border-zinc-800 rounded-xl group-hover:scale-110 transition-transform">
                    {dish.imageText}
                  </div>
                  <span className="text-[9px] bg-amber-500/10 border border-amber-500/20 text-amber-500 px-2 py-0.5 rounded font-black uppercase tracking-wider">
                    {dish.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mt-5 group-hover:text-amber-400 transition-colors">
                  {dish.name}
                </h3>
                <p className="text-zinc-400 text-xs mt-2.5 leading-relaxed font-medium">
                  {dish.desc}
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-zinc-800/60 mt-6 pt-4">
                <span className="text-lg font-black text-amber-500">{dish.price}</span>
                <Link
                  href="/menu"
                  className="text-xs font-bold text-zinc-300 hover:text-white flex items-center gap-1 group/btn"
                >
                  <span>Order Now</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform text-amber-500" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-zinc-950 border-t border-b border-zinc-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.03),transparent_40%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          <div className="space-y-4">
            <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-xl flex items-center justify-center mx-auto md:mx-0 border border-amber-500/20">
              <Utensils className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Genuine Spice Blends</h3>
            <p className="text-zinc-400 text-xs leading-relaxed font-medium">
              We roast and grind dry whole spices weekly to release original volatile oils. No synthetic additions.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-xl flex items-center justify-center mx-auto md:mx-0 border border-amber-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Highest Safety & Quality</h3>
            <p className="text-zinc-400 text-xs leading-relaxed font-medium">
              Sourced directly from local farmers. Kept in absolute hygienic sanitization from farm-to-table.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-xl flex items-center justify-center mx-auto md:mx-0 border border-amber-500/20">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Clay Oven Clay Baking</h3>
            <p className="text-zinc-400 text-xs leading-relaxed font-medium">
              Traditional charcoal clay-ovens heated to over 480°C impart that signature smokiness you love.
            </p>
          </div>

        </div>
      </section>

      {/* Booking / CTA Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl font-black text-white">Ready for a Feast?</h2>
        <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
          Order for doorstep delivery or secure your table context directly at any of our branches. Experience hospitality at its best.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Link
            href="/menu"
            className="w-full text-center py-3 bg-amber-500 hover:bg-amber-600 text-black font-extrabold rounded-xl transition-all text-xs"
          >
            Browse Food Catalog
          </Link>
          <Link
            href="/contact"
            className="w-full text-center py-3 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white font-extrabold rounded-xl transition-all text-xs"
          >
            Get in Touch
          </Link>
        </div>
      </section>

    </div>
  );
}

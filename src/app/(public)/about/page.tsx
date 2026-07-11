import React from "react";
import { Utensils, Heart, Shield, Landmark } from "lucide-react";

export default function PublicAboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-16 select-none">
      
      {/* Page Title */}
      <div className="text-center space-y-3">
        <span className="text-[10px] text-amber-500 font-extrabold uppercase tracking-widest block">Our Heritage</span>
        <h1 className="text-4xl font-black text-white">About Aarna Indian Foods</h1>
        <p className="text-zinc-400 text-sm max-w-lg mx-auto">
          Crafting fine-dining dining, takeaways, and online order experiences with legacy cooking techniques.
        </p>
      </div>

      {/* Story Text */}
      <section className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 space-y-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Landmark className="w-5 h-5 text-amber-500" />
          <span>The Culinary Journey</span>
        </h3>
        <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
          Founded in Delhi, Aarna Indian Foods began with a simple vision: to celebrate the diverse, complex flavors of authentic subcontinental cuisine. Rather than relying on commercial pre-packaged curry pastes or artificial colorings, our kitchen honors the timeless processes that have defined Indian culinary arts for centuries.
        </p>
        <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
          Every sauce, marinade, and condiment is prepared daily under the watch of our head chefs. We import our cardamom, saffron, mace, and red chilies directly from selected family farms in southern and northern India, which are then roasted and ground by hand inside our kitchens.
        </p>
      </section>

      {/* Pillars Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-zinc-900/20 border border-zinc-900 rounded-2xl space-y-3">
          <div className="p-2.5 bg-amber-500/10 text-amber-500 w-10 h-10 rounded-lg flex items-center justify-center border border-amber-500/20">
            <Utensils className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-white">Traditional Tandoor</h4>
          <p className="text-zinc-400 text-xs leading-relaxed">
            Bread and meats are baked inside wood-fired tandoors, creating the authentic smoky crust and moisture retention.
          </p>
        </div>

        <div className="p-6 bg-zinc-900/20 border border-zinc-900 rounded-2xl space-y-3">
          <div className="p-2.5 bg-amber-500/10 text-amber-500 w-10 h-10 rounded-lg flex items-center justify-center border border-amber-500/20">
            <Heart className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-white">Cooked with Love</h4>
          <p className="text-zinc-400 text-xs leading-relaxed">
            Food is a connection. We treat every order with the hospitality and care we would extend to guests in our own homes.
          </p>
        </div>

        <div className="p-6 bg-zinc-900/20 border border-zinc-900 rounded-2xl space-y-3">
          <div className="p-2.5 bg-amber-500/10 text-amber-500 w-10 h-10 rounded-lg flex items-center justify-center border border-amber-500/20">
            <Shield className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-white">Purest Ingredients</h4>
          <p className="text-zinc-400 text-xs leading-relaxed">
            Zero chemical preservatives, zero MSG, and raw materials checked daily for organic purity and freshness.
          </p>
        </div>
      </section>

    </div>
  );
}

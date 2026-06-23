function ChallengeCard() {
  return (
    <div className="md:col-span-4 bg-linear-to-br from-primary-container to-inverse-primary relative overflow-hidden rounded-3xl p-gutter flex flex-col justify-between text-on-primary shadow-2xl border border-white/10 group">
      <div className="absolute -right-16 -top-16 w-48 h-48 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

      <div className="relative z-10">
        <div className="bg-on-primary/10 backdrop-blur-md px-4 py-1 rounded-full inline-block font-label-caps text-[10px] mb-gutter border border-white/20">
          CHALLENGE OF THE DAY
        </div>
        <h2 className="font-headline-lg text-headline-lg mb-2">
          Modern Architecture
        </h2>
        <p className="font-body-md opacity-90 mb-gutter">
          Push your limits with 20 questions on global design trends.
        </p>
      </div>

      <button className="relative z-10 w-full py-4 bg-on-surface text-background rounded-xl font-bold active:scale-95 transition-all duration-200 hover:shadow-xl hover:brightness-125">
        Jump In Now
      </button>
    </div>
  );
}

export default ChallengeCard;

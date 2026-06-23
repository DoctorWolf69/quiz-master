import StatsCards from "../components/StatsCards";
import ChallengeCard from "../components/ChallengeCard";

function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-margin-desktop gap-gutter">
        <div>
          <h1 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface">
            Knowledge Center
          </h1>
          <p className="font-body-md text-on-surface-variant">
            Ready to crush your daily goals,{" "}
            <span className="text-primary-fixed-dim font-semibold">Alex?</span>
          </p>
        </div>

        <div className="hidden md:flex items-center gap-gutter">
          <div className="flex items-center gap-unit text-secondary-fixed-dim bg-secondary/10 px-4 py-2 rounded-full border border-secondary/20 neon-glow-secondary">
            <span className="material-symbols-outlined">
              local_fire_department
            </span>
            <span className="font-headline-lg text-[20px] font-bold">
              12 Day Streak
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <StatsCards />
        <ChallengeCard />
      </div>
    </>
  );
}

export default Home;

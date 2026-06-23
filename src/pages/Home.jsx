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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter"></div>
    </>
  );
}

export default Home;

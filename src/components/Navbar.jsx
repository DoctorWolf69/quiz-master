function Navbar() {
  return (
    <header className="lg:hidden flex justify-between items-center w-full px-margin-mobile py-unit shadow-sm bg-surface-container sticky top-0 z-40 border-b border-outline-variant">
      <div className="font-headline-lg text-primary-fixed-dim">QuizMaster</div>
      <div className="flex gap-unit">
        <span className="material-symbols-outlined text-primary-fixed-dim">
          notifications
        </span>
        <span className="material-symbols-outlined text-primary-fixed-dim">
          account_circle
        </span>
      </div>
    </header>
  );
}

export default Navbar;

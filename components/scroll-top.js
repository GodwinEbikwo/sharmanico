export function ScrollTop() {
  const { scroll } = useLocomotiveScroll();

  const goToContent = (event) => {
    event.preventDefault();
    scroll && scroll.scrollTo("#terms-top", -100, null, 250);
  };

  return (
    <button onClick={goToContent} className="flex align-center">
      <span>
        <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 16.57l-6.188-6.232-6.188 6.231M17.812 10.338V25"
            stroke="currentColor"
            strokeWidth="1.008"
          />
        </svg>

        <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 16.57l-6.188-6.232-6.188 6.231M17.812 10.338V25"
            stroke="currentColor"
            strokeWidth="1.008"
          />
        </svg>
      </span>

      <span className="block">top</span>
    </button>
  );
}

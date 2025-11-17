const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm">
          © {2025} Sukhmanpreet Singh.
        </p>
        <p className="text-muted-foreground text-xs mt-2">
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

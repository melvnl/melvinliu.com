const ExternalLink = ({ href, children }: any) => (
  <a
    className="text-gray-600 hover:text-primaryRed transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start mx-auto w-full mt-20 mb-8 ">
      <hr className="w-full border-1 border-gray-600 mb-8" />
      <div className="w-full max-w-2xl">
        <div className="flex flex-col md:flex-row">
          <div className="mb-4 md:mb-0 mr-8">
            <p className="text-gray-600 hover:text-primaryRed transition">
              @2021
            </p>
          </div>
          <div className="mb-4 md:mb-0 mr-8">
            <ExternalLink href="https://twitter.com/mlven23">
              Twitter
            </ExternalLink>
          </div>
          <div className="mb-4 md:mb-0 mr-8">
            <ExternalLink href="https://www.linkedin.com/in/melvin-liu/">
              LinkedIn
            </ExternalLink>
          </div>
          <div className="mb-4 md:mb-0 mr-8">
            <ExternalLink href="https://github.com/melvnl">Github</ExternalLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

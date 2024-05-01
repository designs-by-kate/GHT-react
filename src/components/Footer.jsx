
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 py-4 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4">
        <div>
          <p className="text-md text-blue-900 mt-2 md:mt-0 text-center">
            &copy; {currentYear} GHTourtle Services Limited. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

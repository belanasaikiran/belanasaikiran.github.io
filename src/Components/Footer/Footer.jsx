function Footer() {
  const currentDate = new Date();
  return (
    <div className="text-center py-8 dark:text-gray-300 transition-colors duration-300">
      {" "}
      &#169; {currentDate.getFullYear()} Saikiran Belana
    </div>
  );
}

export default Footer;

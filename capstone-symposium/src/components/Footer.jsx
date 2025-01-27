let studentProduced = `/images/footer/camosun_student_produced_logo.png`;

export const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-between py-1 pb-2 fixed">
      <span className="footer-span">© Camosun ICS Class of Dec 2024 </span>
      <div>
        <img className="h-8" src={studentProduced} alt="Student Produced" />
      </div>
    </footer>
  );
};

import { Image } from "@nextui-org/image";

const Bio = ({ student, role, photo, bio_text }) => {
  let studentPhoto = `/images/students${photo}`;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-0 md:mx-auto justify-center place-items-center md:place-items-start">
        <div className="flex flex-col place-items-center md:mx-auto">
          <Image
            src={studentPhoto}
            alt="Student Photo"
            className="rounded-full h-[19em] w-[19em] md:h-[25em] md:w-[25em] mt-10 object-cover mx-2 place-items-center"
          />
          <div className="flex flex-col">
            <h3 className="modal-student-name">
              {student}
            </h3>
            <h4 className="modal-student-role">
              {role}
            </h4>
          </div>
        </div>
        <div className="grid-cols-1 md:grid-cols-3 justify-start">
          <p className="modal-student-bio-text">{bio_text}</p>
        </div>
      </div>
    </>
  );
};

export default Bio;

import PrimaryTape from "./PrimaryTape";
import AngledTape from "./AngledTape";

const Divider = () => {
  return (
    <div className="absolute w-full overflow-hidden py-6 h-59 bg-transparent -mt-27">
      <PrimaryTape />
      <AngledTape />
    </div>
  );
};

export default Divider;

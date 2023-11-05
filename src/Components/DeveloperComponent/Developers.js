import BtnShowVer from "../ShowVerBtn/BtnShowVer";
import MakeBlock from "./MakeBlock";
import '../css/Developers.css'

const Developer = () => {
  return (
    <div>
        <div className='mt-4'>
            <h1>
              Developer page
            </h1>
            <BtnShowVer/>
            <p>
              Here is shown the team of developers who carried out the project.
            </p>
        </div>
      { <MakeBlock/> }
    </div>
  );
};

export default Developer;

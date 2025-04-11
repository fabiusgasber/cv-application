import { useState } from "react";
import "../styles/form.css";
import { inputList } from "./InputData";
import FormCollection from "./FormCollection";
import CVWrapper from "./CVWrapper";
import { defaultData } from "./defaultData";

const Form = () => {

  const findInputs = (title) => {
    return inputList.find(input => input.form === title);
  }

    const [visibleIndex, setVisibleIndex] = useState(-1);
    const [personalData, setPersonalData] = useState(defaultData.defaultPersonalData);
    const [educationData, setEducationData] = useState(defaultData.defaultEducationData);
    const [workData, setWorkData] = useState(defaultData.defaultWorkData);

    const personalInputs = findInputs("personal");
    const educationInputs = findInputs("education");
    const workInputs = findInputs("work");

    const setVisible = (e, index) => {
      if (
        visibleIndex === index &&
        (e.target.tagName === "DIV" || e.target.tagName === "H2")
      ) {
        setVisibleIndex(-1);
      }
      else setVisibleIndex(index);
    }

  return (
    <div className="main-layout">
      <div className="forms">
      <FormCollection visible={visibleIndex === 0} onClick={(e) => setVisible(e, 0)} inputs={personalInputs} formData={personalData} setFormData={setPersonalData} />
      <FormCollection visible={visibleIndex === 1} onClick={(e) => setVisible(e, 1)} inputs={educationInputs} formData={educationData} setFormData={setEducationData} />
      <FormCollection visible={visibleIndex === 2} onClick={(e) => setVisible(e, 2)} inputs={workInputs} formData={workData} setFormData={setWorkData} />
      </div>
      <div className="cv-preview">
        <CVWrapper data={personalData} />
        <CVWrapper data={educationData} title="Education" />
        <CVWrapper data={workData} title="Work Experience" />
      </div>
    </div>
  );
};

export default Form;

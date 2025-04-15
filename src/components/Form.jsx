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

    const [personalData, setPersonalData] = useState(defaultData.defaultPersonalData);
    const [educationData, setEducationData] = useState(defaultData.defaultEducationData);
    const [workData, setWorkData] = useState(defaultData.defaultWorkData);

    const personalInputs = findInputs("personal");
    const educationInputs = findInputs("education");
    const workInputs = findInputs("work");

    const loadExample = () => {
      setPersonalData(defaultData.defaultPersonalData);
      setEducationData(defaultData.defaultEducationData);
      setWorkData(defaultData.defaultWorkData);
    }
  
    const deleteExample = () => {
      setPersonalData([]);
      setEducationData([]);
      setWorkData([]);
    }

  return (
    <>
    <nav>
    <button type="button" onClick={loadExample}>Load Example</button>
    <button type="button" className="delete-btn" onClick={deleteExample}>Clear CV</button>
    </nav>
    <main className="main-layout">
      <aside className="forms">
      <FormCollection inputs={personalInputs} formData={personalData} setFormData={setPersonalData} />
      <FormCollection inputs={educationInputs} formData={educationData} setFormData={setEducationData} />
      <FormCollection inputs={workInputs} formData={workData} setFormData={setWorkData} />
      </aside>
      <section className="cv-preview">
        <CVWrapper data={personalData} />
        <CVWrapper data={educationData} title="Education" />
        <CVWrapper data={workData} title="Work Experience" />
      </section>
    </main>
    </>
  );
};

export default Form;

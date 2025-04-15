import { useState } from "react";

const FormCollection = ({inputs, formData, setFormData}) => {

    const [activeForm, setActiveForm] = useState(null);
    const [status, setStatus] = useState("close") // close, add, edit

    const saveForm = (e) => {
        e.preventDefault();
        if(status === "edit"){
            const updatedFormData = formData.map((form) =>
                form.id === activeForm.id ? { ...form, ...activeForm } : form
            );
            setFormData(updatedFormData);
            setActiveForm(null);
            setStatus("close");
        }
        else if(status === "add") {
            const data = new FormData(e.target);
            const entry = Object.fromEntries(data.entries());    
            entry.id = crypto.randomUUID();
            entry.form = inputs.form;
            setFormData([...formData, entry]);
            e.target.reset();
            setStatus("close");
        }
    }

    const deleteEntry = () => {
        const form = formData.filter(form => form.id !== activeForm.id);
        setFormData([...form]);
        setActiveForm(null);
        setStatus("close");
    }

    const showForm = (e) => {
        const objectId = e.target.getAttribute("data-id");
        const form = formData.find(form => form.id === objectId);
        if(form){ 
            setStatus("edit");
            setActiveForm({...form});
        }
    }

    const handleChange = (e) => {
        const { name } = e.target;
        setActiveForm({...activeForm, [name]: e.target.value})
    }


    const summaryId = inputs.title.split(" ").join("").toLowerCase();

    return (
        <details name="forms">
        <summary id={summaryId}>{inputs.title}</summary>
        <form className="form-wrapper" onSubmit={saveForm}>
        {status === "add" &&
        <>
            {inputs.fields.map((input, index) =>
                <div><label key={input.key} htmlFor={input.name}>{input.label}</label><input autoFocus={index===0} type={input.type} id={input.name} name={input.name} placeholder={"Enter " + input.label}></input></div>
            )}
            <div className="form-btn">
            <button type="button" onClick={() => setStatus("close")}>Cancel</button>
            <button type="submit">Save</button>
            </div>
        </>
        }
        {status !== "edit" && status !== "add" &&
            <ul className="experiences">
                {formData.map(form => <li tabIndex={0}><button key={form.id} onClick={showForm} data-id={form.id} aria-description="edit entry">{form[inputs.displayField]}</button></li>)}
            </ul>
        }
        {
            status === "edit" &&
            <>
            {inputs.fields.map((input, index) =>
                <div><label key={input.key} htmlFor={input.name}>{input.label}</label><input autoFocus={index===0} value={activeForm[input.name]} name={input.name} id={input.name} onChange={handleChange} type={input.type} placeholder={"Enter " + input.label}></input></div>
            )}
            <div className="form-btn">
                <button type="button" onClick={() => setStatus("close")}>Cancel</button>
                <button type="submit">Save</button>
                <button type="button" className="delete-btn" onClick={deleteEntry}>Delete</button>
            </div>
            </>
        }
        { status !== "edit" && status !== "add" &&
            <button id="add-btn" aria-labelledby={"add-btn " + summaryId} onClick={() => setStatus("add")}>Add</button>
        }
        </form>
        </details>
    )
}

export default FormCollection;
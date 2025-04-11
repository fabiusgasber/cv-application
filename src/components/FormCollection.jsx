import { useState } from "react";

const FormCollection = ({visible, onClick, inputs, formData, setFormData}) => {

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
    return (
        <div className="form-wrapper" onClick={onClick}>
        <h2>{inputs.title}</h2>
        {status === "add" && visible &&
        <form onSubmit={saveForm}>
            {inputs.fields.map(input =>
                <div><label key={input.key} htmlFor={input.name}>{input.label}</label><input type={input.type} id={input.name} name={input.name} placeholder={"Enter " + input.label}></input></div>
            )}
            <div className="form-btn">
            <button type="button" onClick={() => setStatus("close")}>Cancel</button>
            <button type="submit">Save</button>
            </div>
        </form>
        }
        {visible && status !== "edit" && status !== "add" &&
            <ul className="experiences">
                {formData.map(form => <li key={form.id} onClick={showForm} data-id={form.id}>{form[inputs.displayField]}</li>)}
            </ul>
        }
        {
            status === "edit" && visible &&
            <form onSubmit={saveForm}>
            {inputs.fields.map(input =>
                <div><label key={input.key} htmlFor={input.name}>{input.label}</label><input value={activeForm[input.name]} name={input.name} id={input.name} onChange={handleChange} type={input.type} placeholder={"Enter " + input.label}></input></div>
            )}
            <div className="form-btn">
                <button type="button" id="delete-btn" onClick={deleteEntry}>Delete</button>
                <button type="button" onClick={() => setStatus("close")}>Cancel</button>
                <button type="submit">Save</button>
            </div>
            </form>

        }
        { visible && status !== "edit" && status !== "add" &&
            <button onClick={() => setStatus("add")}>Add</button>
        }
        </div>
    )
}

export default FormCollection;